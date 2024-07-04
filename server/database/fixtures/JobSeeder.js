const AbstractSeeder = require("./AbstractSeeder");

class JobSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "job", truncate: true });
  }

  run() {
    for (let i = 0; i < 40; i += 1) {
      const fakeJob = [
        {
          title: "Software Engineer",
          description: "Develop and maintain web applications.",
          skill: "JavaScript, React, Node.js",
          contract: "Full-time",
          date: new Date(),
          rqth: false,
          location: "San Francisco",
          salary: 70000,
          status: "active",
          category_id: 1,
          company_id: 1,
        },
        {
          title: "Data Analyst",
          description: "Analyze and interpret complex data sets.",
          skill: "Python, SQL, Excel",
          contract: "Full-time",
          date: new Date(),
          rqth: false,
          location: "New York",
          salary: 60000,
          status: "active",
          category_id: 2,
          company_id: 2,
        },
        {
          title: "Project Manager",
          description: "Manage projects and coordinate teams.",
          skill: "Agile, Scrum, Leadership",
          contract: "Contract",
          date: new Date(),
          rqth: false,
          location: "Chicago",
          salary: 80000,
          status: "active",
          category_id: 3,
          company_id: 3,
        },
        {
          title: "Financial Analyst",
          description: "Prepare financial reports and forecasts.",
          skill: "Financial modeling, Excel, SQL",
          contract: "Full-time",
          date: new Date(),
          rqth: false,
          location: "Boston",
          salary: 75000,
          status: "active",
          category_id: 4,
          company_id: 4,
        },
        {
          title: "Environmental Scientist",
          description: "Conduct research on environmental issues.",
          skill: "Data analysis, Fieldwork, GIS",
          contract: "Part-time",
          date: new Date(),
          rqth: false,
          location: "Seattle",
          salary: 50000,
          status: "active",
          category_id: 5,
          company_id: 5,
        },
        {
          title: "Mechanical Engineer",
          description: "Design and develop mechanical systems.",
          skill: "CAD, SolidWorks, Problem-solving",
          contract: "Full-time",
          date: new Date(),
          rqth: false,
          location: "Detroit",
          salary: 70000,
          status: "active",
          category_id: 6,
          company_id: 6,
        },
        {
          title: "Chef",
          description: "Prepare and cook high-quality meals.",
          skill: "Culinary skills, Creativity, Time management",
          contract: "Full-time",
          date: new Date(),
          rqth: false,
          location: "Los Angeles",
          salary: 55000,
          status: "active",
          category_id: 7,
          company_id: 7,
        },
        {
          title: "Sales Associate",
          description: "Assist customers and manage sales.",
          skill: "Customer service, Sales, Communication",
          contract: "Part-time",
          date: new Date(),
          rqth: false,
          location: "Houston",
          salary: 40000,
          status: "active",
          category_id: 8,
          company_id: 8,
        },
        {
          title: "Travel Agent",
          description: "Plan and book travel arrangements.",
          skill: "Customer service, Travel planning, Communication",
          contract: "Full-time",
          date: new Date(),
          rqth: false,
          location: "Miami",
          salary: 45000,
          status: "active",
          category_id: 9,
          company_id: 9,
        },
        {
          title: "Construction Manager",
          description: "Oversee construction projects.",
          skill: "Project management, Construction, Leadership",
          contract: "Contract",
          date: new Date(),
          rqth: false,
          location: "Denver",
          salary: 85000,
          status: "active",
          category_id: 10,
          company_id: 10,
        },
      ];

      this.insert(fakeJob);
    }
  }
}

module.exports = JobSeeder;
