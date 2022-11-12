# from crypt import methods
# import sqlite3


from flask import Flask
from flask import render_template, request
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()

app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'contacto'

mysql.init_app(app)

# controlador
@app.route('/')
def index_formulario():
    # conn = mysql.connect()
    # cursor = conn.cursor()

    # sql = "Insert Into datos2 (nombre, email, mensaje) values ('Juan', 'juan@email.com', 'mensajedejuan');"
    # cursor.execute(sql)

    # conn.commit()

    return render_template('coneccion/index.html')

@app.route('/action_page', methods=["POST"])
def action_page():
    
    _nombre = request.form['nombre']
    _email = request.form['email']
    _mensaje = request.form['mensaje']

    sql = "insert into datos2 (nombre, email, mensaje) values (%s, %s, %s);"
    datos = (_nombre, _email, _mensaje)

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute(sql,datos)
    conn.commit()
    
    return render_template('coneccion/index.html')



if __name__ == '__main__':
    app.run( debug=True)
