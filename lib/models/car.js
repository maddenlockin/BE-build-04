const pool = require("../utils/pool");

module.exports = class Car {
    id;
    make;
    model;
    year;

    constructor(row) {
        this.id = row.id;
        this.make = row.make;
        this.model = row.model;
        this.year = row.year;
    }

    static async create({ make, model, year }) {
        const { rows } = await pool.query(
            `INSERT INTO cars (make, model, year) VALUES ($1, $2, $3)`, [make, model, year]
        );
        return new Car(rows[0]);
    }

    //findById
    //find all 
    //update
    //delete
}

