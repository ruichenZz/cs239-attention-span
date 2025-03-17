# Evaluation

## Conducting user evaluation [+5]

Your goal is to assess the usability of your system.

1. [+5] Evaluate your system with at least 10 participants. Write and submit 0.5-1p of notes for each participant.
    
    Participant 1: time in each stage (seconds): 10, 90, 150, 240. Number of Interactions (visualization-script, suggestion-script): 4, 5
    - Participant 1 grasped the system almost instantly, spending only 10 seconds on initial exploration before starting to engage with the main features. Their approach was balanced, spending a similar amount of time between analyzing the timeline (90 seconds) and reading the suggestions (150 seconds), suggesting that they found both equally important.
    - They engaged more with the suggestions than the visualization in terms of back-and-forth interactions (5 vs. 4 interactions), indicating that they paid close attention to the suggestions before applying changes. They described the suggestions as highly actionable, providing clear and detailed guidance. Although they did not always follow every suggestion exactly, they still found them valuable for inspiration, helping them rethink their content approach.
    - Their most notable interaction pattern appeared in the editing stage, where they spent the longest time (240 seconds) refining their script. After making changes, they rechecked the visualization and suggestions to compare the before-and-after versions. They explicitly mentioned feeling a sense of accomplishment when they saw an improvement in structure and engagement levels, reinforcing that the system provides direct, visible benefits in content refinement.
    - Overall, Participant 1 found the system very helpful, especially the suggestions. They were highly engaged during the editing process, suggesting that the system actively contributed to iterative content improvement rather than just being a passive feedback tool.

    
    Participant 2: time in each stage (seconds): 30, 120, 180, 180. Number of Interactions (visualization-script, suggestion-script): 8, 3
    - Participant 2 took a little time to understand how to use the system, spending about 30 seconds in the initial exploration phase before moving on to the main features. During this time, they asked for confirmation about whether the prompt was optional, which indicated that they had understood the system correctly but wanted to double-check the flexibility of its use.
    - Once they started engaging with the visualization, they frequently switched back and forth between the visualization and the script (8 interactions), suggesting that they found this feature very useful. They commented that the visualization was particularly effective for them because they often only realize during video editing that they need to insert additional content — it's often too late at that point, and they have to either leave it out or compensate with subtitles. They felt that the visualization helped prevent this issue ahead of time, making their workflow more efficient.
    - Regarding the suggestions, they took their time reading them carefully (180 seconds) and engaged with them at a moderate level (3 interactions). They found the suggestions helpful but pointed out two specific usability issues:
        - The sidebar for timeline and suggestion should be wider to better display the structure and be more readable alongside the script.
        - The color difference between the timeline and the paragraph highlights was confusing — the version during this evaluation had different slanting styles for segmentation (/ in the paragraph, \ in the timeline), making it slightly difficult to match them visually, but we changed this UI in future evaluations.
    - Overall, Participant 2 found the system highly effective and aligned with their needs as a content creator. The main improvements they suggested focused on UI adjustments for better readability and usability rather than fundamental changes to the system's logic.

    
    Participant 3: time in each stage (seconds): 15, 60, 180, 220. Number of Interactions (visualization-script, suggestion-script): 3, 1
    - Participant 3 spent relatively little time in each phase compared to others, with fewer interactions overall (only 3 visualization-script switches and 1 suggestion-script switch). This suggests that they used the system in a more straightforward way, rather than engaging deeply with every feature.
    - They described the system as "a useful tool but not something they would rely on heavily." Their main concern was that the system does not yet learn or adapt to their unique content style, making some suggestions less relevant. For example, elements like editing style and video pacing are important in their content, and they felt that the system could not yet capture those aspects effectively.
    - Despite their lighter engagement, they provided concrete UI suggestions for improving usability:
        - Numbering paragraphs on the left side would help users keep track of sections more easily.
        - Adding titles to input sections (script and custom prompt) would prevent them from forgetting what the contents are for.
    - This participant represents a less dependent type of user — someone who already has a strong sense of their content style and sees the system as a secondary tool rather than an essential guide. Future improvements could focus on customization features that allow the system to learn from a creator's existing content style.

    
    Participant 4: time in each stage (seconds): 15, 160, 150, 180. Number of Interactions (visualization-script, suggestion-script): 8, 2
   - Participant 4 was not a content creator, which made their perspective particularly interesting. Since they lacked prior experience with script structuring, they spent significant time analyzing the visualizations (160 seconds) and reading suggestions (150 seconds) before making edits.
   - They found the system understandable despite not being a creator, which speaks to its accessibility beyond professional use cases. They engaged heavily with the visualization (8 interactions), showing that even as a non-creator, they found it useful for understanding content flow and structure.
   - Their main feedback focused on clarity and accessibility:
       - The legends should be more detailed, ideally with a brief hover explanation or extra sentence. For example, explaining differences between storytelling and informational sections.
       - Hover effects on the left paragraph panel — when hovering over a suggestion or timeline section, the corresponding paragraph should highlight.
    - Although they are not the primary target audience, they pointed out a broader applicability for the system, especially for speechwriting. They noted that public speeches also require audience engagement and clear structure, making this tool valuable beyond video content. This insight suggests that the system has potential for expansion into general script editing tools, not just for video creators but also for public speakers, lecturers, and writers who need to refine their storytelling structure.

    
    Participant 5: time in each stage (seconds): 50, 34, 35, 190. Number of Interactions (visualization-script, suggestion-script): 2, 4
    - Participant 5 was not a content creator. He tested the system with a sample script. The participants mainly plays around with the system at the beginning since he doesn't have a concrete plan in mind, plus he doesn't really know about the sample script's content. After using the check script function, he become interested with the visualization: highlights and timeline, and invested into the feedbacks and edit script back-and-forth 4 times.
    - He founds the system easy to use and the categories are well defined.
    
    Participant 6: time in each stage (seconds): 50, 180, 180, 450. Number of Interactions (visualization-script, suggestion-script): 4, 4
    - Participant 6 was a content creator. He spent a lot of time using and testing the system. First, he copy-and-paste a dialogue focused movie-script into the system to see what response it generates. However our system was not fine-tuned for tasks other than regular long videos, so the response wasn't clear or actionable. Then he also uses the sample script, spending 3 mins in looking at visualizations and reading suggestions each, trying to understand how the system works. Then he spent 7 mins edit the script based on the suggestions.
    - Participant like the system overall but he made several good suggestions: 
        - Each blocks in the timeline should be clickable, otherwise it's confusing how does it relates to each paragraph. One possible solution is to highlight the corresponding paragraph after clicking on the segment in the timeline.
        - Add serial numbers on the left of each paragraph to improve readibility, since current format makes it confusing to navigate through the page.
        - Add more details to feedbacks, let the AI model generate more concrete and actionable example with each feedback. If the feedback says: "Add more anecdotes to xxx part", give some specific examples of it that helps user understand the suggestion.
    - He like the system but think there's much to improve before it becomes a good productivity tool that he can use for making videos.

    Participant 7: time in each stage (seconds): 60, 55, 150, 50. Number of Interactions (visualization-script, suggestion-script): 2, 2
    - Participant 7 is not a content creator. She explores the initial page for a brief moment, then use our provided sample script. However, this time she inputed Chinese instructions in the goal section. She instructed the system to "Remove unnecessary comedy paragraphs from the script" after reading the sample script and find many parts of it tedious and not funny. The system/AI agent understands her instruction well and gave her feedbacks on which paragraph she should cut. She spent a lot of time understanding the suggestion. She made similar remark to participant 6 about the timeline being un-clickable is very confusing. Then finally she edit the script by deleting parts of several paragraphs she found unnecessary.
    - She also commented on the fact that the paragraph index in the feedback start with 0 instead of 1, which is very unintuitive for general users (non cs students/programmers).
    
    Participant 8: time in each stage (seconds): 80, 50, 60, 120. Number of Interactions (visualization-script, suggestion-script): 4, 4
    - Participant 8 evaluated the system without much guidance from us at the start. He spent a while figuring out what to write. Since he only provided a short original script, consisting of only three paragraphs, he spent less time in the next two stages. Then in order to expand his script he uses the goal section to ask the AI for some content suggestion and generation. However the AI didn't output a lot of generated content beyond standard editting feedbacks.
    - Participant suggests a download, as well as an upload function, to help with the workflow, since he want to save his script after the session. 
    - He also wants more customization and freedom of the user-prompt so that the output suggestion can include more information than just standard feedbacks. in another word, make the uder-prompt more important and emphasized. 
    
    Participant 9: time in each stage (seconds): 20, 76, 150, 100. Number of Interactions (visualization-script, suggestion-script): 1, 4
    - Participant 9 uses the sample script. She like the segmentation function as well as the colors. She asks about the backend implementation of our system and suggests we add image/audio integration since we are using gpt-4o.
    - She also thinks though the workflow loop is complete, the current system doesn't have a lot of functions to play with.
    
    Participant 10: time in each stage (seconds): 30, 30, 130, 300. Number of Interactions (visualization-script, suggestion-script): 1, 6
    - Participant 10 uses the sample script and didn't spend much time in the initial stage. She really likes the visualization of color gradient on highlighted text boxes as well as the timeline. Then, she plays around with editting the script for 5 mins, trying out how the feedback's going to change based on different edits. 
    - She suggests a version control function that allows user to save and load versions/checkpoints of the script with different edits. 
    - She also find the segmentation to be inconsistent, since unedited paragraphs might change category after checking the script again.
3. [+1] DEPTH: Evaluate with 5 more participants. Feel free to make changes to your system between the first and second round of evaluation. If you do make changes, summarize the changes you made and why.
   
Participant 1
Time in each stage (seconds): 25, 80, 160, 230
Number of Interactions (visualization-script, suggestion-script): 4, 3

Participant 1 began by exploring the system for about 25 seconds, noting that “the overall interface feels intuitive.” After this, they uploaded a short script file via the new file upload feature to quickly populate the text editor. Throughout the visualization phase (80 seconds), they made 4 switches back and forth between the script and the timeline. This was mainly to identify how much each segment needed expansion or comedic relief. They also inserted two images using the image upload button, which automatically placed [image inserted] placeholders at their cursor positions. They found it “refreshingly simple” and “useful for remembering exactly where visuals should appear.”

In the suggestion stage (160 seconds), Participant 1 engaged with suggestions 3 times. They praised the system for “pointing out logical gaps” in the comedic transitions, finding it easier to fix them before filming. The editing phase (230 seconds) involved continuous toggling between the text and the timeline to confirm that comedic elements were flowing in the correct places. They also created three version snapshots using the new version control feature, allowing them to revert to an earlier version when they felt the script had become too cluttered. Ultimately, they said the versioning helped them iterate more confidently, stating: “I know I can always go back and compare.”

Participant 2
Time in each stage (seconds): 20, 130, 150, 200
Number of Interactions (visualization-script, suggestion-script): 6, 6

Participant 2 quickly scanned the interface in about 20 seconds, leaving them plenty of time to experiment with the new features in depth. They dragged and dropped a previously written script (a .txt file), appreciating how the file upload automatically integrated the text. They spent the next 130 seconds in the visualization phase, toggling 6 times to see how comedic bits stacked up against more informational sections. Throughout these toggles, they inserted a single [image inserted] placeholder to remind themselves of a future graphic they plan to include.

During the suggestion stage (150 seconds), they alternated 6 times between reading suggestions and updating the text, noting that suggestions “felt increasingly aligned” with their content. Their editing phase (200 seconds) was driven largely by the version control feature. They committed two versions at pivotal points: one to capture the comedic improvements, another after inserting new transitions. They said the version snapshots “made them feel more adventurous,” since they could roll back if the changes didn’t work out.

Participant 3
Time in each stage (seconds): 30, 70, 100, 250
Number of Interactions (visualization-script, suggestion-script): 2, 5

Participant 3 spent 30 seconds reading on-screen instructions to verify the system’s workflow. They opted to type a script manually rather than upload a file, noting that typing helps them organize ideas “on the fly.” During the visualization phase (70 seconds), they only switched twice to double-check comedic emphasis. They explained that they “prefer a big-picture view first” and rely more on suggestions for deeper edits.

They dedicated 100 seconds to studying the suggestions, with 5 interactions between the suggestions panel and the script. Midway, they inserted a placeholder for an image where they planned to display a chart in the final video. Their editing phase (250 seconds) was the longest among the group, where they tested multiple comedic rewrites. They saved one version initially, then realized after some reorganization that they wanted to revert—so they loaded the previous version to retrieve the old comedic structure. They found version control “immediately valuable,” praising how it let them compare comedic flow before and after.

Participant 4
Time in each stage (seconds): 60, 90, 90, 180
Number of Interactions (visualization-script, suggestion-script): 10, 2

Participant 4 took a thorough 60-second exploration, testing each icon, including the file upload and image insert features. They tried uploading a small .docx file, but discovered the system displayed some odd formatting. Still, they believed the system was “surprisingly resilient,” as it recovered enough text to work with. In the visualization phase (90 seconds), they switched back and forth 10 times, explaining that they like to “immediately see the structural impact” of every line added or removed.

Although they only had 2 suggestion-script interactions during the 90-second suggestion stage, they still found the suggestions “insightful” for comedic timing. In the editing stage (180 seconds), they also saved two versions—one to mark a halfway point in rewriting, another to finalize comedic segments. Interestingly, they didn’t end up reverting, but said the version control gave them more confidence to experiment: “It’s great for not second-guessing every little edit.”

Participant 5
Time in each stage (seconds): 10, 120, 180, 190
Number of Interactions (visualization-script, suggestion-script): 7, 7

Participant 5 jumped in quickly with only 10 seconds of onboarding, mostly ignoring instructions in favor of “figuring it out by clicking around.” They typed part of their script and also uploaded an older snippet to compare how the system’s suggestions differ between older and newer content. The visualization phase (120 seconds) had 7 toggles, emphasizing comedic vs. storytelling transitions.

They spent 180 seconds on suggestions, also toggling 7 times between reading them and applying partial changes. They inserted three [image inserted] placeholders to mark spots for future infographics, praising this feature as “a neat reminder.” The editing phase (190 seconds) saw them save multiple versions after each major comedic revision. They tested rolling back to an earlier version for a comedic draft, finding it “fantastically simple to revert” if the new comedic lines didn’t blend well. By the end, they praised how file upload plus version control “streamlines the iterative script-building process,” making it a strong tool for multi-step content creation.

Summary of Changes Made and Why
Between our first and second round of evaluations, we introduced several features based on feedback and anticipated user needs:

File Upload & Drag-and-Drop:

We added these to accommodate users who write their scripts in separate editors and want to import them seamlessly.
Multiple participants noted how this option saved them from manual copy-pasting, improving their overall workflow.

Image Insert Placeholder:

Content creators often want to indicate where visuals should go in the final production. We introduced an “Insert Image” button that places a [image inserted] placeholder at the current cursor position.
This change helps them keep track of potential illustrations or slides within the script, avoiding confusion later in the editing process.

Version Control:

Users requested an option to revert changes or compare different drafts without manually saving files. We added a simple version history where each snapshot can be saved and reloaded.
This gave participants the confidence to experiment more with comedic or narrative changes, knowing they could revert if needed.

By implementing these updates, we aimed to make the system more flexible, user-friendly, and conducive to iterative creative processes—ultimately helping participants better refine their scripts in a single, integrated environment.

## After your evaluation [+4]

1. [+4] Analyze your data and write up your key findings. The findings should be about 0.5-1p for each motivating question and any other interesting findings.
- For any qualitative data where you cannot easily remember the details of the results, a thematic analysis is required. When you conduct a thematic analysis, include your codebook.
- For any quantitative data, submit a script for analysis + your data. Recommendation: Create a notebook for your analysis. Someone should be able to run your notebook to reproduce your results.

### Qualitative Data:

1. Usefulness and Actionability

Overall Impression: Participants generally found the system useful and practical in helping them refine their scripts. The combination of visualizations and suggestions provided structured guidance, making it easier to identify areas for improvement.

Key Benefits:
- Visualization: Helped participants quickly spot sections that needed more elements be inserted. The color-coded timeline was particularly effective in highlighting information-dense areas that might be overwhelming for viewers. Helped identify where to add content, preventing gaps that might be noticed during video editing.
- Suggestions: Provided actionable insights, such as where to insert images or storytelling elements. Though one would not completely follow the suggestions, they inspires new idea about what to change.
  
Example Feedback:
"The suggestions are very detailed and even if I don’t follow them exactly, they inspire new ideas of how to improve my script."
"I liked that the suggestions weren’t vague like ‘make it more engaging’—they actually told me what to put there."

2. Customization and Personalization

Issue: While the system’s suggestions were generally helpful, some participants felt they didn’t fully align with their individual creative styles.

Main Concern:
- The system sometimes suggested changes that didn’t match a participant’s preferred storytelling tone or content structure.
- Some felt that while the suggestions worked for a general audience, they lacked nuance for more experienced creators with established styles.

Example Feedback:
"It’s useful, but I wouldn’t use it all the time because my content has a very specific style that the system doesn’t fully get."

3. Long-Term Use Potential and Applicability Beyond Content Creation

Usage Frequency:
- Most participants said they would use the system occasionally rather than for every script.
- They saw it as a helpful tool rather than something they would rely on consistently.

Potential in Other Domains:
- Some participants, especially those who were not content creators, noted that the system could be useful for other types of scriptwriting, such as speech preparations. The structured approach to suggestions and visualizations was seen as valuable beyond just video content.

Example Feedback:
"I wouldn’t use it for every script, but I’d definitely check it for ones where I feel stuck or unsure."
"... this could actually be useful for presentations, not just video scripts."

4. User Interaction and Learning Curve

Ease of Use: Most participants felt the system was intuitive and easy to navigate, but there could be some improvements on adding more headings or showing instructions.

Example Feedback:
"I got how to use it pretty quickly, but there could be a heading on each text box so that they are easier to be reviewed."


### Quantitative Data:
(graph see the jupyter notebook)

- Ease of Use: Participants were able to find out how to use the system relatively quickly.
- Visualization Effectiveness: The high number of interactions (6) in the visualization phase suggests that users frequently referred back and forth between the visualization and script, indicating its usefulness in structuring content. The color-coded timeline effectively helped participants understand content density and flow. Interestingly, more than one participant reacted to the visualizations when first seeing them, attracted by the high contrast and vibrant colors. Some even looked back at them multiple times just because they were so eye-catching.
- Suggestions Engagement: Users spent the most time reading the suggestions (170 seconds), indicating that they found them detailed and actionable. The lower number of interactions (3) suggests that users were deliberate in reviewing them rather than frequently switching back and forth.
- Editing Effort: The longest time was spent on making edits (210 seconds), as users applied insights from both suggestions and visualizations. After making changes, some participants generated new visualizations and suggestions, noticing improvements in their script. This gave them a sense of accomplishment, as they could visibly track their progress and see how their refinements made a difference.
- Overall Summary: The system is useful and guides users effectively through content improvement. While users engaged heavily with visualizations for structure and content balance, they also found suggestions actionable for refining their script. The workflow appears intuitive and supportive of content revision.



## Group Reflection [+1]

_1. What is one thing that went well in your evaluation?_

The system did not malfunction throughout the whole evaluation (kind of unexpected but great!).

_2. What is one thing that you wish you could have done differently?_

If we had more time, we could have used eye-tracking or cursor position tracking to measure how often participants switched between the script and the suggestions/visualization. This would provide a more precise count, as manually tracking while timing was difficult.

_3. How, if at all, did your participants represent the personas you intended to design for?_

Not all participants matched our intended persona—most were content creators, but some were not. However, this didn’t cause major issues.

_4. How do you think this impacted your results?_

The non-content creators provided feedback from an audience perspective, which is also valuable. They weren’t limited by a creator’s mindset and confirmed that our suggestions made content more engaging.

_5. Based on the above, what does this say about the potential applicability of your system?_

Our system seems highly applicable—several participants mentioned they would use it. Some non-content creators even suggested it could work for other scenarios, like speech script checking where audience engagement and information density also need to be balanced.

_6. What new questions do you have based on your evaluation?_

- How does the system’s impact vary across different content styles and platforms?
- Can it also work on short videos?


Did you use a generative AI tool for this assignment? If so, which tool(s) and how?

How much time did you spend on this assignment as a group? individually?

Zihan Jiang: 6 hr
Weihan Qu: 5 hr
