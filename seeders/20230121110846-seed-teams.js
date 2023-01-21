'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teams',[
      {
      team_name : 'Groupama FDJ',
      team_shirt : 'https://www.procyclingstats.com/images/shirts/bx/eb/groupama-fdj-2022.png',
      short_name : 'GRF',
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      team_name : 'Jumbo-Visma',
      team_shirt : 'https://www.procyclingstats.com/images/shirts/bx/eb/jumbo-visma-2022.png',
      short_name : 'JUV',
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      team_name : 'Trek-Segafredo',
      team_shirt : 'https://www.procyclingstats.com/images/shirts/bx/eb/trek-segafredo-2022.png',
      short_name : 'TRS',
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      team_name : 'BORA-hansgrohe',
      team_shirt : 'https://www.procyclingstats.com/images/shirts/bx/eb/bora-hansgrohe-2022.png',
      short_name : 'BOH',
      created_at: new Date(),
      updated_at: new Date(),
      },
      {
      team_name : 'EF Education-EasyPost',
      team_shirt : 'https://www.procyclingstats.com/images/shirts/bx/eb/ef-education-easypost-2022.png',
      short_name : 'EFE',
      created_at: new Date(),
      updated_at: new Date(),
      },
    ]

    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
