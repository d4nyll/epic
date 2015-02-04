if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("Meteor version defined", function(){
        chai.assert(Meteor.release);
      });
    });
  });
}
