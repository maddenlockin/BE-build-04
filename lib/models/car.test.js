const fs = require('fs');
const { request } = require('http');
const pool = require('../utils/pool');
const Car = require('./car.js');

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });

  const newCar = {
    id: '1',
    make: 'MAKE',
    model: 'MODEL',
    year: 6666
  };


  xit('creates a car', async() => {
    const car = await Car.create(newCar);
    expect(car).toEqual({
      id: '1',
      ...newCar,
    });
  });

  xit('finds a car by id', async() => {
    const car = await Car.findbyId('1');
    expect(car).toEqual({
      id:'1',
      ...newCar,
    });
  });

  // * `find` all cars

  // * `update` a car by id
  // * `delete` a car by id

  afterAll(() => {
    return pool.end();
  });
});
