const { Client } = require('pg')
require('dotenv').config();

const client = new Client({
user: `process.env.USER`,
host: `process.env.HOST`,
database: `process.env.DBNAME`,
password: `process.env.PW`
}
)

client.connect((err, res) => {
    if(err){
        console.log('error connecting to postgresDB');
    } else {
        console.log('connected to postgres')
    }
})