const express = require('express')
const app = express()
app.use(require('morgan')('dev'))
app.use(express.json())
const pg = require('pg')
const client = new pg.Client(process.env.DATABASE_URL

// GET ALL SCENTS

async function getAllScents() {
    app.get('/scents', async(req, res, nex) => {
        const SQL = `
        SELECT * FROM scents;
        `
        const response = await client.query(SQL)
        res.send(response.rows)
    })
}

// GET SCENT CARD
async function getOneScent() {
    app.get('/scents:id', async(req,res,nex) => {
        const SQL = `
        SELECT * FROM scents
        WHERE scent_id = $1;
        `
        const id = req.params.id
        const response = await client.query(SQL, [scent_id])
        res.send(response.rows)
    })
}