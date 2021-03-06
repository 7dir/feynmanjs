var Bezier = require('./../../../src/helpers/Bezier');

describe('Bezier', function() {

  describe('getPoint()', function() {

    it('returns correct coordinate pairs', function() {

      expect(Bezier.getCoordinatesInBezier(0,0, 0,0, 0,0)).toEqual('0,0');
      expect(Bezier.getCoordinatesInBezier(1,1, 1,1, 1,1)).toEqual('2,2');
      expect(Bezier.getCoordinatesInBezier(2,2, 2,2, 2,2)).toEqual('4,4');
      expect(Bezier.getCoordinatesInBezier(0,0, 2,3, 4,5)).toEqual('-1.941,6.102');
    });
  });

  describe('normalize()', function() {

    it('converts numbers in the stream to fixed three decimals', function() {

      expect(Bezier.normalizePathString(1.0346548, ',', 3)).toEqual('1.035,3');
      expect(Bezier.normalizePathString(1.03468, ',', 3)).toEqual('1.035,3');
      expect(Bezier.normalizePathString(1.035, ',', 3)).toEqual('1.035,3');
    });

    it('rounds numbers in stream', function() {

      expect(Bezier.normalizePathString(1.0346548, ',', 3)).toEqual('1.035,3');
      expect(Bezier.normalizePathString(1.03418, ',', 3)).toEqual('1.034,3');
    });

    it('prepends a 0 if dot-only-notation is used in a float (e.g.: a = .345)', function() {

      expect(Bezier.normalizePathString(.0346548, ',', .3)).toEqual('0.035,0.3');
    });
  });
});