exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cheeze and bread', quantity: 7},
        {id: 2, name: 'meat cheese', quantity: 10},
        {id: 3, name: 'flour sugar frosting', quantity: 8 }
      ]);
    });
};
