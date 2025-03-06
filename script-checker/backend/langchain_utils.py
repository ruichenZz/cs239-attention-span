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
        "Analyze the following script for clarity, engagement, and emotional impact. "
        "Provide actionable feedback on structure, flow, and potential improvements."
        "for example, the suggestion can be: ... this part is too information densed, audience might feel overwhelmed, so could add story or image to demonstrate what just been discussed."
        "In addition, here's more user input prompts you should consider: "
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
