// const { modelExample } = require("../db.js");

// Function: view - renders the index page
const view = async (req, res) => {

    res.render("index", {
        title: `index`,
    });
}

// Export the module
module.exports = { view }