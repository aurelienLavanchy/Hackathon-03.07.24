/* eslint-disable react/jsx-props-no-spreading */
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Sign() {
  const [resStatus, setResStatus] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const express = import.meta.env.VITE_API_URL;
  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${express}/api/user/register`, data)
        .then(
          (response) => console.info(response) && setResStatus(response.status)
        );

      if (resStatus === 201) {
        navigate(`/login`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign-container">
      <h1 className="title-connection">Je créé un compte</h1>
      <form
        className="form-sign"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="name-signup">
          <label htmlFor="nom">
            Nom
            <input
              type="name"
              name="namesign"
              className="nom-signup"
              {...register("name", {
                required: "obligatoire",
                minLength: {
                  value: 2,
                  message: "Il vous faut minimum 2 caractères",
                },
              })}
            />
          </label>
          {errors.namesign && <span> {errors.namesign.message} </span>}
        </div>
        <div className="email-signup">
          <label htmlFor="email">
            {" "}
            Email
            <input
              className="email-sign"
              type="email"
              placeholder="Adresse e-mail"
              name="emailsign"
              {...register("email", {
                required: "L'e-mail est obligatoire",
                pattern: {
                  value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Le format de votre e-mail est incorrect",
                },
              })}
            />
          </label>
          {errors.emailsign && <span> {errors.emailsign.message}</span>}
        </div>
        <div className="password-signup">
          <label htmlFor="password">
            {" "}
            Mot de passe
            <input
              className="password-signup"
              type="password"
              placeholder="Mot de passe"
              name="passwordsign"
              {...register("password", {
                required: "Le mot de passe est obligatoire",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 caractère spécial et 1 chiffre",
                },
              })}
            />
          </label>
          {errors.passwordsign && <span> {errors.passwordsign.message}</span>}
        </div>{" "}
        <div className="password-signup">
          <label htmlFor="confirm password">
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
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
                  message:
                    "Le mot de passe doit contenir au moins 8 caractère dont 1 majuscule, 1 caractère spécial et 1 chiffre",
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
