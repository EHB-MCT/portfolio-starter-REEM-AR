exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favorite_colors').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_colors').insert([{
          user_id: 1,
          color: 'Red'
        },
        {
          user_id: 2,
          color: 'Yellow'
        },
        {
          user_id: 3,
          color: 'White'
        },
        {
          user_id: 4,
          color: 'Pink'
        },
      ]);
    });
};