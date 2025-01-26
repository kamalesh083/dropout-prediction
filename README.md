# Dropout Prediction System

This project is a **Dropout Prediction System** that analyzes student data and predicts whether a student is "At Risk" of dropping out or "Not At Risk." It utilizes a machine learning model integrated with a Node.js backend and a MongoDB database.

## Features

- Predicts dropout risk using a pre-trained machine learning model.
- Retrieves student data from MongoDB using roll numbers.
- Provides results via a RESTful API.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Machine Learning:** Python, Scikit-learn, Joblib
- **Database:** MongoDB
- **Frontend:**React.js
- **Others:** Git, GitHub, JSON communication between Node.js and Python

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**
- **Python (3.x)**
- **MongoDB**
- **Git**

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/dropout-prediction.git
   cd dropout-prediction
Install Node.js dependencies:

bash
Copy
Edit
npm install
Create and activate a Python virtual environment:

bash
Copy
Edit
python -m venv .venv
source .venv/bin/activate    # For Linux/Mac
.venv\Scripts\activate       # For Windows
Install Python dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Set up the MongoDB database:

Create a MongoDB database (local or cloud).
Add sample student data to the students collection.
Update the MongoDB connection string in your .env file:
bash
Copy
Edit
MONGO_URI=mongodb://localhost:27017/dropout-prediction
Train the Machine Learning Model (Optional):

Run the Python script for training the model:
bash
Copy
Edit
python python_services/train_model.py
The trained model will be saved as dropout_model.pkl in the python_services directory.
Start the Node.js server:

bash
Copy
Edit
npm start
Usage
Add student data: Insert a student's data into the students collection in MongoDB:

json
Copy
Edit
{
    "rollno": "111623102083",
    "name": "Kamalesh",
    "test_completion_rate": 1,
    "notifications_ignored": 3,
    "course_progress": 1
}
Make a prediction:

Send a GET request to the API:
bash
Copy
Edit
GET /api/predict/:rollno
Example:
bash
Copy
Edit
GET http://localhost:5000/api/predict/111623102083
Response:
json
Copy
Edit
{
    "studentDetails": {
        "rollno": "111623102083",
        "name": "Kamalesh",
        "test_completion_rate": 1,
        "notifications_ignored": 3,
        "course_progress": 1
    },
    "prediction": "At Risk"
}
Folder Structure
bash
Copy
Edit
dropout-prediction/
├── backend/
│   ├── controllers/
│   │   └── dropoutController.js
│   ├── models/
│   │   └── studentModel.js
│   ├── routes/
│   │   └── apiRoutes.js
│   ├── python_services/
│   │   ├── dropout_model.py
│   │   ├── train_model.py
│   │   └── dropout_model.pkl
│   ├── app.js
│   ├── .env
├── frontend/ (if applicable)
├── package.json
├── README.md
├── requirements.txt
API Endpoints
Method	Endpoint	Description
GET	/api/predict/:rollno	Predicts dropout risk for a student
Contribution
Fork the repository.
Create a new branch:
bash
Copy
Edit
git checkout -b feature-name
Commit your changes:
bash
Copy
Edit
git commit -m "Add feature"
Push to the branch:
bash
Copy
Edit
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See LICENSE for details.

Author
Kamalesh A.G
Feel free to reach out for feedback or collaboration!

yaml
Copy
Edit

---

### Steps to Add This README to Your Project:
1. Create a `README.md` file in the root of your project.
2. Paste the above content into the file.
3. Commit and push the file:
   ```bash
   git add README.md
   git commit -m "Add project README"
   git push origin main






