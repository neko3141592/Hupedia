const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const mysql = require('mysql2');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '-+#WR2jPnhJnn/x|R6kC',
    database: 'Hupedia',
});

app.use(express.json());
app.use(cors());

app.get("/api/get/page", (req, res) => {
    const page = req.query.name;
    
    if (!page) {
        res.status(400).send('Bad Request: Missing "name" parameter');
        return;
    }

    const sqlSelect = `SELECT * FROM pages WHERE id=${page}`;

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(result);
    });
});

app.get("/api/get/search", (req, res) => {
    const search = req.query.text;
    if (!search) {
        res.status(400).send('Bad Request: Missing "name" parameter');
        return;
    }

    const sqlSelect = `SELECT title,id FROM pages WHERE title LIKE "%${search}%"`;

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(result);
    });
});

app.put("/api/get/page/edit" , (req , res) => {
    const page = req.query.name;
    const text = req.query.text.replace(/\n/g, '');
    const sqlSelect = `UPDATE pages SET html=${text} WHERE id=${page}`;

    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.send(result);
    });
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
