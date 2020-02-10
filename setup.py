#barebones reference----------------
from flask import Flask

app = Flask(__name__)

@app.route('/hello')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run(debug=True)

#Routing---------------------------
@app.route('/hello/<string:name>') # example.com/hello/Anthony
def hello(name):
    return 'Hello ' + name + '!'

#Allowed request methods-----------
@app.route('/test')
@app.route('/test', methods=['GET','POST'])
@app.route('/test', methods=['PUT'])

#configurations-------------------
#direct config
app.config['CONFIG_NAME'] = 'config value'

#import variable from path
app.config.from_envvar('ENV_VAR_NAME')

#templates-----------------------
from flask import render_template

@app.route('/')
def index():
    return render_template('template_file.html', var1=value1, ...)

#JSON responses-----------------------------
import jasonify
@app.route('/returnstuff')
def returnstuff():
    num_list = [1,2,3,4,5]
    num_dict = {'numbers': num_list, 'name':'Numbers'}

    #returns JSON
    return jasonify({'output' : num_dict})

#Access request data------------------------------
request.args['name'] #query string arguments
request.form['name'] #form data
request.method #request type
request.cookies.get('cookie_name') #cookies
request.files['name'] #files

#redirect------------------------------
from flask import url_for, redirect

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/redirect')
def redirect_example():
    return redirect(url_for('index')) # sends user tp /home

#Abort -----------------------------
from flask import abort()

@app.route('/')
def index():
    abort(404) #returns 404 error
    render_template('index.html') #this never gets executed

#set cookie -----------------------------
from flask import make_response

@app.route('/')
def index():
    resp = make_response(render_template('index.html'))
    resp.set_cookie('cookie_name', 'cookie_value')
    return resp

#session handling -------------------------
import session

app.config['SECRET_KEY'] = 'any random string' #must be set to use sessions

#set session
@app.route('/login_success')
def login_success():

    session['key_name'] = 'key_value' # stores a secure cookie in browser

    return redirect(url_for('index'))

#read session
@app.route('/')
def index():
    if 'key_name' in session: #session exsists and has key
        session_var = session['key_value']
    else: #session does not exsist
