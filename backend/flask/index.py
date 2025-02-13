from flask import Flask
from flask_cors import CORS  # Import CORS package

app = Flask(__name__)
CORS(app)  # Allow all origins (temporary fix)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/about')
def about():
    return 'About'

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
