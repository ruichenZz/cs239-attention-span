import dspy
import os
import json
from dotenv import load_dotenv

load_dotenv("en.env")
openai_api_key = os.getenv("OPENAI_API_KEY")
lm = dspy.LM('openai/gpt-4o-mini', api_key=openai_api_key)
dspy.configure(lm=lm)

SAMPLE_SCRIPT = """Welcome to our channel, where innovation and creativity merge with data-driven insights to transform business landscapes. Today, we explore how leveraging advanced analytics and compelling storytelling can redefine success in a competitive market. Join us as we journey through strategies that empower you to make informed decisions with confidence.

Data is the cornerstone of modern business strategy. Our latest research uncovers that companies utilizing sophisticated analytics experience measurable improvements in customer engagement and revenue growth. By dissecting market trends and consumer behaviors, we deliver insights that guide organizations toward sustainable innovation and a competitive edge.

Through our rigorous analysis, we highlight the power of detailed data visualization in simplifying complex concepts. Visual aids such as charts, graphs, and infographics not only make information accessible but also captivate your audience's attention. Our techniques ensure that every statistic is not just seen but truly understood, fostering deeper engagement across all levels.

Storytelling is an art that brings raw data to life. By weaving narratives into analytical insights, you create a more relatable and compelling message. Personal anecdotes, real-life case studies, and behind-the-scenes experiences can transform dry data into engaging stories that resonate with diverse audiences and evoke powerful emotions.

Our team's journey began with a simple question: how can we make technical information appealing to everyone? Over time, we experimented with various formats and techniques, refining our approach through trial and error. The result is a dynamic blend of scientific precision and creative expression that speaks directly to viewers and sparks curiosity.

As you craft your narrative, consider the role of visuals in enhancing your message. Effective visual presentation not only reinforces key points but also aids in breaking up lengthy explanations. Infographics, animations, and on-screen text can be strategically integrated to maintain audience focus and clarify complex ideas seamlessly.

Humor plays a vital role in engaging audiences, offering moments of levity amidst intricate subject matter. A well-placed joke or a light-hearted comment can humanize your content, making it more accessible. Even the most technical presentations benefit from a touch of personality and wit to break monotony and create memorable experiences.

Expert insights are invaluable for refining your approach. We regularly interview industry leaders and innovators who share their success stories and lessons learned. Their experiences provide a roadmap for blending technical excellence with creative flair, ensuring that your content both informs and inspires while driving actionable results.

Looking ahead, the future of content creation lies at the intersection of data, storytelling, and emerging technologies. Innovations continue to redefine how we communicate complex ideas, making it easier for audiences to grasp and retain key messages. Stay tuned as we explore emerging trends and share the tools that empower your creative journey.

In conclusion, our comprehensive analysis combines strategic insights, engaging narratives, and effective pacing to help you craft impactful video content. Whether you are a seasoned creator or just starting out, our goal is to inspire you to push creative boundaries and deliver messages that truly resonate with your audience. Thank you for joining us on this exciting journey. Keep exploring, innovating, and turning every challenge into an opportunity for growth."""


class script_checker(dspy.Signature):
    """
    Analyze the provided script to enhance clarity, viewer engagement, emotional impact, and pacing.

    The input script is structured as a list of distinct paragraphs. Your task involves two key components:

    1. **General Feedback**: Provide clear, actionable feedback to improve overall script clarity, structure, pacing, and audience retention.
       Example: "Paragraph 1 is densely packed with technical details; consider splitting it up or pairing it with visual examples to improve viewer understanding."

    2. **Paragraph Categorization**: Each paragraph must be assigned exactly **one** category from the following (strictly no overlaps):

    - **Informational**:
      - Paragraphs primarily focused on presenting detailed statistics, technical explanations, data, facts, or educational information.
      - Example: "Recent analytics data reveals a 30% increase in engagement when visuals are included."

    - **Comedic**:
      - Paragraphs explicitly designed to introduce humor, levity, or entertainment value.
      - Example: "Did you hear about the creator who filled his video with pie charts? He ended up with nothing but crumbs."

    - **Storytelling**:
      - Paragraphs built around narrative elements, personal anecdotes, or emotional stories.
      - Example: "I still remember the first video I made. It was far from perfect, but that first step taught me invaluable lessons."

    - **Visual Presentation (Explicit Inserts Only)**:
      - Paragraphs explicitly instructing the insertion of specific visual elements (images, infographics, charts, video clips).
      - Must contain a clear, explicit instruction like "[Insert a bar chart comparing last year's and this year's sales figures here]."
      - Example: "[Insert an infographic clearly illustrating viewer retention rates over the past quarter]."

    - **Neutral**:
      - Paragraphs that serve as introductions, transitions, or conclusions without clearly fitting into other categories.
      - Welcome to today's video! ...... So, let's jump in!

    3. **Duration Estimations**: Provide an estimated duration (in seconds) for each paragraph. The length of the durations list must exactly match the input length.

    ### Important Rules:
    - Each paragraph can belong to exactly **one** category—no exceptions or overlaps.
    - Only explicitly indicated visual insertions qualify as "Visual Presentation."

    ### Complete Example:

    **Sample Input Script:**
    [
        "Welcome to today's analysis video. We'll uncover ways to boost viewer retention.",
        "[Insert a clear infographic showing audience retention drop-off rates.]",
        "My first video was a disaster; I lost my viewers in seconds—but that taught me a powerful lesson.",
        "Analytics clearly indicate that visual elements significantly improve retention.",
        "Here's a funny fact: more viewers watch cat videos than professional tutorials.",
        "To summarize, blend storytelling, clear information, visuals, and humor for best results."
    ]

    **Correct Output Example:**
    - feedback: "Consider pairing paragraph 4’s dense information with visual aids. Paragraph 2 clearly defines the visual element; ensure its quality. The humorous approach in paragraph 5 effectively adds variety."
    - information: [3]
    - comedic: [4]
    - storytelling: [2]
    - visual_presentation: [1]
    - neutral: [0, 5]
    - duration: [5.0, 7.0, 8.0, 7.5, 5.0, 6.0]

    ### Additional Example for Clarification:

    **Sample Input Script:**
    [
        "Did you know adding visuals can boost engagement by up to 50%?",
        "[Insert a bar graph comparing engagement with and without visuals.]",
        "One day, I experimented by removing visuals from my videos, and viewer engagement plummeted dramatically.",
        "Balancing information and storytelling keeps your audience captivated until the end."
    ]

    **Correct Output Example:**
    - feedback: "Paragraph 1 contains good data; pair it closely with the explicit visual mentioned in paragraph 2. Paragraph 3’s storytelling effectively illustrates a key point."
    - information: [0]
    - comedic: []
    - storytelling: [2]
    - visual_presentation: [1]
    - neutral: [3]
    - duration: [6.5, 5.0, 7.5, 6.0]

    Follow these explicit guidelines strictly, ensuring exactly one category per paragraph without overlap, accurate categorization according to explicit instructions, and precise duration estimation matching the input length.
    """
    script: list[str] = dspy.InputField(desc="The script to analyze, with each paragraph as a separate element.")
    goals: str = dspy.InputField(desc="The desired outcomes or engagement goals for the script.")
    feedback: str = dspy.OutputField(desc="General suggestions and detailed feedback on the script.")
    information: list[int] = dspy.OutputField(desc="Indices of paragraphs that are informationally dense.")
    comedic: list[int] = dspy.OutputField(desc="Indices of paragraphs with comedic elements.")
    storytelling: list[int] = dspy.OutputField(desc="Indices of paragraphs employing storytelling techniques.")
    visual_presentation: list[int] = dspy.OutputField(desc="Indices of paragraphs that suggest visual presentation elements.")
    duration: list[float] = dspy.OutputField(desc="Estimated duration (in seconds or minutes) for each paragraph in the final video, with one estimate per input paragraph.")

def script_parser(script):
    """
    Parse the script into a list of paragraphs. Omit empty lines.
    """
    return [line.strip() for line in script.split("\n\n") if line.strip()]

def main():
    program = dspy.Predict(script_checker)
    script = script_parser(SAMPLE_SCRIPT)
    user_prompt = "Analyze the following script for clarity, engagement, and emotional impact. Provide actionable feedback on structure, flow, and potential improvements."
    example = dspy.Example(script=script, goals=user_prompt if user_prompt else "").with_inputs("script", "goals")
    print(len(example.inputs().script))
    print(example.inputs().goals)
    response = program(**example.inputs())
    print(response)
    results = {"feedback": response.feedback, "information": response.information, "comedic": response.comedic, "storytelling": response.storytelling, "visual_presentation": response.visual_presentation, "duration": response.duration}
    with open("script_eval_result.json", "w") as f:
        json.dump(results, f, indent=4)

async def analyze_script(script: str, user_prompt: str = None):
    program = dspy.Predict(script_checker)
    script = script_parser(script)
    user_prompt = user_prompt
    example = dspy.Example(script=script, goals=user_prompt if user_prompt else "").with_inputs("script", "goals")
    response = program(**example.inputs())
    return {"feedback": response.feedback, "information": response.information, "comedic": response.comedic, "storytelling": response.storytelling, "visual_presentation": response.visual_presentation, "duration": response.duration}

if __name__ == "__main__":
    main()