const { z } = require("zod");

const userRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,32}$/;

const userSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Le prénom de votre format n’est pas valide",
    })
    .min(2, {
      message: "votre prénom doit contenir au minimum 2 caractères",
    })
    .max(20, {
      message: "votre prénom doit contenir au minimum 20 caractères",
    }),

  password: z.string().regex(userRegex, {
    message:
      "Votre mot de passe doit contenir, un chiffre, une lettre majuscule et un caractère spécial",
  }),
  email: z.string().email({
    invalid_type_error: "Votre adresse mail n’est pas valide",
  }),
});

const validateUser = (req, res, next) => {
  const { name, password, email } = req.body;
  delete req.body.passwordsign;
  delete req.body.confirmpassword;

  const validate = userSchema.safeParse({
    name,
    password,
    email,
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

module.exports = validateUser;
