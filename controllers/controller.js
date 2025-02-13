const statusCodes = require("../helpers/statusCodes");

class Controller {
  user(req, resp) {
    console.log("I'm the controller");

    resp.send(statusCodes.OK, "I'm the controller");
  }
}

module.exports = new Controller();
