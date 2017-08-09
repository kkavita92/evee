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
    var point_one = [3,4];
    var point_two = [2,3];
    expect(distanceCalculator.calculateDistance(point_one, point_two)).toEqual(2);
  });

});
