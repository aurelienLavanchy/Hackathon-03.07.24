const { z } = require("zod");

const JobSchema = z.object({
  title: z
    .string({
      invalid_type_error: "Saisissez un titre valide",
    })
    .min(2, {
      message: "Votre titre doit contenir au minimum 2 caractères",
    }),

  description: z.string({
    invalid_type_error: "Saisissez une description valide",
  }),

  skill: z
    .string({
      invalid_type_error: "Saisissez une compétence valide",
    })
    .min(2, {
      message: "Votre compétence doit contenir au minimum 2 caractères",
    }),

  contract: z
    .string({
      invalid_type_error: "Choisissez un type de contrat valide",
    })
    .min(2, {
      message: "Votre contrat doit contenir au minimum 2 caractères",
    }),

  rqth: z.boolean({
    invalid_type_error: "Choisissez un type de RQTH valide",
  }),

  location: z
    .string({
      invalid_type_error: "Choisissez un lieu valide",
    })
    .min(2, {
      message: "Votre lieu doit contenir au minimum 2 caractères",
    }),

  salary: z
    .number({
      invalid_type_error: "Entrez un salaire valide",
    })
    .int()
    .min(10000, {
      message: "Le salaire doit être d'au moins 10,000",
    })
    .max(100000, {
      message: "Le salaire doit être au maximum de 100,000",
    }),

  status: z.string({
    invalid_type_error: "Entrez un statut valide",
  }),

  date: z
    .string()
    .optional()
    .default(() => new Date().toISOString()),
});

const validateJobSchema = (req, res, next) => {
  const {
    title,
    description,
    skill,
    contract,
    rqth,
    location,
    salary,
    status,
    date,
  } = req.body;

  const validate = JobSchema.parse({
    title,
    description,
    skill,
    contract,
    rqth,
    location,
    salary,
    status,
    date,
  });

  if (!validate.success) {
    const errors = validate.error.issues.reduce((acc, issue) => {
      acc[issue.path[0]] = issue.message;
      return acc;
    }, {});

    return res.status(403).json(errors);
  }
  return next();
};

module.exports = validateJobSchema;
