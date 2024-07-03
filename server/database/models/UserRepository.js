const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
   
    super({ table: "user" });
  }


  async create(user) {
    
    const [result] = await this.database.query(
      `insert into ${this.table} (name, password, email) values (?, ?, ?)`,
      [user.name, user.password, user.email]
    );

    return result.insertId;
  }


  async read(id) {

    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, password = ?, email = ?, WHERE id = ?`,
      [user.name, user.password, user.email, user.id]
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
