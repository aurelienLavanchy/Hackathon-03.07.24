const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository {
  constructor() {
    super({ table: "company" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, name, description, detail, location, sector FROM ${this.table}`
    );

    return rows;
  }

  async read(id) {
    const [row] = await this.database.query(
      `SELECT id, name, description, detail, location, sector, image FROM ${this.table} where id = ?`,
      [id]
    );

    return row[0];
  }

  // Edit

  async update(company) {
    const { name, description, detail, location, sector, id } = company;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, detail = ?, location = ?, sector = ? WHERE id = ?`,
      [name, description, detail, location, sector, id]
    );

    return result.affectedRows > 0;
  }

  // Add (create)
  async create(name, description, detail, location, sector) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, detail, location, sector) values (?, ?, ?, ?, ?)`,
      [name, description, detail, location, sector]
    );

    return result.insertId;
  }

  // Destroy (delete)
  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = CompanyRepository;
