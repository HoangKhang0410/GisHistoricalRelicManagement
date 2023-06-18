const filterUpdateData = (req, res, next) => {
    if (req.body) {
        if (req.body.nodeIds) delete req.body.faceIDs;
        if (req.body.path) delete req.body.path;
    }
    next();
}

module.exports = { filterUpdateData }