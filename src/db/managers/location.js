import models from '../models';

const { Location } = models;

export async function createLocation(fields) {
  const { maleResidents, femaleResidents } = fields;
  const totalResidents = maleResidents + femaleResidents;
  const createdLocation = await Location.create({
    ...fields,
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
  const location = await Location.findOne({ where: { name } });
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
  validFields.id = locationId;
  const [location] = await Location.upsert(
    { ...validFields },
    {
      returning: true,
    },
  );
  return location;
}
