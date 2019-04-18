export default {
  up: queryInterface => queryInterface.bulkInsert('Location', [
    {
      name: 'Abuja',
      maleResidents: 500,
      femaleResidents: 800,
      totalResidents: 1300,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Lagos',
      maleResidents: 200,
      femaleResidents: 400,
      totalResidents: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Kaduna',
      maleResidents: 700,
      femaleResidents: 300,
      totalResidents: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'California',
      maleResidents: 1200,
      femaleResidents: 3000,
      totalResidents: 4200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Location', null, {}),
};
