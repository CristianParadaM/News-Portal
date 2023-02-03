const db = require('../../util/database')
const express = require('express');
const router = express.Router();

router.post('/postLog', async (req, res) => {
    const { user, method, url } = req.body;
    const r = await db.query(`INSERT INTO logs (username, logEntry) VALUES (?,?)`, [user, user + ' ' + new Date(Date.now()).toLocaleDateString('es-CL') + ' ' + method + ' ' + url]);
});

router.get('/getLogs/:user', async (req, res) => {
    const { user } = req.params;
    const lines = await db.query(`SELECT logEntry FROM logs where username="${user}"`);
    res.send(lines);
});

module.exports = router;