/* eslint-disable react/jsx-props-no-spreading */

import { useForm } from "react-hook-form";
import "./AddOfferPage.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jobImage from "../../assets/images/logo.png";

export default function AddOfferPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    const data = { ...formData };

    try {
      await axios.post("http://localhost:3310/api/job", data);
      toast.success("Votre formulaire a bien été soumis");
    } catch (err) {
      console.error(err);
      toast.error("Une erreur es survenue, veuillez réessayer ultérieurement");
    }
  };

  const contractualOptions = ["CDI", "CDD", "Alternance", "Stage"];
  const locationOptions = [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Montpellier",
    "Bordeaux",
    "Lille",
  ];

  return (
    <>
      <ToastContainer />

      <h1 className="title-offer">Ajouter votre offre</h1>
      <div className="container-offer">
        <div className="container-image">
          <img className="img-offer" src={jobImage} alt="offer" />

          <form className="container-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-offer">
              <label htmlFor="name" className="label-field">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="input-field"
                {...register("title", {
                  required: "Ce champ est requis",
                  minLength: {
                    value: 2,
                    message: "Le title doit contenir au minimun 2 caractères",
                  },
                })}
              />
              {errors.title && (
                <span className="error-offer">{errors.title.message}</span>
              )}

              <label htmlFor="description" className="label-field">
                Description
              </label>
              <textarea
                name="description"
                className="input-field"
                {...register("description", {
                  required: "Ce champ est requis",
                  minLength: {
                    value: 2,
                    message:
                      "La description doit contenir au minimun 2 caractères",
                  },
                })}
              />
              {errors.description && (
                <span className="error-offer">
                  {errors.description.message}
                </span>
              )}
              <label htmlFor="skill">Compétences</label>
              <input
                type="text"
                name="skill"
                className="input-field"
                {...register("skill", {
                  required: "Ce champ est requis",
                  minLength: {
                    value: 2,
                    message:
                      "Le champ skills doit contenir au minimun 2 caractères",
                  },
                })}
              />
              <label htmlFor="contract" className="label-field">
                Contract
              </label>
              <select
                name="contract"
                className="input-field"
                {...register("contract", {
                  required: "Ce champ est requis",
                })}
              >
                <option value="">Sélectionner un type de contrat</option>
                {contractualOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.contract && (
                <span className="error-offer">{errors.contract.message}</span>
              )}
              <label htmlFor="rqth" className="label-field">
                RQTH
              </label>
              <select
                name="rqth"
                className="input-field"
                {...register("rqth", {
                  required: "Ce champ est requis",
                })}
              >
                <option value="">Sélectionner une option</option>
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
              {errors.rqth && (
                <span className="error-offer">{errors.rqth.message}</span>
              )}

              <label htmlFor="location" className="label-field">
                Localisation
              </label>
              <select
                name="location"
                className="input-field"
                {...register("location", {
                  required: "Ce champ est requis",
                })}
              >
                <option value="">Sélectionner une location</option>
                {locationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.contract && (
                <span className="error-offer">{errors.contract.message}</span>
              )}

              <label htmlFor="salary" className="label-field">
                Salaire
              </label>
              <input
                type="number"
                name="salary"
                className="input-field"
                {...register("salary", {
                  required: "Ce champ est requis",
                  valueAsNumber: true,
                  min: {
                    value: 10000,
                    message: "Le salaire minimum est de 10000",
                  },
                  max: {
                    value: 100000,
                    message: "Le salaire maximum est de 100000",
                  },
                })}
              />
              {errors.salary && (
                <span className="error-offer">{errors.salary.message}</span>
              )}

              <label htmlFor="status" className="label-field">
                Status
              </label>
              <input
                type="text"
                name="status"
                className="input-field"
                {...register("status", {
                  required: "Ce champ est requis",
                  minLength: {
                    value: 2,
                    message: "Le champ doit contenir au minimun 2 caractères",
                  },
                })}
              />
              {errors.status && (
                <span className="error-offer">{errors.status.message}</span>
              )}

              <button className="button-offer" type="submit">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
