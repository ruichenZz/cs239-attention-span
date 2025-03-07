import dspy
import os
import json

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
    Analyze the given script for clarity, engagement, emotional impact, and pacing for video production.
    
    The input script is a list of paragraphs (each paragraph as a separate element). The analysis will produce:
    
    - **General Feedback:** Overall suggestions and actionable recommendations to improve the script,s clarity, engagement, and pacing.
    
    - **Segment Classification:** Identification of paragraph indices corresponding to specific content categories:
      - **Informational:** Paragraphs that are dense with technical or factual information.
        *Example:* "Our research indicates a 40% surge in customer engagement after our last campaign."
      - **Comedic:** Paragraphs that incorporate humor or light-hearted elements.
        *Example:* "And then, just when you thought it couldn,t get any worse, our server crashed!"
      - **Storytelling:** Paragraphs that use narrative techniques or personal anecdotes to emotionally connect with the audience.
        *Example:* "I still remember the day we turned our biggest challenge into our greatest success..."
      - **Visual Presentation:** Paragraphs that suggest the inclusion of visual elements like images, charts, or diagrams.
        *Example:* "Imagine a vibrant infographic that maps out our key performance metrics."
      
      For each of these categories, return a list of paragraph indices that match the criteria. Note that these lists may not include every paragraph (if a paragraph does not fit a category, its index is omitted in that specific list).
    
    - **Duration Estimation:** A list of estimated durations (in seconds or minutes) for each paragraph, This helps in assessing the pacing of the content.. This list **must** have exactly the same length as the input script. For example, if the input consists of 39 paragraphs, the duration list must contain 39 numeric values—each corresponding to the estimated video duration for its respective paragraph.
      Since users typically read at a rate of 200-250 words per minute, a 100-word paragraph might last around 30-40 seconds. However this can vary based on the complexity of the content, 
      and users might not include all the details in the script or in their final videos. Estimate the duration based on the content, word count, and the intended pace of the video.
    
    **Usage Example:**
    
    Given the following script as a list of paragraphs:
    
        [
            "In today's competitive market, data drives every decision.",
            "Our research indicates a 40% surge in customer engagement after our last campaign.",
            "Picture a fun moment when our team unexpectedly celebrated a small victory.",
            "Visualize a vibrant infographic that maps out our key performance metrics."
        ]
    
    The expected outputs might be:
      - `feedback`: "Consider integrating visuals to break up dense sections and improve pacing. The humorous tone in paragraph 3 is engaging; ensure it blends well with the overall narrative. Enhance paragraph 4 with detailed visual cues."
      - `information`: [0, 1]
      - `comedic`: [2]
      - `storytelling`: []  (if no clear narrative style is detected)
      - `visual_presentation`: [3]
      - `duration`: [5.0, 7.0, 4.0, 6.0]  (A list of 4 duration estimates matching the 4 input paragraphs)
    
    **Enforcement Requirement:**
    
    - **Duration Field:** The `duration` output must be a list of numeric estimates with a one-to-one correspondence to the input paragraphs. If the input has 39 paragraphs, the `duration` list must contain exactly 39 values.
    
    Use this comprehensive analysis to help content creators refine both the content and pacing of their videos.
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