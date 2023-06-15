'use strict';
const express = require('express');
require('dotenv').config()
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const asyncMysql = require('mysql2/promise')
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

const router = express.Router();

router.get('/survey', async function (req, res, next) {
  const asyncDb_client = await asyncMysql.createConnection(process.env.DATABASE_URL);
  var sql = `SELECT AVG(result) as average FROM survey_results`;
  const [rows, fields] = await asyncDb_client.query(sql);

  res.send(rows);
});

router.post('/survey', async function (req, res, next) {
  const result = req.body?.result;
  if (!result) {
    res.send({ "status": "error", "message": "could not write to database" });
    return;
  }
  const asyncDb_client = await asyncMysql.createConnection(process.env.DATABASE_URL);

  const insertSql = `INSERT INTO survey_results(result) VALUES(${result})`;
  const [insertedRows] = await asyncDb_client.query(insertSql);

  const selectSql = `SELECT AVG(result) as average FROM survey_results`;
  const [selectedRows] = await asyncDb_client.query(selectSql);

  res.send({ "status": "success", "average": Number(selectedRows[0].average.toFixed(2)) });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);