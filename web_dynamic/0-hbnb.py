#!/usr/bin/python3
"""flask to run app"""
from flask import Flask, render_template
from models import storage
from models.state import State
import uuid


app = Flask(__name__)


@app.teardown_appcontext
def close_st(exc):
    storage.close()


@app.route("/0-hbnb/", strict_slashes=False)
def hbnb_filter():
    cache_id = str(uuid.uuid4())
    states = storage.all(State)
    amenities = storage.all("Amenity")
    places = storage.all("Place")
    return render_template("0-hbnb.html", cache_id=cache_id,
                           states=states, amenities=amenities,
                           places=places)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
