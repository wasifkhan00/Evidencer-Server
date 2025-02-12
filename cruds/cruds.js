const myPersonalData = require("../model/model");

class cruds {
 

  async findAndReturnPersonalData(req, res) {
    const requestingPersonalData = await myPersonalData.find(
      {},
      (err, data) => {
        return data;
      }
    );

    return requestingPersonalData;
  }
}

module.exports = new cruds();
