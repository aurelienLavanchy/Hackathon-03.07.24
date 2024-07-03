const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const user = await tables.user.readAll();
    res.json(user);
  } catch (err) {
    next(err);
  }
};


const read = async (req, res, next) => {
  try {
    const {id} = req.params;
    const user = await tables.user.read(id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {

    try {
      const {id} = req.params;
      const {name, email, password} = req.body;
      const user = await tables.user.update(
        name,
        email,
        password,
        id
      );
      res.sendStatus(204).json({updatedUserInfo:user});
    } catch (err) {
      next(err);
    }
  };

const add = async (req, res, next) => {
  try {
    const {name, email, password} = req.body;

    const insertId = await tables.user.create(
      name,
      email,
      password
    );
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await tables.user.delete(id);
  
      res.sendStatus(204).json({removed : deleteUser});
    } catch (err) {
      next(err);
    }
  };


module.exports = {
  browse,
  read,
  edit,
  add,
  destroy
};