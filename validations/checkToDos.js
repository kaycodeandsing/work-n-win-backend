const checkName = (req, res, next) => {
    console.log("checking name...");
  };
  

  const checkBoolean = (req, res, next) => {
    const { finished } = req.body;
    if (
      finished == "true" ||
      finished == "false" ||
      finished == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "finished must be a boolean value" });
    }
  };
  module.exports = { checkBoolean, checkName };