describe('removeAllVowels Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should remove all vowels from passed in string', function () {
    removeAllVowels = $filter('removeAllVowels');
    expect(removeAllVowels('abcdefg')).toEqual('bcdfg');
    expect(removeAllVowels('The rain in Spain falls mainly on the plains')).toEqual('Th rn n Spn flls mnly n th plns');
  });

});
