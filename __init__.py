import random, string, textwrap
from utils.database import Database
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask import request, redirect, url_for, render_template, Flask, Markup, Response, jsonify

app = Flask(__name__)
notes=Database("notes.json")
limiter = Limiter(app, key_func=get_remote_address)
limiter.init_app(app)

@app.route("/", methods=["GET", "POST"])
def ToDoApp():
    return render_template(
        "index.html",
        title="Just A Todo App",
        notes=Database("notes.json").Notes()
    )

@limiter.limit("2/2second")
@app.route("/addItem",methods=["GET","POST"])
def addItem():
    taskName=str(request.get_json()["taskName"])
    taskContent=str(request.get_json()["taskContent"])

    if (taskName and taskContent):
        _id="".join(random.choices(string.ascii_uppercase+string.digits,k=20))

        notes.addNote(
            header=taskName,
            content=taskContent,
            wrap=textwrap.shorten(taskContent,width=25,placeholder="..."),
            id=_id,
            time="22-02-2022"
            )
        return jsonify({
            "success":True,
            "header":taskName,
            "wrap":textwrap.shorten(taskContent,width=25,placeholder="..."),
            "id":_id,
            "time":"22-02-2022"
            })

@app.route("/error",methods=["GET"])
def SubmitError():
    EContent=request.args.get("error")
    EBrowser=request.args.get("browser")
    ETime=request.args.get("time")

    return jsonify({"error":EContent if EContent else None,
        "browser":EBrowser if EBrowser else None,
        "time":ETime if ETime else None,
        "submitted":True
        })

@app.route("/github", methods=["GET", "POST"])
def GithubRepo():
    return redirect("https://github.com/SecretsX/JustATodoApp")

if __name__ == "__main__":
    app.run("0.0.0.0", port=8000, debug=True)