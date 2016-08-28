describe('Favorite Food Filter', function () {
  var $controller, FavoriteFood;

  beforeEach(module('app'));

  var persons = [
   { 
     name: "Abby",
     favoriteFood: "Chicken"
   },
   {
    name: "Lansha",
    favoriteFood: "Couscous"
   }
  ]
  

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter by given food', function() {
    FavoriteFood = $filter('favoriteFood')
    expect(persons.length).toEqual(2);
    expect(FavoriteFood(persons, "Fondue").length).toEqual(0);
    expect(FavoriteFood(persons, "Chicken").length).toEqual(1);
    expect(FavoriteFood(persons, "Couscous").length).toEqual(1);
  });
});
