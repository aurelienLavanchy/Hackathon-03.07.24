const tables = require("../../database/tables");

// read all
const browse = async (req, res, next) => {
  try {
    const companies = await tables.companies.readAll();

    res.json(companies);
  } catch (err) {
    next(err);
  }
};

// read
const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await tables.company.read(id);

    if (company == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(company);
    }
  } catch (error) {
    next(error);
  }
};

// edit
const edit = async (req, res, next) => {
  try {
    const { id, name, description, detail, location, sector, date } = req.body;

    const company = await tables.company.edit(
      id,
      name,
      description,
      detail,
      location,
      sector,
      date
    );
    res.sendStatus(204).json({ updated: company });
  } catch (error) {
    next(error);
  }
};

// Add (create)

const add = async (req, res, next) => {
  const company = req.body;

  try {
    const insertId = await tables.company.create(company);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// Delete (destroy)

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCompany = await tables.company.destroy(id);

    res.sendStatus(204).json({ removed: deletedCompany });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
