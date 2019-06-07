
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'pizza', dish_id: 1, instructions: 'write'},
        {id: 2, recipe_name: 'tacos', dish_id: 2, instructions: 'write'},
        {id: 3, recipe_name: 'cake' , dish_id: 3, instructions: 'write'}
      ]);
    });
};
