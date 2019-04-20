import { expect } from 'chai';
import sinon from 'sinon';

import models from '../src/db/models';
import {
  createLocation,
  deleteLocation,
  getLocationById,
  getAllLocations,
  getLocationByName,
  updateLocation,
} from '../src/db/managers/location';

const locationsMock = [
  {
    id: 2,
    totalResidents: 110,
    name: 'Nigeria',
    maleResidents: 40,
    femaleResidents: 70,
    updatedAt: '2019-04-16T14:11:29.082Z',
    createdAt: '2019-04-16T14:11:29.082Z',
  },
  {
    id: 2,
    totalResidents: 110,
    name: 'Lagos',
    maleResidents: 40,
    femaleResidents: 70,
    updatedAt: '2019-04-16T14:11:29.082Z',
    createdAt: '2019-04-16T14:11:29.082Z',
  },
];

describe('DB managers', () => {
  before(() => {
    sinon.replace(models.Location, 'create', sinon.fake.resolves(locationsMock[0]));
    sinon.replace(models.Location, 'findByPk', sinon.fake.resolves(locationsMock[1]));
    sinon.replace(models.Location, 'findAll', sinon.fake.resolves(locationsMock));
    sinon.replace(models.Location, 'findOne', sinon.fake.resolves(locationsMock[1]));
    sinon.replace(models.Location, 'upsert', sinon.fake.resolves([locationsMock[1]]));
    sinon.replace(models.Location, 'destroy', sinon.fake());
  });

  after(() => {
    sinon.restore();
  });

  describe('createLocation', async () => {
    it('should create new location', async () => {
      const payload = { maleResidents: 20, femaleResidents: 30, name: 'Enugu' };
      const res = await createLocation(payload);
      expect(res).to.equal(locationsMock[0]);
    });
  });

  describe('getAllLocations', async () => {
    it('should return all created location', async () => {
      const res = await getAllLocations();
      expect(res).to.equal(locationsMock);
    });
  });

  describe('deleteLocation', async () => {
    it('should delete location with given ID', async () => {
      const locationId = 12;
      await deleteLocation(locationId);
      expect(models.Location.destroy.calledWith({ where: { id: locationId } }))
        .to.equal(true);
    });
  });

  describe('getLocationById', async () => {
    it('should return the location with ID', async () => {
      const locationId = 12;
      const res = await getLocationById(locationId);
      expect(res).to.equal(locationsMock[1]);
      expect(models.Location.findByPk.calledWith(locationId)).to.equal(true);
    });
  });

  describe('getLocationByName', async () => {
    it('should return the location with lcation name', async () => {
      const locatinName = 'Lagos';
      const res = await getLocationByName(locatinName);
      expect(res).to.equal(locationsMock[1]);
      expect(models.Location.findOne.calledWith({ where: { name: locatinName } }))
        .to.equal(true);
    });
  });

  describe('updateLocation', async () => {
    it('should return the location with lcation name', async () => {
      const payload = { name: 'Abia' };
      const locationId = 2;
      const res = await updateLocation(locationId, payload);
      expect(res).to.equal(locationsMock[1]);
      expect(models.Location.upsert.calledWith(
        { ...payload, id: locationId },
        {
          returning: true,
        },
      )).to.equal(true);
    });
  });
});
