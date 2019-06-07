exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, recipe_id: 1, recipe_name: 'pizza', ingredient_id: 1, ingredient_name: 'cheeze and bread', ingredient_quantity: 7},
        {id: 2, recipe_id: 2, recipe_name: 'tacos', ingredient_id: 2, ingredient_name: 'meat and cheese', ingredient_quantity: 10},
        {id: 3, recipe_id: 3, recipe_name: 'cake', ingredient_id: 3, ingredient_name: 'flour sugar frosting', ingredient_quantity: 8},
      ]);
    });
};
