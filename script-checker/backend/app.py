import os
import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from langchain_utils import analyze_script
from pydantic import BaseModel
from typing import Optional
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

# Define request model
class ScriptRequest(BaseModel):
    script: str
    user_prompt: Optional[str] = None  # Allows no value for prompt input

@app.post("/check_script")
async def check_script(request: ScriptRequest):
    """
    Calls LangChain to process the script and returns suggestions.
    """
    try:
        # If user_prompt is empty, set it to None explicitly
        user_prompt = request.user_prompt if request.user_prompt and request.user_prompt.strip() else None

        suggestions = await analyze_script(request.script, user_prompt)
        return {"suggestions": suggestions}
    except Exception as e:
        logging.error(f"Error processing script: {str(e)}")
        raise HTTPException(status_code=500, detail="Error while processing script.")


# @app.get("/get_reports")
# async def get_reports_endpoint():
#     logging.info("Fetching all reports...")
#     try:
#         reports = {}
#         reports_dir = "saved_reports"

#         if not os.path.exists(reports_dir):
#             os.makedirs(reports_dir)

#         for directory in os.listdir(reports_dir):
#             dir_path = os.path.join(reports_dir, directory)
#             if os.path.isdir(dir_path):
#                 reports[directory] = [
#                     file for file in os.listdir(dir_path) if file.endswith(".json")
#                 ]

#         logging.info(f"Reports fetched: {reports}")
#         return reports
#     except Exception as e:
#         logging.error(f"Failed to retrieve reports: {str(e)}")
#         raise HTTPException(status_code=500, detail=f"Failed to retrieve reports: {str(e)}")

# @app.get("/get_report/{directory}/{file_name}")
# async def get_report_endpoint(directory: str, file_name: str):
#     try:
#         file_path = os.path.join("saved_reports", directory, file_name)
#         if not os.path.exists(file_path):
#             raise HTTPException(status_code=404, detail="Report not found")

#         with open(file_path, "r") as f:
#             report_content = json.load(f)

#         return report_content
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Failed to load report: {str(e)}")


# @app.delete("/delete_report/{directory}/{file_name}")
# async def delete_report_endpoint(directory: str, file_name: str):
#     logging.info(f"Deleting report: {file_name} from directory: {directory}")
    
#     try:
#         file_path = os.path.join("saved_reports", directory, file_name)
        
#         if os.path.exists(file_path):
#             os.remove(file_path)
#             logging.info(f"Report deleted: {file_path}")
#             return {"message": f"Report {file_name} deleted successfully."}
        
#         logging.warning(f"Failed to delete report {file_name} - Not found in {directory}")
#         raise HTTPException(status_code=404, detail="Report not found.")
    
#     except Exception as e:
#         logging.error(f"Error deleting report {file_name}: {str(e)}")
#         raise HTTPException(status_code=500, detail=f"Error deleting report: {str(e)}")


# @app.get("/download_report/{directory}/{file_name}")
# async def download_report(directory: str, file_name: str):
#     pdf_file_name = file_name.replace(".json", ".pdf")  # Ensure it looks for a PDF file
#     file_path = os.path.join("saved_reports", directory, pdf_file_name)

#     # If PDF doesn't exist, generate it before downloading
#     if not os.path.exists(file_path):
#         logging.info(f"PDF not found for {file_name}, generating...")
#         generate_pdf(directory, file_name)

#     # Check again if the PDF was created
#     if not os.path.exists(file_path):
#         logging.error(f"PDF still not found: {file_path}")
#         raise HTTPException(status_code=404, detail="Report PDF not found")

#     return FileResponse(file_path, media_type="application/pdf", filename=pdf_file_name)

# @app.put("/rename_report/{directory}/{old_file_name}/{new_file_name}")
# async def rename_report_endpoint(directory: str, old_file_name: str, new_file_name: str):
#     old_json_path = os.path.join("saved_reports", directory, old_file_name)
#     new_json_path = os.path.join("saved_reports", directory, new_file_name)

#     old_pdf_path = old_json_path.replace(".json", ".pdf")
#     new_pdf_path = new_json_path.replace(".json", ".pdf")

#     if not os.path.exists(old_json_path):
#         logging.warning(f"Rename failed: {old_json_path} not found.")
#         raise HTTPException(status_code=404, detail=f"Original report '{old_file_name}' not found in {directory}.")

#     if os.path.exists(new_json_path):
#         logging.warning(f"Rename failed: {new_json_path} already exists.")
#         raise HTTPException(status_code=400, detail=f"Report with name '{new_file_name}' already exists.")

#     os.rename(old_json_path, new_json_path)  # Rename JSON file
#     logging.info(f"Report renamed from {old_json_path} to {new_json_path}")

#     # Rename or regenerate PDF
#     if os.path.exists(old_pdf_path):
#         os.rename(old_pdf_path, new_pdf_path)
#         logging.info(f"PDF renamed from {old_pdf_path} to {new_pdf_path}")
#     else:
#         logging.info(f"No existing PDF found for {old_file_name}, generating a new one...")
#         generate_pdf(directory, new_file_name)

#     return {"message": "Report renamed successfully."}




# @app.get("/get_report/{analysis_id}")
# async def get_report_endpoint(analysis_id: str):
#     try:
#         report_content = load_reports(analysis_id)
#         if report_content is None:
#             raise HTTPException(status_code=404, detail="Report not found")
#         return report_content
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Failed to load report: {str(e)}")



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001, log_level="debug")
