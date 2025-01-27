Dropout Prediction System

A web application to predict student dropout risk based on their behavior and academic data.


---

Prerequisites

Ensure you have the following installed:

Node.js and npm

Python 3

MongoDB



---

Installation and Setup

1. Install Node.js dependencies:
npm install


2. Create and activate a Python virtual environment:

For Linux/Mac:
python -m venv .venv
source .venv/bin/activate

For Windows:
python -m venv .venv
.venv\Scripts\activate



3. Install Python dependencies:
pip install -r requirements.txt


4. Set up the MongoDB database:

Create a MongoDB database (local or cloud).

Add sample student data to the students collection.

Update the MongoDB connection string in your .env file:
MONGO_URI=mongodb://localhost:27017/dropout-prediction



5. Train the Machine Learning Model (Optional):
Run the Python script to train the model:
python python_services/train_model.py
The trained model will be saved as dropout_model.pkl in the python_services directory.


6. Start the Node.js server:
npm start




---

Usage

1. Add Student Data:
Insert a student's data into the students collection in MongoDB:

{
  "rollno": "111623102083",
  "name": "Kamalesh",
  "test_completion_rate": 1,
  "notifications_ignored": 3,
  "course_progress": 1
}


2. Make a Prediction:
Send a GET request to the API:
GET /api/predict/:rollno

Example:
GET http://localhost:5000/api/predict/111623102083

Response:

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




---

Folder Structure

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


---

API Endpoints

GET /api/predict/:rollno: Predicts dropout risk for a student.



---

Contribution

1. Fork the repository.


2. Create a new branch:
git checkout -b feature-name


3. Commit your changes:
git commit -m "Add feature"


4. Push to the branch:
git push origin feature-name


5. Open a pull request.




---

License

This project is licensed under the MIT License. See the LICENSE file for details.


---

Author: Kamalesh A.G
Feel free to reach out for feedback or collaboration!


---

