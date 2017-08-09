'use strict';

describe("World", function() {

  var world;

  beforeEach(function() {
    world = new World(20, 20);
    world.createWorld();
  });

  it("can create a world and assign it to grid", function() {
    expect(world.grid).toBeDefined();
  });

  it("world grid has same number of rows as height", function() {
    expect(world.grid.length).toEqual(world.height);
  });

  it("world grid has same number of columns as width", function(){
    expect(world.grid[0].length).toEqual(world.width);
    // make test more thorough?
  });

});
