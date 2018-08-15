const express = require("express");

const router = express.Router();

// Importing our Burger.js model
const burger = require('../models/burger.js');

// ========================ROUTES=================== //
router.get('/', (req, res) => {
    burger.all(data => {
        let burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], result => {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition)

    burger.update({
        devoured: true
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        };
    });
});

module.exports = router
