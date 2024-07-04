const AbstractSeeder = require("./AbstractSeeder");

class CompanySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "company", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeCompany = {
        name: this.faker.company.name(),
        description: this.faker.lorem.sentence(),
        detail: this.faker.lorem.paragraph(),
        location: this.faker.helpers.arrayElement([
          "Paris",
          "Marseille",
          "Lyon",
          "Toulouse",
          "Nice",
          "Nantes",
          "Strasbourg",
          "Montpellier",
          "Bordeaux",
          "Lille",
        ]),
        sector: this.faker.helpers.arrayElement([
          "Commerce",
          "Numérique",
          "Tourisme",
          "Services marchands",
          "Industrie manufacturière",
          "Professions libérales",
          "Artisanat",
        ]),
      };
      this.insert(fakeCompany);
    }
  }
}

module.exports = CompanySeeder;
