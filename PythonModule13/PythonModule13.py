from flask import Flask, jsonify
import mysql.connector

app = Flask(__name__)

database = {
    "user": "BLEJAJO",
    "password": "BLEJAJO",
    "host": "localhost",
    "port": "3306",
    "database": "flight_game",
}

def database_connector():
    conn = mysql.connector.connect(**database, charset="utf8mb4")
    collation = "utf8mb4_general_ci"
    cursor = conn.cursor()
    cursor.execute("SET NAMES 'utf8mb4' COLLATE 'utf8mb4_general_ci';")
    cursor.close()

    return conn


def alkuluku(luku):
    if luku <= 1:
        return False
    if luku <= 3:
        return True
    if luku % 2 == 0 or luku % 3 == 0:
        return False
    i = 5
    while i * i <= luku:
        if luku % i == 0 or luku % (i + 2) == 0:
            return False
        i += 6
    return True

@app.route('/alkuluku/<int:numero>', methods=['GET'])

def tarkista_luku(numero):
    vastaus = {
        "Numero" : numero,
        "alkuluku" : alkuluku(numero)
    }
    return jsonify(vastaus)

@app.route("/kenttä/<string:kentta>", methods=["GET"])

def haeKenttä(kentta):
    conn = database_connector()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM airport WHERE ident = %s",(kentta,))
    lentokenttä = cursor.fetchone()
    cursor.close()
    conn.close()
    lentokenttä = {
        "ICAO": lentokenttä["ident"],
        "Name": lentokenttä["name"],
        "Municipality": lentokenttä["municipality"]
    }
    return jsonify(lentokenttä)