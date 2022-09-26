/* const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});


describe('TOURIST ACITIVITY MODEL', () => {
  beforeEach(() => Tourist_Activity.sync({force: true}))
  describe('Validaciones', () => {
    it('Error si falta algún dato', async () => {
      try {
        await Tourist_Activity.create({})
      } catch (err) {
        expect(err.message).to.contain('notNull')
      }
    })
    it('Crear actividad', async () => {
      await Tourist_Activity.create({
        name: 'Ping Pong',
        difficult: 4,
        duration: 3,
        season: 'Primavera'
      })
      .then(e => expect(e).to.have.property('id'))
    })
    it('Debería tirar un error si la dificultad es mayor a 5', async () => {
      await Tourist_Activity.create({
        name: 'Ping Pong',
        difficult: 7,
        duration: 3,
        season: 'Primavera'
      }).then().catch(e => expect(e.message).to.contain('Validation max on difficult'))
    })
  })
})
















const countryOk = {
  name: "Republica de Banania",
  image: "asd",
  continent: "South America",
  capital: "jerepalski" ,
  id: "RDB"
};

const countryNotOk = {
  image: "asd",
  capital: "jerepalski" ,
  id: "RDB"
};

const activityOk = {
  activityname: "pelotapaleta",
  difficulty: "1", 
  duration: "2 hs", 
  season: "Spring"
}

const activityNotOk = {
  difficulty: "1", 
  duration: "2 hs", 
}

describe('MODELS:', () => {
describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name, image, continent, capital or id', () => {
      it('should throw an error if name, image, continent, capital or id are null', (done) => {
        Country.create(countryNotOk)
          .then(() => done(new Error('It requires name, image, continent, capital or id (not null)')))
          .catch(() => done());
      });
      it('should work when its a valid name, image, continent, capital and id', () => {
        Country.create(countryOk);
      });
    });
  });
});

describe('Activity model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Activity.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Activity.create(activityNotOk)
          .then(() => done(new Error('It requires a valid name (not null)')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Activity.create(activityOk);
      });
    });
  });
});

})
 */