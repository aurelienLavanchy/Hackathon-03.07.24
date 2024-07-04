const tables = require("../../database/tables");

// read all
const browse = async (req, res, next) => {
  try {
    const companies = await tables.company.readAll();

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
    const { id } = req.params;
    const { name, description, detail, location, sector } = req.body;
    const company = await tables.company.update(
      name,
      description,
      detail,
      location,
      sector,
      id
    );
    res.sendStatus(204).json({ updatedCompanyInfo: company });
  } catch (err) {
    next(err);
  }
};

// Add (create)

const add = async (req, res, next) => {
  try {
    const { name, description, detail, location, sector } = req.body;

    const insertId = await tables.company.create(
      name,
      description,
      detail,
      location,
      sector
    );
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
