const { Client } = require('pg')
//require('dotenv').config();
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/landescape')


const connection = new Client({
user: 'postgres',
host: 'localhost',
database: 'landescape',
password: 'password'
})
// sequelize.authenticate()
// .then(() => {
//     console.log('Sukses terhubung ke PostgreSQL');
//   })
//   .catch(err => {
//     console.error('Gagal terhubung ke PostgreSQL:', err);
//   });
connection.connect((err, res) => {
    if(err){
        console.log('error connecting to postgresDB', err);
    } else {
        console.log('connected to postgres')
    }
})

const getPhotos = (cb) => {
    connection.query('SELECT * FROM photo WHERE user_id = 223400', (error, results)=>{
      if (error) {
        cb(error, null);
      } else {
          console.log('success querying the DB on postres query file')
        cb(null, results);
      }
    })
  }

  const getRegionPhotos = (cb) => {
    connection.query('SELECT * FROM photo WHERE region_id = 7450995', (error, results)=>{
      if (error) {
        cb(error, null);
      } else {
          console.log('success querying the DB on postres query file')
        cb(null, results);
      }
    })
  }

  const getRegionName = (data, cb) => {
    connection.query(`SELECT * FROM region WHERE name = (?)`, data, (error, results)=>{
      if (error) {
        cb(error, null);
      } else {
          console.log('success querying the DB on postres query file')
        cb(null, results);
      }
    })
  }

module.exports = {
    getPhotos, getRegionPhotos, getRegionName
}