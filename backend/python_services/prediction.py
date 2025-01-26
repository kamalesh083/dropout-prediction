import joblib
import json
import sys
import numpy as np

# Load the pre-trained model
model = joblib.load("python_services/dropout_model.pkl")

def get_prediction(student_data):
    """
    This function receives student data, extracts features, and returns the prediction
    on whether the student is at risk of dropping out.
    """
    # Extract features (assuming features are provided in the form of a dictionary)
    features = [
        student_data.get('test_completion_rate', 0),
        student_data.get('notifications_ignored', 0),
        student_data.get('course_progress', 0)
    ]
    
    # Convert features into a numpy array
    features = np.array(features).reshape(1, -1)

    # Get the prediction from the model
    prediction = model.predict(features)

    # Output the prediction result
    if prediction[0] == 1:
        return "At Risk"
    else:
        return "Not At Risk"

if __name__ == "__main__":
    # Read the input from Node.js (JSON format)
    input_data = sys.stdin.read()  # Reading input from stdin
    student_data = json.loads(input_data)  # Parsing JSON input data

    # Get the prediction result
    result = get_prediction(student_data)

    # Print the result (stdout to be captured by Node.js)
    print(result)
