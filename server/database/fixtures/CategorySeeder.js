const AbstractSeeder = require("./AbstractSeeder");

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "category", truncate: true });
  }

  run() {
    for (let i = 0; i < 8; i += 1) {
      const fakeCategory = {
        name: this.faker.word.noun(),
      };

      this.insert(fakeCategory);
    }
  }
}

module.exports = CategorySeeder;
