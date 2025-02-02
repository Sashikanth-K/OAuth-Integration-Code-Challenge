'use strict';
module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Credentials', [
      {
        appName: 'TestApp',
        accessToken: 'test_access_token_123',
        refreshToken: 'test_refresh_token_456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {}),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Credentials', null, {});
  }
};