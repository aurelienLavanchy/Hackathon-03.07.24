const AbstractSeeder = require("./AbstractSeeder");

class JobSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "job", truncate: true });
  }

  run() {
    for (let i = 0; i < 40; i += 1) {
      const fakeJob = {
        title: this.faker.person.jobTitle(),
        description: this.faker.lorem.paragraph(),
        skill: this.faker.lorem.words(),
        contract: this.faker.lorem.word(),
        date: new Date(),
        rqth: true,
        location: this.faker.location.city(),
        salary: this.faker.number.bigInt({ min: 20000n, max: 80000n }),
        status: "active",
        category_id: this.faker.number.int({ min: 1, max: 8 }),
        company_id: this.faker.number.int({ min: 1, max: 10 }),
      };

      this.insert(fakeJob);
    }
  }
}

module.exports = JobSeeder;
