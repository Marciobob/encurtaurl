from flask import  Flask, request, jsonify,render_template

from werkzeug.utils import secure_filename
import pyshorteners
import os
import time
import schedule
import pyperclip
import json

##instancia o flask
app = Flask(__name__)


#rota que grava posts 
@app.route("/encurta_url", methods=["POST", ])
def encurtar_url():
    print("encurta_url",request.data)
    body = request.data
    decode = body.decode('utf-8')
    jsonclient = json.loads(decode)
    print("dados recebidos",jsonclient)
  
    link = jsonclient['url']
    print("dados recebidos",link)
  
    #encurta url
    urladdrerss = str(link)
    url_curto = pyshorteners.Shortener().tinyurl.short(urladdrerss)
    resposta ={'url': url_curto}
    resp = jsonify(resposta)

    resp.headers['Access-Control-Allow-Origin']='*'
    return resp




#verifica regra e seta porta e rost do servidor
if  __name__ == "__main__":

    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', "5000"))

    except ValueError:
        PORT = 5000
    
    #inicia aplicaçao
    app.run(HOST,PORT,debug=True)
    #webview.start(HOST, PORT)
