'use strict';

var DistanceCalculator = function() {};

DistanceCalculator.prototype.calculateDistance = function( pointOne, pointTwo ) {
  var xDiff = this.calculateLineDistance( pointOne[0], pointTwo[0] );
  var yDiff = this.calculateLineDistance( pointOne[1], pointTwo[1] );
  return xDiff + yDiff;
};

DistanceCalculator.prototype.calculateLineDistance = function( a, b ) {
  return Math.abs( a - b );
};
