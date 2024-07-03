const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async browse() {
    const [rows] = await this.database.query(`SELECT name FROM ${this.table}`);

    return rows;
  }

  async read(id) {
    const [result] = await this.database.query(
      `SELECT name FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result[0];
  }

  async edit(name, id) {
    const [row] = await this.database.query(
      `UPDATE ${this.table} SET name = ? WHERE id = ?`,
      [name, id]
    );

    return row;
  }

  async add(name) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [name]
    );

    return result.insertId;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = CategoryRepository;