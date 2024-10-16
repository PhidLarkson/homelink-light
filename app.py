from flask import Flask, render_template, jsonify
import os
import dotenv

# dotenv.load_dotenv()

app = Flask(__name__)

# home
@app.route('/')
def home():
    return render_template('desk/index.html')


# full control dashboard
@app.route('/control')


# dashboard
@app.route('/smart_home')
def smart_home():
    return render_template('dashboard.html')


@app.route('/api/home_status')
def home_status():
    # Placeholder for fetching home status from the ESP32 or other sources
    status = {
        "temperature": "32°C",
        "humidity": "45%",
        "lights": "On",
        "security": "Armed"
    }
    return jsonify(status)

if __name__ == '__main__':
    app.run(debug=True, port="3201", host="0.0.0.0")
