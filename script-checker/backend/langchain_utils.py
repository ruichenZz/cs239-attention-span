import os
import logging
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain_community.chat_models import ChatOpenAI

# Load OpenAI API Key
openai_api_key = os.getenv("OPENAI_API_KEY")
if not openai_api_key:
    logging.error("OpenAI API Key is missing.")
    raise ValueError("Missing OpenAI API Key. Set the OPENAI_API_KEY environment variable.")

async def analyze_script(script: str, user_prompt: str = None):
    """
    Uses LangChain to analyze a script and return suggestions.
    """
    # Default prompt if the user does not provide one
    built_in_prompt = (
        "Read through the script carefully. Analyze the following script for clarity, engagement, and emotional impact. "
        "EVERY paragraph in the script must be assigned to AT LEAST ONE of the following categories: "
        "Informational (data, background, definitions), Comedic (humor, memes), Storytelling (personal experiences, real-life examples), "
        "or Visual_Presentation (explicit image, video, or audio references). "
        "It is STRICTLY FORBIDDEN to leave any paragraph uncategorized. If unsure, assign the closest possible category. "
        "DO NOT assign 'neutral' unless absolutely necessary, and NEVER consecutively."
        "Additionally, provide actionable feedback on structure, flow, and improvements."
        "The feedback should be VERY SPECIFIC."
        "For example, suggestions may include: 'This section is too information-dense; adding a story of yourself about the xxx topic you are describing will be helpful'."
        "For example, if recommending adding an image, describe what the image should contain."
    )


    # Use the user-provided prompt if available, otherwise fallback to the default one
    # final_prompt = user_prompt if user_prompt else built_in_prompt
    final_prompt = built_in_prompt + user_prompt if user_prompt else built_in_prompt
    # Define the prompt template
    prompt = PromptTemplate(
        input_variables=["script", "prompt"],
        template="{prompt}\n\nScript:\n{script}\n\nSuggestions:",
    )

    # Initialize LangChain LLM
    llm = ChatOpenAI(api_key=openai_api_key, temperature=0.7)

    # Run LLMChain
    chain = LLMChain(llm=llm, prompt=prompt)
    response = await chain.arun(script=script, prompt=final_prompt)

    return response.strip()  # Only return suggestions
