function ShipFactory(length) {
  const shipBody = [];
  return {
    length,
    hit(position) {
      shipBody[position] = "hit";
    },
    isSunk() {
      return shipBody.length === length ? true : false;
    },
  };
}

module.exports = {
  ShipFactory,
};
