require('dotenv').config();

module.exports = {
    development: {
        client: "postgresql",
        connection: `postgres://localhost:5432/${process.env.DBNAME}`,
        migrations: {
            directory: __dirname + "/database/migrations"

        },
        seeds: {
            directory: __dirname + "/database/seeds"
        }

    }
}