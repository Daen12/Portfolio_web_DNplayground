"use strict";
const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    signin: (req, res) => {
        res.render("home/signin");
    },
};

const process = {
    signin: (req, res) => {
        console.log(req.body);
    },
};

module.exports = {
    output,
    process,
};
