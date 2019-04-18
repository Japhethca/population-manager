import { expect } from 'chai';
import superTest from 'supertest';

import server from '../src/server';

const request = superTest(server);
const url = '/api/v1/locations';

describe('POST /locations', () => {
  it('should create a new location', async () => {
    const payload = {
      name: 'Enugu',
      maleResidents: 200,
      femaleResidents: 500,
    };
    const res = await request.post(url).send(payload);
    expect(res.body.status).to.equal('success');
    expect(res.body.data.name).to.equal(payload.name);
    expect(res.body.data.totalResidents).to.equal(700);
  });

  it('should return validation response error on missing fields', async () => {
    const payload = {
      maleResidents: 200,
      femaleResidents: 500,
    };
    const res = await request.post(url).send(payload);
    expect(res.body.status).to.equal('error');
    expect(res.body.errors[0]).to.equal('[name] in request body is required');
  });
});

describe('PUT /locations', () => {
  it('should update location fields', async () => {
    const locationId = 1;
    const payload = {
      name: 'Los Angeles',
    };
    const res = await request.put(`${url}/${locationId}`).send(payload);
    expect(res.body.status).to.equal('success');
  });
});

describe('GET /locations', () => {
  it('should return all created locations', async () => {
    const res = await request.get(url);
    expect(res.body.status).to.equal('success');
    expect(res.body.data.length).to.be.greaterThan(1);
  });
});

describe('GET /locatons/:locationId', () => {
  it('should get a single location with given ID', async () => {
    const locationId = 2;
    const res = await request.get(`${url}/${locationId}`);
    expect(res.body.status).to.equal('success');
    expect(res.body.data.name).to.equal('Lagos');
    expect(res.body.data.totalResidents).to.equal(600);
  });
});

describe('DELETE /locatons/:locationId', () => {
  it('should delete created locations', async () => {
    const locationid = 4;
    const res = await request.delete(`${url}/${locationid}`);
    expect(res.body.status).to.equal('success');
  });
});
