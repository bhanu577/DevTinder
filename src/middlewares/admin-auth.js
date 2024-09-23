const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked!!!");
  const token = "xyz";
  const isAdmin = token === "xyz";
  if (!isAdmin) {
    res.status(401).send("User admin Is not authorized");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
    console.log("User auth is getting checked!!!");
    const token = "xyz1";
    const isAdmin = token === "xyz";
    if (!isAdmin) {
      res.status(401).send("User Is not authorized");
    } else {
      next();
    }
  };

module.exports = {adminAuth,userAuth};