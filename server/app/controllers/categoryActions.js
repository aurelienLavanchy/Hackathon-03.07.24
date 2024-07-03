const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.browse();

    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await tables.category.read(id);

    if (category == null) {
      res.sendStatus(404);
    } else {
      res.json(category);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await tables.category.edit(name, id);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { name } = req.body;
    const insertId = await tables.category.add(name);

    res.sendStatus(201).json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.category.destroy(id);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, edit, add, destroy };
