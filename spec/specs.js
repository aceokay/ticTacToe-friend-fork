describe("Player", function() {
  it("returns the player's symbol", function() {
    var testPlayer = new Player("tack");
    expect(testPlayer.mark).to.equal("tack");
  });
});

describe("Space", function() {
  it("returns the coordinates of the space chosen", function() {
    var testSpace = new Space(2, 2);
    expect(testSpace.x).to.equal(2);
    expect(testSpace.y).to.equal(2);
  });
});
