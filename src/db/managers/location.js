import models from '../models';

const { Location } = models;

export async function createLocation({ maleResidents, femaleResidents, name }) {
  const totalResidents = maleResidents + femaleResidents;
  const createdLocation = await Location.create({
    name,
    maleResidents,
    femaleResidents,
    totalResidents,
  });
  return createdLocation;
}

export async function getAllLocations() {
  const locations = await Location.findAll();
  return locations;
}

export async function getLocationById(locationId) {
  const location = await Location.findByPk(locationId);
  return location;
}

export async function getLocationByName(name) {
  const location = await Location.find({ where: { name } });
  return location;
}

export async function deleteLocation(locationId) {
  const deletedLocation = await Location.destroy({
    where: {
      id: locationId,
    },
  });
  return deletedLocation;
}

export async function updateLocation(locationId, fields) {
  const validFields = {};
  Object.keys(fields).forEach((field) => {
    if (field) {
      validFields[field] = fields[field];
    }
  });
  const location = await Location.update({ ...validFields }, { where: { id: locationId } });
  return location;
}