describe("Player", function() {
  it("returns the player's symbol", function() {
    var testPlayer = new Player("tack");
    expect(testPlayer.mark).to.equal("tack");
  })
})
