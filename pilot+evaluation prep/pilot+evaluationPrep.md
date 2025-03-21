### Pilot [+1]

[+0.5] Present the pilot user with a brief statement of the scenario and task. Ask the pilot user to complete the task. Note: You might feel (very) nervous that something will break. That is OK. It's ok for the pilot user to break things as they test out your system. Be prepared to restart/recover your system when things break. Note what happened step by step. Include 0.5-1p of notes on one pilot user. Additionally, summarize in a few sentences: What happened? Why? What changes do you need to make to your system before the next pilot?

# Pilot User Session Notes

## User Action – Script Without Goals
- The pilot user copied and pasted a script into the main text area but did not provide any goals.
- When they clicked **Check Script**, the platform did not respond.
- **Issue discovered**: The system required goals before proceeding with analysis. The user’s null prompt caused a failure in prompt construction.

### Immediate Fix Attempt
- We modified the backend logic to allow a default set of goals if none were provided.
- This involved merging the user’s custom goals with our built-in prompt.
- After reloading the system, we asked the user to try again.

## User Action – Entering Goals
- The pilot user then re-ran the script with newly typed goals.
- The suggestions generated, but the system used **only** the user’s goals, ignoring the pre-defined goals.
- **New fix**: We ensured that the built-in prompt and user prompt would be concatenated rather than replaced.

## Formatting Issue
- After generating suggestions, the text displayed incorrectly (overflowing outside the bounding box).
- The pilot user noted the styling was broken and the interface layout shifted.

## User Feedback
- The pilot user felt our system was “basically GPT with an extra step” and did not see the clear difference in its specialized approach.
- They suggested highlighting how the system’s segmentation and timeline differ from a generic LLM response.

## Overall Observations
- The user discovered two input-handling bugs (missing default goals and non-merged prompt).
- Our quick fixes addressed both issues, but we still faced UI rendering problems (text overflow).
- The pilot user expressed doubt about the system’s unique value proposition, indicating we must better illustrate how the script classification (e.g., informational, comedic) is distinct from a standard GPT-based chat.

---

## Summary

### What Happened?
1. The user first entered a script with no goals, causing the platform to fail silently.
2. After a fix, they entered goals, but the built-in prompt was lost.
3. Following another fix, the interface displayed suggestions that overflowed outside the container.
4. The user felt the system’s functionality was too similar to GPT.

### Why Did It Happen?
- The system’s prompt management logic assumed goals would always be present.
- Merging default prompts with user input was not initially implemented.
- The styling for suggestions had not been tested for long text outputs.

### Changes Needed Before the Next Pilot
1. **Default Goals**: Ensure that if a user does not supply goals, the system still includes an internal default.
2. **Prompt Concatenation**: Always concatenate the user’s goals with our built-in instructions.
3. **CSS Improvements**: Update the CSS to handle longer text or unexpected content sizes so suggestions do not overflow.
4. **Highlight Uniqueness**: Emphasize the system’s analytics, classification, and timeline features to distinguish it from a generic GPT-based chatbot.

[+0.5] Involve another pilot user outside of the course. Include 0.5-1p of notes on this second pilot user. Summarize in a few sentences: What happened? Why? What changes do you need to make to your system before the next pilot?

# Another Pilot User Session Notes

## Uploading the Script
- The user attempted to drag and drop a text file into the interface, which our system does **not** support.
- They were confused by the lack of any upload indicator.
- Eventually, they copied and pasted the contents into the text box successfully.

## Parsing and Classification
- The user’s script contained short comedic lines within larger, informational paragraphs.
- Although comedic phrases were present (“We might as well start a comedy club next door!”), the system classified those paragraphs purely as **informational**.
- The comedic tags never triggered because our classifier expects more overt comedic patterns in an entire paragraph.

## User Feedback
- After clicking **Check Script**, the user noted the comedic lines were “completely lost in the system’s analysis.”
- They expected to see **comedic** flags or highlights for each joke.
- The comedic lines never appeared in a separate comedic category, despite being distinctly phrased.

---

## Observations
- Our comedic detection logic is too rigid—it requires entire paragraphs to be comedic. Subtle or short comedic lines within larger informational paragraphs are missed.
- This caused the user to doubt the system’s ability to provide nuanced feedback on tone or style.
- The user also felt the interface should either support direct file uploads or clearly warn that drag-and-drop is **not** available.

---

## Summary

### What Happened?
1. The user tried to upload a text file by drag-and-drop (unsupported), then pasted the script.
2. They included comedic lines within otherwise informational paragraphs.
3. The system classified those paragraphs purely as **informational** because our comedic detection logic missed the subtle humor.

### Why Did It Happen?
- We have no file-upload feature, and there were no clear instructions that only copy-paste is supported.
- Our comedic classification logic applies only to paragraphs that are predominantly comedic, causing short humorous lines to go unrecognized.

### Changes Needed Before the Next Pilot
1. **File Upload Support**: Implement a basic file-upload mechanism or explicitly instruct users that only copy-paste is supported.
2. **Refine Classifier**: Enhance the classifier to detect partial comedic lines within paragraphs, potentially through sentence-level humor detection.
3. **User Guidance**: Provide tooltips or messages for drag-and-drop attempts, clarifying the accepted input methods.

### Before conducting an evaluation [+3]

[+0.5] Articulate1-2 questions motivating the evaluation. In other words, what are the 1-2 things you want to prioritize learning through the evaluation?

How useful and actionable do users find the suggestions and visualizations?
 

[+0.5] What metrics will you use to answer the above research questions? Why are these metrics appropriate? What are the benefits and drawbacks of using these metrics?
Requirements: You are required to conduct a mixed-methods study where you collect qualitative and quantitative data. In your response to this question, describe what kind of data (e.g., open-ended survey, interview, time, clicks, etc.) will be useful for answering your motivating questions. 

**Quantitative Metrics**
1. Time spent per task: How long users spend on different stages:
- Initial exploration (how long users take to understand how to use the website before interacting with suggestions and visualizations)
- Reading the suggestions
- Looking at the visualizations
- Making edits based on suggestions
- Completing the script revision cycle 

2. Number of interactions:
- Clicks on suggestions -> How many suggestions were accepted, modified, or ignored?
- How often users switch between text and visualization? -> Number of edits made after seeing visualization.

* *Benefits:*
- Helps identify points where user is confused.
- Provides objective insights into user behavior and can be statistically analyzed for trends.

* *Drawbacks:*
Time data alone doesn’t reveal why users behave a certain way, and users might hesitate, which would affect timing accuracy.


**Qualitative Metrics**
Methods:
1. Post-task survey (Likert scale)
- "How useful were the suggestions?" (1-5 scale)
- "How actionable were the visualizations?" (1-5 scale)
2. Short user interviews (~4 min)
- Why they did/didn’t follow suggestions?
- What would improve the visualization/suggestions?

* *Benefits:*
- Provides explanatory insights into user decisions.
- Helps refine future design based on user pain points.
- Captures details that numbers miss (e.g., "I ignored the suggestion because…").

* *Drawbacks:*
- Harder to analyze than raw numbers.
- Responses may be biased with different users or incomplete because of various reasons.



[+1] Specify a plan for recruiting participants.

* *How will you contact participants (e.g., mailing lists, in-person, etc)?*

Participants will be recruited through personal networks and mailing lists within the video creator community. Specifically:
Outreach will be done through friends and contacts who are long video creators. Creators will be invited via mailing lists and direct messages.

* *What are your inclusion/exclusion criteria for participants?*

**Inclusion:**
- Long video creators who write scripts or plan to improve their scripting process.
- Those interested in adapting long-form scripts into short-form content.
**Exclusion:**
- Creators who do not write scripts at all.
- Creators who focus exclusively on short and improvised content.
- People who are not content creators at all.

* *Will you include participants you interviewed for user research? Why or why not?*

**We will include user research participants:**
Pros
- Comparative Insights: They can evaluate whether the tool matches their previous scripting habits.
- They can comment on whether the tool addresses the challenges they previously identified.

Cons
- Potential Bias: Their familiarity may make them overlook first-time usability issues. However, this bias is limited since they are also experiencing the tool for the first time.

**So we will** add another question for user research participants:
- "Compared to the needs you previously described, does this tool successfully address your pain points? Why or why not?"


* *Where will you perform the evaluation?*

Remote evaluation via Zoom screen sharing. Participants will control the researcher’s screen, so they do not need to install anything.

* *What data will you collect from participants? How will you inform them of this and obtain informed consent?*
- Quantitative Data: Time spent and number of interactions as mentioned in metrics before.
- Qualitative Data: Post-task survey and short interview as mentioned.

Before the session, participants will receive a message/email explaining:
1. The purpose of the evaluation - helping improve scriptwriting tools for video creators.
2. The tasks they will perform - testing the tool and providing feedback.
3. The types of data collected - interaction time, survey responses, and some insights through interview.
4. That participation is voluntary, and they can opt out at any time.

Consent Process:
- A verbal consent statement will be read before the session begins.
- Participants will confirm their consent before proceeding.
- No personal identifiable information will be recorded.


 

[+1] Write out a step-by-step protocol for conducting each user evaluation. Getting on the same page is important for more easily conducting studies and analyzing data across participants. Your protocol should include: (1) a script of what you will say to each participant; (2) what behaviors/responses you expect from participants and how that may change the flow of the study, if at all; and (3) how you will transition between phases of the study (e.g., from a task to an interview). 

(1) Script: Thank you for participating. Today we are testing a system for content creators that analyzes scripts to improve engagement and user attention. Feel free to explore and click everything that looks clickable or interesting. Ask us any questions if anything comes up. If it breaks, don't worry, your experience will help us improve our system. Please have fun, write some script, play with our tools. You can stop at anytime.

(2) Behaviors/response: 
- Participants input a provided or self-written script.
- System provides immediate feedback and timeline visualization.
- Participants interact with feedback and timeline.
- The flow might change if the participant fails to understand how to use a certain function

(3) how you will transition between phases of the study
- Researcher asks: "Please review the feedback. Does it clearly guide your improvements? Does the timeline visualization reflect your script accurately?"
- After exploration, transition smoothly: "Now I'd like to ask a few quick questions to understand your experience better."
- Possible questions: How clear and actionable did you find the feedback provided? How well did the timeline reflect your script’s content and pacing? Any suggestions for improving the visualizations or feedback?

### For fun [+0.5]
[+0.5] Name your system!
ScriptPulse

[+0.5] DEPTH: Design a logo for your system. Include a PNG in your repo. Add it to the README. 
 

Did you use a generative AI tool for this assignment? If so, which tool(s) and how?

 

How much time did you spend on this assignment

- as a group?

- individually?
- Zihan: 6 hr
- Ruichen: 5 hr
- Weihan: 5 hr
