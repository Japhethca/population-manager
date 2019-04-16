import { Router } from 'express';
import joi from 'joi';

import {
  createLocation,
  updateLocation,
  deleteLocation,
  getAllLocations,
  getLocation,
  rootAPiRoute,
} from './controllers';
import { methodNotImplemented } from './helpers';
import validate from './validator';


const router = Router();

router.get('/', rootAPiRoute);

// locations route
router
  .post(
    '/locations',
    validate({
      body: {
        name: joi.string().required(),
        maleResidents: joi.number().required(),
        femaleResidents: joi.number().required(),
      },
    }),
    createLocation,
  )
  .get('/locations', getAllLocations)
  .all('/locations', methodNotImplemented);

router
  .put('/locations/:locationId',
    validate({
      params: {
        locationId: joi.number().required(),
      },
      body: {
        name: joi.string().optional(),
        maleResidents: joi.number().optional(),
        femaleResidents: joi.number().optional(),
      },
    }),
    updateLocation)
  .get('/locations/:locationId',
    validate({
      params: {
        locationId: joi.number().required(),
      },
    }),
    getLocation)
  .delete('/locations/:locationId',
    validate({
      params: {
        locationId: joi.number().required(),
      },
    }),
    deleteLocation)
  .all('/locations/:locationId', methodNotImplemented);

export default router;
