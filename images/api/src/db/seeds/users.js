exports.seed = function (knex) {

    return knex('users').del() // to delete ALL existing entries

        .then(function () {
            return knex('users').insert([{
                    username: 'Leen',
                    email: 'leen@email.com',
                    password: 'password123'
                },
                {
                    username: 'Amber',
                    email: 'amber@email.com',
                    password: 'password123'
                },
            ]);
        });
};