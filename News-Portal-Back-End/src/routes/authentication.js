const express = require('express');
const router = express.Router();
const db = require('../util/database')
const helpers = require('../lib/helpers');

router.get('/login/:user/:password', async (req, res) => {
    const { user } = req.params;
    try{
        const r = await db.query(`SELECT username, password from users where user="${user}"`);
        res.send(true);
    }catch(e){
        res.send(false);
    }
});

module.exports = router;