/* eslint-disable import/no-extraneous-dependencies */
/* const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
  name: 'diving',
  dificulty: '3',
  duration: 2,
  season: 'verano',
  country: ['ARG']
};

describe('Activity routes', () => {

  describe('POST /api/activity', () => {
    it('should get "correcto" as msg', () =>
      agent.post('/api/activity')
        .send(activity)
        .then((res) => {
          expect(res.body.response).equal('correcto')
        }))
  });
});
 */