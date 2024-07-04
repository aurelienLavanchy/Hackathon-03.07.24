const AbstractSeeder = require("./AbstractSeeder");

class JobSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "job", truncate: true });
  }

  run() {
      const fakeJob =[
        {
          title: "Ingénieur Logiciel",
          description: "Développer et maintenir des applications web.",
          skill: "JavaScript, React, Node.js",
          contract: "CDI",
          date: new Date(),
          rqth: false,
          location: "Paris",
          salary: 70000,
          status: "active",
          category_id: 1,
          company_id: 1
        },
        {
          title: "Analyste de Données",
          description: "Analyser et interpreter des ensembles de données complexes.",
          skill: "Python, SQL, Excel",
          contract: "CDI",
          date: new Date(),
          rqth: false,
          location: "Marseille",
          salary: 60000,
          status: "active",
          category_id: 2,
          company_id: 2
        },
        {
          title: "Chef de Projet",
          description: "Gérer des projets et coordonner les équipes.",
          skill: "Agile, Scrum, Leadership",
          contract: "Indépendant",
          date: new Date(),
          rqth: false,
          location: "Lyon",
          salary: 80000,
          status: "active",
          category_id: 3,
          company_id: 3
        },
        {
          title: "Développeur Front-End",
          description: "Développer et maintenir l'interface utilisateur des applications web.",
          skill: "JavaScript, React, CSS",
          contract: "CDI",
          date: new Date(),
          rqth: false,
          location: "Toulouse",
          salary: 75000,
          status: "active",
          category_id: 4,
          company_id: 4
        },
        {
          title: "Ingénieur DevOps",
          description: "Automatiser et optimiser les processus de déploiement et d'intégration continue.",
          skill: "Docker, Kubernetes, CI/CD",
          contract: "CDD",
          date: new Date(),
          rqth: false,
          location: "Nice",
          salary: 50000,
          status: "active",
          category_id: 5,
          company_id: 5
        },
        {
          title: "Data Scientist",
          description: "Analyser des données et construire des modèles prédictifs.",
          skill: "Python, Machine Learning, SQL",
          contract: "CDI",
          date: new Date(),
          rqth: false,
          location: "Nantes",
          salary: 70000,
          status: "active",
          category_id: 6,
          company_id: 6
        },
        {
          title: "Chef de Projet IT",
          description: "Gérer les projets informatiques de bout en bout.",
          skill: "Gestion de projet, Agile, Scrum",
          contract: "CDI",
          date: new Date(),
          rqth: false,
          location: "Strasbourg",
          salary: 55000,
          status: "active",
          category_id: 7,
          company_id: 7
        },
        {
          title: "Architecte Logiciel",
          description: "Concevoir l'architecture des systèmes logiciels.",
          skill: "Architecture logicielle, Microservices, Cloud",
          contract: "CDD",
          date: new Date(),
          rqth: false,
          location: "Montpellier",
          salary: 40000,
          status: "active",
          category_id: 8,
          company_id: 8
        },
      ]
      fakeJob.forEach((job) => 
        this.insert((job))
      )
    }}
  
  
  module.exports = JobSeeder;
