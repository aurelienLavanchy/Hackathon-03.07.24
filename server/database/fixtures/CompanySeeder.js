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
        location: this.faker.location.city(),
        sector: this.faker.lorem.word()
      };
      this.insert(fakeCompany);
    }
  }
}

module.exports = CompanySeeder;
