const AbstractSeeder = require("./AbstractSeeder");

class CompanySeeder extends AbstractSeeder {
  constructor() {
    super({ table: "company", truncate: true });
  }

  run() {
    for (let i = 0; i < 9; i += 1) {
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
        image: this.faker.helpers.arrayElement([
          "https://unsplash.com/photos/XJXWbfSo2f0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHx8fDE3MjAwODY5MjV8MA&force=true&w=640",
          "https://unsplash.com/photos/OqtafYT5kTw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8dGVjaG5vbG9neXxlbnwwfHx8fDE3MjAwODY5MjV8MA&force=true&w=640",
          "https://unsplash.com/photos/FO7JIlwjOtU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHx8fDE3MjAwODY5MjV8MA&force=true&w=640",
          "https://unsplash.com/photos/npxXWgQ33ZQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIwMTIxMzEzfA&force=true&w=640",
          "https://unsplash.com/photos/Skf7HxARcoc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNzIwMDg2OTI1fDA&force=true&w=640",
          "https://unsplash.com/photos/ZPeXrWxOjRQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNzIwMDg2OTI1fDA&force=true&w=640",
          "https://unsplash.com/photos/SYTO3xs06fU/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIwMTIxNTM4fA&force=true&w=640",
          "https://unsplash.com/photos/m_HRfLhgABo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNzIwMDg2OTI1fDA&force=true&w=640",
          "https://unsplash.com/photos/KE0nC8-58MQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjZ8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNzIwMDgxOTQ1fDA&force=true&w=640",
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
