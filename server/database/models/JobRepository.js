/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class JobRepository extends AbstractRepository {
  constructor() {
    super({ table: "job" });
  }

  async ReadAll() {
    const [rows] = await this.database.query(
      `SELECT id, title, description, skill, contract, date, rqth, location, salary, status FROM ${this.table}`
    );
    return rows;
  }

  async readById(id) {
    const [result] = await this.database.query(
      `SELECT id, title, description, skill, contract, date, rqth, location, salary, status, company_id FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result;
  }

  async edit(job) {
    const {
      id,
      title,
      description,
      skill,
      contract,
      date,
      rqth,
      location,
      salary,
      status,
    } = job;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, description = ?, skill = ?, contract = ?, date = ?, rqth = ?, location = ? , salary = ?, status = ? WHERE id = ?`,
      [
        id,
        title,
        description,
        skill,
        contract,
        date,
        rqth,
        location,
        salary,
        status,
      ]
    );
    return result.affectedRows;
  }

  async create(
    title,
    description,
    skill,
    contract,
    date,
    rqth,
    location,
    salary,
    status,
    category_id,
    company_id
  ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, description, skill, contract, date, rqth, location, salary, status, category_id, company_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description,
        skill,
        contract,
        date,
        rqth,
        location,
        salary,
        status,
        category_id,
        company_id,
      ]
    );
    return result.insertId;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id= ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = JobRepository;
