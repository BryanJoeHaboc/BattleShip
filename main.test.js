const { ShipFactory } = require("./ShipFactory");

describe("Ship factory testing", () => {
  it("returns correct ship length", () => {
    const ship = ShipFactory(3);
    expect(ship.length).toEqual(3);
  });

  it("isSunk returns false by default", () => {
    const ship = ShipFactory(3);
    expect(ship.isSunk()).toEqual(false);
  });

  it("should return true when all body of the ship is hit", () => {
    const ship = ShipFactory(4);

    for (let i = 0; i < ship.length; i++) {
      ship.hit(i);
    }
    expect(ship.isSunk()).toEqual(true);
  });
});
