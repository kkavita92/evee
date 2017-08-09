'use strict';

describe("World", function() {

  var world;

  beforeEach(function() {
    world = new World(20, 20);
  });

  it("can create a world and assign it to grid", function() {
    world.createWorld();
    expect(world.grid).toBeDefined();
  });

  it("world grid has same number of rows as height", function() {
    world.createWorld();
    expect(world.grid.length).toEqual(world.height);
  });

  it("world grid has same number of columns as width", function(){
    world.createWorld(); // making test more thorough?
    expect(world.grid[0].length).toEqual(world.width);
  });

  describe("Population randomiser", function () {

    it("returns either 1 or 0", function() {
      world.createWorld();
      var randomiserReturnsZero = (world.populationRandomiser() == 0);
      var randomiserReturnsOne = (world.populationRandomiser() == 1);
      expect(randomiserReturnsZero || randomiserReturnsOne).toBe(true);
    });

  });

});
