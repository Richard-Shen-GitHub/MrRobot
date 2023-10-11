from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

### Analysis
@app.route("/get_all_analysis", methods=['GET'])
def analysis_home_route():
    print('test')
    return {"success": "yes"}

if __name__ == "__main__":
  app.run()