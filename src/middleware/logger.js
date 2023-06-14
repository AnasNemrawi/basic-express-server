const logger = (req, res, next) => {
    console.log({ method: req.method, path: req.path });
    next();
};

module.exports = logger;
