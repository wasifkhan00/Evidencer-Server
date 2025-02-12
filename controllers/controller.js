class Controller {
  user(req, resp) {
    console.log("I'm the controller");

    resp.send("Surprise from controller MF");
  }
}

module.exports = new Controller();
