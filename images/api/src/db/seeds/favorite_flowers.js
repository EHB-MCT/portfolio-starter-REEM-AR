exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('favorite_roses').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorite_roses').insert([{
          user_id: 1,
          rose_name: 'Red Rose',
          color: 'Red',
          scent: true
        },
        {
          user_id: 2,
          rose_name: 'Poppies',
          color: 'Red',
          scent: false
        },
        {
          user_id: 1,
          rose_name: 'Mahonia',
          color: 'Yellow',
          scent: true
        },
        {
          user_id: 1,
          rose_name: 'Sun flower',
          color: 'Yellow',
          scent: false
        },
        {
          user_id: 1,
          rose_name: 'Jasmine',
          color: 'White',
          scent: true
        },
        {
          user_id: 1,
          rose_name: 'Baby`s breath',
          color: 'White',
          scent: false
        },
        {
          user_id: 2,
          rose_name: 'Peony',
          color: 'Pink',
          scent: true
        },
        {
          user_id: 2,
          rose_name: 'Pink Solomio',
          color: 'Pink',
          scent: flase
        },
      ]);
    });
};