const express = require("express");
const dotenv = require("dotenv");
const {sequelize} = require('./models');
dotenv.config();

// Setup our app
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('src/public'));
app.set('views', 'src/views');

require('./routes')(app);

// Serve the project
sequelize.sync().then(() => {
    app.listen(process.env.PORT, process.env.HOST, () => {
        console.log(`Server started on http://${process.env.HOST}:${process.env.PORT}`);
    });
});