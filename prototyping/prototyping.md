[+0.5] Update your problem statement. 

Content creators struggle to optimize videos for audience retention due to decreasing and unpredictable attention spans. Existing tools provide basic analytics but lack actionable insights on how content structure impacts engagement. Without clear guidance on balancing emotional appeal and information density, creators rely on trial and error, making content optimization inefficient.

[+1] Create a paper prototype. Take + upload pictures or a video of your paper prototype.
Paper prototype see the attatchments.
Video explanation: https://youtu.be/YhQa6FDptCI
 

[+0.5] Summarize 1-3 takeaways from the feedback you received in class. 
1. Easy to use: Since the interface is similar to existing tools, users found it intuitive and easy to start using.
2. Clarity & Guidance: Some elements need clearer instructions or explanations (e.g., hover text, placeholders) to help users understand how different parts correlate and what each color represents.
3. Saving and versions: Users requested a save button and a way to view past versions (e.g., version1, version2, version3) for tracking changes.
4. Default Goals: Users requested to have a default setting on inputing "Goals", maybe rows of guidelines that the user can choose to check or 
a simple default text message.
 

[+1] Articulate your design goals as you start to implement a high-fidelity prototype of your interactive system.

 

(required) Design goal 1
- What is the goal?:
Provide Actionable Suggestions to Improve Engagement

- Why is it important? How evidence (from your user research or related work) convinces you of its importance? Include any quotes, citations, etc. that help make your point:

When we conducted interviews with content creators, many expressed challenges in maintaining audience engagement, especially for longer videos. They rely on intuition or trial and error to adjust their content but lack clear guidance on what specific elements improve retention. For example, one content creator mentioned that they add memes and special effects to enhance engagement but are unsure where and how often they should be placed. They also observed that long factual segments without engaging elements led to lower retention. Similarly, one stated that maintaining audience attention in long videos is difficult and that breaking content into sections or adding interactive elements helps. While they analyze viewer drop-off points, they still struggle with making targeted improvements.

- How will you design for this goal? What implementation choice will you make?:
  - Implement a “Generate Suggestions” feature that analyzes the script and provides targeted recommendations on where to add storytelling, humor, or visuals.
  - Ensure suggestions are specific and actionable, helping creators adjust their content structure efficiently.


 

(required) Design goal 2
- What is the goal?:
Visualize Script Composition to Optimize Engagement

- Why is it important? How evidence (from your user research or related work) convinces you of its importance? Include any quotes, citations, etc. that help make your point:

When we conducted interviews with content creators, many expressed difficulty in structuring their videos to maintain audience engagement. They often only realize that certain segments are too dense with information during the editing stage, when it becomes harder to add engaging elements. For example, a content creator mentioned that they sometimes don’t recognize that an informational section is too long until they start editing, at which point they have to try adding something interesting—often without much flexibility. A visualization tool would help them identify these issues earlier in the process. Similarly, another content creator reviews drop-off points but finds it difficult to pinpoint which sections need better engagement. One has also observed a decline in long-video watch times and has adjusted their content intuitively, without a structured way to balance information and engagement.

- How will you design for this goal? What implementation choice will you make?:
  - Generate a timeline or pie chart that automatically categorizes and visualizes script sections (e.g., gray for factual content, other colors for engaging elements).
  - Use color coding to highlight areas that may need better engagement, helping users quickly spot where improvements are needed.

 

(optional) Design goal 1
- What is the goal?:
Ensure an Easy-to-Use and Intuitive Workflow

- Why is it important? How evidence (from your user research or related work) convinces you of its importance? Include any quotes, citations, etc. that help make your point:

Many content creators we interviewed are not full-time professionals and need tools that integrate seamlessly into their workflow without requiring extensive learning. One content creator mentioned that video editing is already time-consuming, so tools should provide quick, actionable insights rather than adding extra work. 

Additionally, a content creator emphasized that while they track trends and audience responses, they need a efficient way to adjust their content without overcomplicating their process because content creation is an iterative process—creators where the scripts are adjusted multiple times before being finalized. If a tool only provides a one-time suggestion without allowing re-evaluation after edits, it is not efficient enough. A repeated suggestion generation feature would help creators continuously refine their scripts based on the latest changes. 

- How will you design for this goal? What implementation choice will you make?:
  - Provide a clean, Grammarly-style interface (which most people are already familiar with) with a text input on the left for the script and a goal prompt on the right to define content objectives.
  - Use a “Generate Suggestions” button to produce clear, easy-to-understand suggestions and a visual representation of script structure.
  - Allow users to edit their script and re-generate suggestions, ensuring that they can iterate efficiently without restarting from scratch.
  - Include hover explanations and placeholders to help users quickly understand how to interpret the feedback, making it accessible even for non-professionals.

 

(optional) Design goal 1
- What is the goal?:

- Why is it important? How evidence (from your user research or related work) convinces you of its importance? Include any quotes, citations, etc. that help make your point:

- How will you design for this goal? What implementation choice will you make?:

 

(optional) Design goal 1
- What is the goal?:

- Why is it important? How evidence (from your user research or related work) convinces you of its importance? Include any quotes, citations, etc. that help make your point:

- How will you design for this goal? What implementation choice will you make?:

 

[+1] Provide a plan for implementation. Create a timeline. Suggestion: Work backwards from the March 4 pilot deadline. 

- Feb 25: Come up with a json format that the LLM outputs and the web app reads to present to user

- Feb 27: Start working on tuning LLM and building web application

- March 3: Finish a rough web app design that reflect the functionality in the paper prototype (Baseline: presents suggestions); Use prompt engineering to make the LLM accurately and consistently outputs in desired format (Baseline: output suggestion only)

- March 4 pilot

What did each member contribute to this phase of the project?

Ruichen: Designed Paper Prototype, engage in class prototype testing
Zihan: Designed Paper Prototype, engage in class prototype testing
Weihan: Designed Paper Prototype, engage in class prototype testing

Did you use a generative AI tool? If so, which and how?
None

How much time did you spend on this assignment

- as a group?
4hrs
- individually?
Ruichen: 3hrs
Zihan: 3hrs
Weihan: 3hrs

[+1] Depth: Conduct an additional two cognitive walkthroughs with potential users (+0.5 per session)

[+1] Depth: Conduct another 2 user research sessions (+0.5 per session)

[+1] Depth: Find a model paper with a design goals section. Write up your design goals in a similar fashion. The model paper can be the same as before.
