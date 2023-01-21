'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cyclists',[      
      {
        first_name: 'Arnaud',
        last_name: 'DÉMARE',
        team_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Paul',
        last_name: 'PENHOËT',
        team_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Alberto',
        last_name: 'BETTIOL',
        team_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Odd Christian',
        last_name: 'EIKING',
        team_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Tiesj',
        last_name: 'BENOOT',
        team_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Primož',
        last_name: 'ROGIČ',
        team_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Aleksandr',
        last_name: 'VLASOV',
        team_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Thibault',
        last_name: 'PINOT',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Amanuel',
        last_name: 'GHEBREIGZABHIER',
        team_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Jacopo',
        last_name: 'MOSCA',
        team_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cyclists', null, {});
  }
};
