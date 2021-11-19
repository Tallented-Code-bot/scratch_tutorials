const Scratch = require("scratch3-api");

exports.verifyUser = async function verifyUser(username, password) {
  try {
    let session = await Scratch.UserSession.create(username, password);
    const valid = await session.verify();
    return valid;
  } catch (err) {
    return false;
  }
};
