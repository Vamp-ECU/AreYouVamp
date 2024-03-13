from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('')
def index():
    return render_template('index.html')

@app.route('intro')
def intro():
    return render_template('intro.html')

@app.route('vampire-input-form')
def intro():
    return render_template('vampire-input-form')

if __name__ == '__main__':
    app.run(debug=True) 
