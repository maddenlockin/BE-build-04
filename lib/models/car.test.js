const fs = require('fs');
const { request } = require('http');
const pool = require('../utils/pool');
const Car = require('./car');

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });

  const newCar = {
    id: '1',
    make: 'MAKE',
    model: 'MODEL',
    year: 6666
  }

// * `insert` a car
  it('inserts a car into the db', async() => {
    const car = await Car.create(newCar);
    expect(car).toEqual(newCar)
    });
  });
  
// * `findById` a car
// * `find` all cars
// * `update` a car by id
// * `delete` a car by id

  afterAll(() => {
    return pool.end();
  });
});
