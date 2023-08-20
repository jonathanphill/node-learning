const { format } = require("date-fns");
const { v4: uuid } = require("uuid"); // import v4 as uuid it's a version

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\t HH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    // testing
    await fs.promises.appendFile(
      path.join(__dirname, "logs",logName),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};
module.exports = logEvents;
