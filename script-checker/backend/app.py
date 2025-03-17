import os
import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
# from langchain_utils import analyze_script
from dspy_utils import analyze_script
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
        print(suggestions)
        return suggestions
        # return {"suggestions": suggestions}
    except Exception as e:
        logging.error(f"Error processing script: {str(e)}")
        raise HTTPException(status_code=500, detail="Error while processing script.")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8001, log_level="debug")
