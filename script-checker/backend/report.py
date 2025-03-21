from fpdf import FPDF
import os
import json
import logging
import time

REPORTS_DIR = "saved_reports"

if not os.path.exists(REPORTS_DIR):
    os.makedirs(REPORTS_DIR)
    logging.info(f"Created reports directory: {REPORTS_DIR}")

def save_report(report):
    """Save a report using the matched company name for directory consistency."""
    matched_company_name = report.get("matched_name", "").strip()

    if not matched_company_name:
        logging.error("Missing matched_name in report data!")
        raise ValueError("Missing matched_name in report data")

    report_id = f"{matched_company_name}_{report['patent_id']}".replace(" ", "_")
    report_dir = os.path.join(REPORTS_DIR, report_id)

    if not os.path.exists(report_dir):
        os.makedirs(report_dir)
        logging.info(f"Created directory: {report_dir}")

    if "analysis_id" not in report or not report["analysis_id"]:
        logging.error("Missing analysis_id in report data!")
        raise ValueError("Missing analysis_id in report data")

    analysis_id = report["analysis_id"]
    report_file = os.path.join(report_dir, f"{analysis_id}.json")

    try:
        with open(report_file, "w") as f:
            json.dump(report, f, indent=2)

        logging.info(f"Report {analysis_id} saved inside {report_dir} as {report_file}.")
    except Exception as e:
        logging.error(f"Error saving report: {str(e)}")
        raise




def get_all_reports():
    """Return all reports grouped by report_id (company + patent)."""
    time.sleep(0.2)
    grouped_reports = {}

    for report_id in os.listdir(REPORTS_DIR):
        report_dir = os.path.join(REPORTS_DIR, report_id)
        if os.path.isdir(report_dir):
            grouped_reports[report_id] = []
            for filename in os.listdir(report_dir):
                if filename.endswith(".json"):
                    analysis_id = filename[:-5]  # Remove .json extension
                    grouped_reports[report_id].append({"analysis_id": analysis_id})

    logging.info(f"Fetched reports: {grouped_reports}")
    return grouped_reports  # ✅ Correct: Returns dictionary directly




def load_reports(analysis_id):
    file_path = os.path.join(REPORTS_DIR, f"{analysis_id}.json")

    try:
        with open(file_path, "r") as f:
            report_content = json.load(f)
        logging.info(f"Loaded report: {analysis_id}")
        return report_content
    except FileNotFoundError:
        logging.warning(f"Report {analysis_id} not found.")
        return None
    except json.JSONDecodeError:
        logging.error(f"Report {analysis_id} is corrupted and cannot be loaded.")
        return None


def delete_report(analysis_id):
    file_path = os.path.join(REPORTS_DIR, f"{analysis_id}.json")
    if os.path.exists(file_path):
        os.remove(file_path)
        logging.info(f"Report deleted: {analysis_id}")
        return True
    logging.warning(f"Failed to delete report {analysis_id} - Not found")
    return False


def generate_pdf(directory, json_file_name):
    """Generate a PDF from a JSON report."""
    
    json_file_path = os.path.join("saved_reports", directory, json_file_name)
    pdf_file_path = json_file_path.replace(".json", ".pdf")  # Change extension to .pdf

    if not os.path.exists(json_file_path):
        logging.error(f"Cannot generate PDF, report {json_file_path} not found.")
        return None

    try:
        with open(json_file_path, "r") as f:
            report = json.load(f)

        pdf = FPDF()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.add_page()
        pdf.set_font("Arial", size=12)
        pdf.cell(200, 10, txt=f"Report for {json_file_name}", ln=True, align="C")
        pdf.ln(10)

        for key, value in report.items():
            pdf.multi_cell(0, 10, f"{key}: {json.dumps(value, indent=2) if isinstance(value, (dict, list)) else value}")

        pdf.output(pdf_file_path)
        logging.info(f"PDF generated successfully: {pdf_file_path}")
        return pdf_file_path
    except Exception as e:
        logging.error(f"Failed to generate PDF: {str(e)}")
        return None

def rename_report(old_analysis_id, new_analysis_id):
    old_file_path = os.path.join(REPORTS_DIR, f"{old_analysis_id}.json")
    new_file_path = os.path.join(REPORTS_DIR, f"{new_analysis_id}.json")

    if not os.path.exists(old_file_path):
        logging.warning(f"Rename failed: {old_analysis_id} not found.")
        return False, f"Original report '{old_analysis_id}.json' not found."

    if os.path.exists(new_file_path):
        logging.warning(f"Rename failed: {new_analysis_id} already exists.")
        return False, f"Report with name '{new_analysis_id}.json' already exists."

    os.rename(old_file_path, new_file_path)
    logging.info(f"Report renamed from {old_analysis_id} to {new_analysis_id}")
    # Refresh the UI by fetching updated report names
    return True, "Report renamed successfully."
