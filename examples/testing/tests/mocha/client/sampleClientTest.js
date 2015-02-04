if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Package loading", function(){
      it("Epic Object exported", function(){
        chai.assert.equal(Epic.checkExported(),'Epic object exported');
      });
    });
  });
}