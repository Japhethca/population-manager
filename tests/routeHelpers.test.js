import sinon from 'sinon';
import { expect } from 'chai';

import {
  errorResponse,
  jsonResponse,
  serverError,
} from '../src/routes/helpers';

const resMock = {
  status: sinon.fake.returns({
    json: sinon.fake(data => data),
  }),
};

describe('Helpers', () => {
  describe('jsonResponse', () => {
    it('should return success response in json', () => {
      const result = jsonResponse(
        resMock,
        200,
        null,
        'response successful',
      );
      expect(result.status).to.equal('success');
      expect(result.message).to.equal('response successful');
    });
  });

  describe('errorResponse', () => {
    it('should return error response in json', () => {
      const result = errorResponse(
        resMock,
        400,
        'something went wrong',
      );
      expect(result.status).to.equal('error');
      expect(result.message).to.equal('something went wrong');
    });
  });

  describe('serverError', () => {
    it('should return error response in json', () => {
      const result = serverError(
        resMock,
      );
      expect(result.status).to.equal('error');
      expect(result.message).to.equal('There was an internal server errror');
    });
  });
});
