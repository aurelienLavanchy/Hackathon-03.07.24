const AbstractRepository = require("./AbstractRepository");

class CompanyRepository extends AbstractRepository {
  constructor() {
    super({ table: "company" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, name,  description, detail, date,  FROM ${this.table}`
    );

    return rows;
  }

  async read(id) {
    const [row] = await this.database.query(
      `SELECT id, name, description, detail, date, FROM ${this.table} where id = ?`,
      [id]
    );

    return row[0];
  }

  // Edit

  async edit(company) {
    const { name, description, detail, location, sector } = company;

    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name=?, description=?, detail=?, location=?, sector=? WHERE id=?`,
      [name, description, detail, location, sector]
    );

    return result.affectedRows;
  }

  // Add (create)

  async add(company) {
    const { name, description, detail, date, location, sector } = company;

    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, url, image, description, date, is_premium, is_free, category_id) values(?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, description, detail, date, location, sector]
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
