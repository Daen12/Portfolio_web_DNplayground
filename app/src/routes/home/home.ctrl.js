"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const signin = (req, res) => {
    res.render("home/signin");
};

module.exports = {
    home,
    signin,
};
