
describe('prettyTime filter', function() {
  beforeEach(module('starter.filters'));

  it('should actually modify the input', function() {
    inject(function(prettyTimeFilter){
      expect(prettyTimeFilter(300)).to.equal('300s');
    });
  });
});