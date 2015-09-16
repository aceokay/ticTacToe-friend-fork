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

  it("marks a space to a player", function() {
    var testPlayer = new Player("tack");
    var testSpace = new Space(2, 2);
    testSpace.markBy(testPlayer);
    expect(testSpace.markBy).to.equal(testPlayer);
  });
});

describe("Board", function() {
  it("creates an empty playing board", function() {
    var testBoard = new Board(3, 3);
    expect(testBoard.x).to.equal(3);
    expect(testBoard.y).to.equal(3);
  });

  it("places a mark in the chosen space on the board", function() {
    var testBoard = new Board(3, 3);
    var testPlayer = new Player("tack");
    var testSpace = new Space(2, 2);
    testSpace.markBy(testPlayer);
    testBoard.mark(testSpace);
    expect(testBoard.marks).to.eql([testSpace]);
  });

  it("finds a space by coordinates", function() {
    var testBoard = new Board(3, 3);
    var testPlayer = new Player("tack");
    var testSpace = new Space(2, 2);
    testSpace.markBy(testPlayer);
    testBoard.mark(testSpace);
    expect(testBoard.find(1, 1)).to.equal(undefined);
    expect(testBoard.find(2, 2)).to.equal(testSpace);
  })

  it("returns player if they have 3 in a row on the board", function() {
    var testBoard = new Board(3, 3);
    var testPlayer = new Player("tack");
    var testSpace1 = new Space(3, 1);
    var testSpace2 = new Space(3, 2);
    var testSpace3 = new Space(3, 3);
    testSpace1.markBy(testPlayer);
    testSpace2.markBy(testPlayer);
    testSpace3.markBy(testPlayer);
    testBoard.mark(testSpace1);
    testBoard.mark(testSpace2);
    testBoard.mark(testSpace3);
    expect(testBoard.winner()).to.equal(testPlayer);
  })
});
