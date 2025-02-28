## To Run

1. Start the backend:
   - Navigate to the `backend` folder.
   - Set the virtual environment correctly:
     ```bash
     rm -rf env
     python3 -m venv env
     source env/bin/activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Copy and paste the file `en.env` to get the API key
   - Manually set the environment variable:
     ```bash
     export $(grep -v '^#' en.env | xargs)
     ```
   - Run `app.py` using:
     ```bash
     python app.py
     ```
   - Can see the result in http://127.0.0.1:8001/docs

2. Start the frontend:
   - Navigate to the `frontend` folder.
   - Run:
     ```bash
     npm install
     npm start
     ```
   - The frontend will be available at `http://localhost:3000`.


## Test script that you can try with:

[Opening Scene: A plain background with text "The Impact of Social Media on Students' Mental Health"]
Narrator (monotone voice): "Social media has become an integral part of students' lives. It is a platform for communication, information sharing, and entertainment. However, its impact on mental health is a topic of significant concern."

Narrator: "Studies indicate that excessive use of social media can lead to increased levels of anxiety and depression among students. The constant comparison with others' curated lives can create feelings of inadequacy and low self-esteem."

Narrator: "Key psychological effects include heightened stress, disrupted sleep patterns, and a decrease in face-to-face social interactions. These factors contribute to a decline in overall mental well-being."

Narrator: "In educational settings, the distraction caused by social media can negatively affect academic performance. The need for constant validation through likes and comments can also lead to addictive behaviors."

Narrator: "Mental health professionals emphasize the importance of setting boundaries for social media use. Strategies such as designated screen-free times and mindful usage can help mitigate adverse effects."

Narrator: "In conclusion, while social media offers numerous benefits, its impact on students' mental health cannot be overlooked. A balanced approach to its use is essential for maintaining psychological well-being."

Narrator: "Thank you for watching."
[End of video]

