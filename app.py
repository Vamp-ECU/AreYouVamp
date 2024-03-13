from flask import Flask, render_template, send_from_directory
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
    return "Form submitted!"

if __name__ == '__main__':
    app.run(debug=True) 
