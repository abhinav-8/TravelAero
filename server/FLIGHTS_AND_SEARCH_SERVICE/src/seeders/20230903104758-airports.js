'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
        {
          cityId:18,
          name:'Kempegowda International Airport',
          address:'KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cityId:19,
          name:'Chaudhary Charan Singh International Airport',
          address:'Amausi, Lucknow, Uttar Pradesh 226009',
          createdAt: new Date(),
          updatedAt: new Date(),
        } ,
        {
          cityId:21,
          name:'Chhatrapati Shivaji Maharaj International Airport',
          address:'Sahar, Andheri East. Mumbai, Maharashtra 400029',
          createdAt: new Date(),
          updatedAt: new Date(),
        } ,
        {
          cityId:18,
          name:'Hindustan Aeronautics Limited Airport',
          address:'XM2F+J9H, HAL Old Airport Rd, HAL Airport Area, HAL, Bengaluru, Karnataka 560017',
          createdAt: new Date(),
          updatedAt: new Date(),
        } ,
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
