/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./Connection.css";

import { useForm } from "react-hook-form";

export default function Connection() {
  const [resStatus, setResStatus] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const express = import.meta.env.VITE_API_URL;
  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${express}/api/auth/login`, data)
        .then((response) => setResStatus(response.status));

      if (resStatus === 200) {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="connection-container">
      <h1 className="title-connection">Je me connecte</h1>
      <form
        className="form-connection"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="email-connection">
          <label>
            Email
            <input
              className="email-connection"
              type="email"
              placeholder="Adresse email"
              name="emailconnection"
              {...register("email", {
                required: "L'email est obligatoire",
                pattern: {
                  value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Le format de l'e-mail est incorrect.",
                },
              })}
            />
          </label>
          {errors.emailconnection && (
            <span> {errors.emailconnection.message}</span>
          )}
        </div>

        <div className="password-connection">
          <label>
            Mot de passe
            <input
              className="password-connection"
              type="password"
              placeholder="Mot de passe"
              name="passwordconnection"
              {...register("password", {
                required: "le mot de passe est obligatoire",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
                  message:
                    "Le mot de passe doit au moins contenir 1 majuscule, 1 caractère spécial et 1 chiffre",
                },
              })}
            />
          </label>
          {errors.passwordconnection && (
            <span> {errors.passwordconnection.message}</span>
          )}
        </div>

        <Link to="/dashboard/5" className="btn-connection" type="submit">
          Se connecter
        </Link>
      </form>
    </div>
  );
}
