const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const jobs = await tables.job.ReadAll();

    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await tables.job.readById(id);

    if (job == null) {
      res.sendStatus(404);
    } else {
      res.json(job);
    }
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      skill,
      contract,
      date,
      rqth,
      location,
      salary,
      status,
    } = req.body;
    await tables.job.edit(
      title,
      description,
      skill,
      contract,
      date,
      rqth,
      location,
      salary,
      status,
      id
    );

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const {
      title,
      description,
      skill,
      contract,
      date,
      rqth,
      location,
      salary,
      status,
    } = req.body;
    const insertId = await tables.job.create(
      title,
      description,
      skill,
      contract,
      date,
      rqth,
      location,
      salary,
      status
    );

    res.json({ insertId });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    await tables.job.destroy(id);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read, edit, add, destroy };
