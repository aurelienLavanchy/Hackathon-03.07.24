const AbstractSeeder = require("./AbstractSeeder");

class JobSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "job", truncate: true });
  }

  run() {
      const fakeJob =[
        {
          title: "Ingenieur Logiciel",
          description: "Developper et maintenir des applications web.",
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
          title: "Analyste de Donnees",
          description: "Analyser et interpreter des ensembles de donnees complexes.",
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
          description: "Gerer des projets et coordonner les equipes.",
          skill: "Agile, Scrum, Leadership",
          contract: "Independant",
          date: new Date(),
          rqth: false,
          location: "Lyon",
          salary: 80000,
          status: "active",
          category_id: 3,
          company_id: 3
        },
        {
          title: "Analyste Financier",
          description: "Preparer des rapports financiers et des previsions.",
          skill: "Modelisation financiere, Excel, SQL",
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
          title: "Scientifique de l'Environnement",
          description: "Mener des recherches sur les questions environnementales.",
          skill: "Analyse de donnees, Travail de terrain, SIG",
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
          title: "Ingenieur Mecanique",
          description: "Concevoir et developper des systemes mécaniques.",
          skill: "CAO, SolidWorks, Resolution de problemes",
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
          title: "Chef",
          description: "Preparer et cuisiner des repas de haute qualite.",
          skill: "Competences culinaires, Creativite, Gestion du temps",
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
          title: "Vendeur",
          description: "Assister les clients et gérer les ventes.",
          skill: "Service client, Vente, Communication",
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
