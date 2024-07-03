const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
   
    super({ table: "user" });
  }


  async create(name, email, password) {
    
    const [result] = await this.database.query(
      `insert into ${this.table} (name, password, email) values (?, ?, ?)`,
      [name, email, password]
    );

    return result.insertId;
  }


  async read(id) {
    const [rows] = await this.database.query(
      `select name, email, password from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select name, email, password from ${this.table}`);

    return rows;
  }

  async update(user) {
    const {name, email, password} = user ;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, password = ?, email = ?, WHERE id = ?`,
      [name, email, password]
    );

    return result.affectedRows > 0;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }
}


module.exports = UserRepository;
