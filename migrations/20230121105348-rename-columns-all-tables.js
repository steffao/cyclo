'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn("Cyclists", "firstName", "first_name");
    await queryInterface.renameColumn("Cyclists", "lastName", "last_name");
    await queryInterface.renameColumn("Cyclists", "createdAt", "created_at");
    await queryInterface.renameColumn("Cyclists", "updatedAt", "updated_at");

    await queryInterface.renameColumn("Teams", "name", "team_name");
    await queryInterface.renameColumn("Teams", "createdAt", "created_at");
    await queryInterface.renameColumn("Teams", "updatedAt", "updated_at");
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn("Cyclists", "first_name", "firstName");
    await queryInterface.renameColumn("Cyclists", "last_name", "lastName");
    await queryInterface.renameColumn("Cyclists", "created_at", "createdAt");
    await queryInterface.renameColumn("Cyclists", "updated_at", "updatedAt");

    await queryInterface.renameColumn("Teams", "team_name", "name");
    await queryInterface.renameColumn("Teams", "created_at", "createdAt");
    await queryInterface.renameColumn("Teams", "updated_at", "updatedAt");
  }
};
