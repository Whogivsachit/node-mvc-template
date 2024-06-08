// const { exampleModel } = require('../models');

module.exports = {
    async view(req, res) {
        res.render("index", {
            title: `index`,
        });
    }
}