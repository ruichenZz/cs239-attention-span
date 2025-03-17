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

    
    Participant 5: 
    
    Participant 6: 
    
    Participant 7: 
    
    Participant 8: 
    
    Participant 9: 
    
    Participant 10: 
    
3. [+1] DEPTH: Evaluate with 5 more participants. Feel free to make changes to your system between the first and second round of evaluation. If you do make changes, summarize the changes you made and why.

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
