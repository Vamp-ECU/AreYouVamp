from flask import Flask, render_template, request
import os
print(os.getcwd())

app = Flask(__name__)

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/intro')
def intro():
    return render_template('intro.html')

@app.route('/vampire-input-form')
def inputform():
    return render_template('vampire-input-form.html')

@app.route('/process_form', methods=['POST'])
def process_form():
    data = request.get_json()
    result = model.isVampire(data['shadow'], data['complexion'], data['garlic'], data['accent'])
    return jsonify(result)  # Return result as JSON

if __name__ == '__main__':
    app.run(debug=True) 
