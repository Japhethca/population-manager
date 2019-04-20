import * as LocationManagers from '../../db/managers/location';
import {
  errorResponse,
  jsonResponse,
  serverError,
} from '../helpers';


export async function createLocation(req, res) {
  try {
    const location = await LocationManagers.createLocation(req.body);
    return jsonResponse(res, 201, location);
  } catch (err) {
    return serverError(res, 500);
  }
}

export async function getAllLocations(req, res) {
  try {
    const locations = await LocationManagers.getAllLocations();
    return jsonResponse(res, 200, locations);
  } catch (err) {
    return serverError(res);
  }
}

export async function updateLocation(req, res) {
  const { locationId } = req.params;
  const locationExists = await LocationManagers.getLocationById(locationId);

  if (!locationExists) {
    return errorResponse(res, 404, `Location with id ${locationId} does not exist`);
  }

  try {
    const location = await LocationManagers.updateLocation(locationId, req.body);
    return jsonResponse(res, 201, location);
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return errorResponse(res, 409, 'location with name already exists');
    }
    return serverError(res);
  }
}

export async function getLocation(req, res) {
  const { locationId } = req.params;
  const location = await LocationManagers.getLocationById(locationId);

  if (!location) {
    return errorResponse(res, 404, `Location with id ${locationId} does not exist`);
  }
  return jsonResponse(res, 200, location);
}

export async function deleteLocation(req, res) {
  const { locationId } = req.params;
  const location = await LocationManagers.getLocationById(locationId);

  if (!location) {
    return errorResponse(res, 404, `Location with id ${locationId} does not exist`);
  }

  try {
    await LocationManagers.deleteLocation(locationId);
    return jsonResponse(res, 200, null, 'Location deleted successfully');
  } catch (err) {
    return serverError(res);
  }
}

export function rootAPiRoute(req, res) {
  return jsonResponse(res, 200, null, 'Welcome to Population Management API.');
}
