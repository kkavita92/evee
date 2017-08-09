'use strict';

var DistanceCalculator = function() {};

DistanceCalculator.prototype.calculateDistance = function(point_one, point_two) {
  var xDiff = this.calculateLineDistance(point_one[0], point_two[0]);
  var yDiff = this.calculateLineDistance(point_one[1], point_two[1]);
  return xDiff + yDiff;
};

DistanceCalculator.prototype.calculateLineDistance = function(a, b) {
  return Math.abs(a - b);
};
