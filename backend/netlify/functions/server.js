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

	const entriesSql = `SELECT COUNT(id) as lower_entries FROM survey_results WHERE result <= ${result}`
	const [entriesRows] = await asyncDb_client.query(entriesSql);

	const selectSql = `SELECT AVG(result) as average, COUNT(result) as total_entries FROM survey_results`;
	const [selectedRows] = await asyncDb_client.query(selectSql);
	console.log(selectedRows);
	const percentile = (entriesRows[0].lower_entries / selectedRows[0].total_entries) * 100;

	res.send({ "status": "success", "average": Number(selectedRows[0].average.toFixed(2)), "percentile": Number(percentile.toFixed(2)) });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);