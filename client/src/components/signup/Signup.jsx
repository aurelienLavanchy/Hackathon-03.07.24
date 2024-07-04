/* eslint-disable react/jsx-props-no-spreading */
import "./Signup.css";

import { useForm } from "react-hook-form";

export default function Sign() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const datasign = data;
    delete datasign.confirmpassword;
  };

  return (
    <div className="sign-container">
      <h1 className="title-connection">Je créé un compte</h1>
      <form
        className="form-sign"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="email-signup">
          <label>
            {" "}
            Email
            <input
              className="email-sign"
              type="email"
              placeholder="Adresse e-mail"
              name="emailsign"
              {...register("emailsign", {
                required: "L'e-mail est obligatoire",
                pattern: {
                  value: /^[\w-.]+@([\w-]+.)+[\w-]{2,7}$/,
                  message: "Le format de votre e-mail est incorrect",
                },
              })}
            />
          </label>
          {errors.emailsign && <span> {errors.emailsign.message}</span>}
        </div>
        <div className="password-signup">
          <label>
            {" "}
            Mot de passe
            <input
              className="password-signup"
              type="password"
              placeholder="Mot de passe"
              name="passwordsign"
              {...register("passwordsign", {
                required: "Le mot de passe est obligatoire",
                pattern: {
                  value:
                    /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&-]).{8,}$/,
                  message:
                    "Le mot de passe doit au moins contenir 1 majuscule, 1 caractère spécial et 1 chiffre",
                },
              })}
            />
          </label>
          {errors.passwordsign && <span> {errors.passwordsign.message}</span>}
        </div>{" "}
        <div className="password-signup">
          <label>
            {" "}
            Confirmez votre mot de passe
            <input
              className="confirm-password"
              type="password"
              placeholder="Confirmer le mot de passe"
              name="confirmpassword"
              {...register("confirmpassword", {
                required: "Le mot de passe est obligatoire",
                pattern: {
                  value:
                    /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Le mot de passe doit au moins contenir 1 majuscule, 1 caractère spécial et 1 chiffre",
                },
                validate: (value) =>
                  value === watch("passwordsign") ||
                  "Les mots de passes ne correspondent pas.",
              })}
            />{" "}
          </label>
          {errors.confirmpassword && (
            <span>{errors.confirmpassword.message}</span>
          )}
        </div>
        <button className="btn-sign" type="submit">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
