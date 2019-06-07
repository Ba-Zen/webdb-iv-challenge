
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_name: 'large pepporoni pizza'},
        {id: 2, dish_name: 'himalyan tacos'},
        {id: 3, dish_name: 'pound cake' }
      ]);
    });
};
