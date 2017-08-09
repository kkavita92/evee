'use strict';

var World = function(width, height) {
  this.width = width;
  this.height = height;
  this.grid = null
  this.createWorld();
};

World.prototype.createWorld = function() {
  var newWorld = new Array();
  for (var i = 0; i < this.height; i++ ) {
    newWorld[i] = new Array(this.width);
  }
  this.grid = newWorld;
};
