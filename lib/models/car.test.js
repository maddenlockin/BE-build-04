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


  it('creates a car', async() => {
    const car = await Car.create({make: 'MAKE', model: 'MODEL', year: 6666});
    expect(car).toEqual({
      id: '1',
      make: 'MAKE',
      model: 'MODEL',
      year: 6666
    });
  });

  it('finds a car by id', async() => {
    await Car.create(newCar);
    const car = await Car.findById(1);
    expect(car).toEqual({
      id:'1',
      ...newCar,
    });
  });

  it('finds all cars', async() => {
    await Car.create(newCar);
    const allCars = await Car.findAllCars();
    expect(allCars).toEqual([
      {
        id: '1',
        ...newCar
      }
    ]);
  });

  // * `update` a car by id
  // * `delete` a car by id

  afterAll(() => {
    return pool.end();
  });
});
