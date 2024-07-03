const AbstractSeeder = require("./AbstractSeeder");

class JobSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "job", truncate: true });
  }
 

  

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeJob = {
        title: this.faker.person.jobTitle(),
        description: this.faker.lorem.paragraph(),
        skill: this.faker.lorem.words(),
        contract: this.faker.lorem.word(), 
        date: new Date(),
        rqth: true,
        location: this.faker.location.city(),
        salary: this.faker.number.bigInt({ min: 20000n, max: 80000n }),
        status: "active"
      };

      this.insert(fakeJob);
    }
  }
}

module.exports = JobSeeder;