'use strict';

describe("DistanceCalculator", function() {

  var distanceCalculator;

  beforeEach( function() {
    distanceCalculator = new DistanceCalculator();
  });

  it("can calculate line distance", function() {
    expect(distanceCalculator.calculateLineDistance(3, 5)).toEqual(2);
  });

  it("can calculate total distance between two points", function() {
    var pointOne = [3,4];
    var pointTwo = [2,3];
    expect(distanceCalculator.calculateDistance(pointOne, pointTwo)).toEqual(2);
  });

});
