import React from "react";
import type { FormValuesEmployee } from "../type/type";
import {
  Formik,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";

const FormEmployee: React.FC = () => {
  const initialValues: FormValuesEmployee = {
    matricule: "",
    nom: "",
    prenom: "",
    dateNaissance: "",
    dateEmbauche: "",
    cnaps: "",
    poste: "",
    salaireBase: 0,
    photo: "",
  };

  const validationSchema = Yup.object({
    matricule: Yup.string().required("Le matricule est requis"),
    nom: Yup.string().required("Le nom est requis"),
    prenom: Yup.string().required("Le prénom est requis"),
    dateNaissance: Yup.string().required("La date de naissance est requise"),
    dateEmbauche: Yup.string().required("La date d'embauche est requise"),
    cnaps: Yup.string().required("Le CNAPS est requis"),
    poste: Yup.string().required("Le poste est requis"),
    salaireBase: Yup.number()
      .required("Le salaire de base est requis")
      .min(0, "Le salaire doit être positif"),
    photo: Yup.string()
      .url("La photo doit être une URL valide")
      .required("La photo est requise"),
  });

  const handleSubmit = (
  values: FormValuesEmployee,
  action : {
    setSubmitting: (isSubmitting: boolean) => void;
  }
) => {
  setTimeout(() => {
    console.log(values);
    action.setSubmitting(false);
  }, 500);
};

  return (
    <div className="bg-white shadow-2xs p-4">
      <h1>Form Validation Example</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <form>
            <label htmlFor="matricule">
              matricule:
              <Field type="text" name="matricule" />
              <ErrorMessage name="matricule" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>
            <label htmlFor="nom">
              nom:
              <Field type="text" name="nom" />
              <ErrorMessage name="nom" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>{" "}
            <label htmlFor="prenom">
              prenom:
              <Field type="text" name="prenom" />
              <ErrorMessage name="prenom" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>{" "}
            <label htmlFor="dateNaissance">
              dateNaissance:
              <Field type="date" name="dateNaissance" />
              <ErrorMessage name="dateNaissance" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>{" "}
            <label htmlFor="dateEmbauche">
              dateEmbauche:
              <Field type="date" name="dateEmbauche" />
              <ErrorMessage name="dateEmbauche" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>{" "}
            <label htmlFor="cnaps">
              cnaps:
              <Field type="text" name="cnaps" />
              <ErrorMessage name="cnaps" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>{" "}
            <label htmlFor="poste">
              poste:
              <Field type="text" name="poste" />
              <ErrorMessage name="poste" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>{" "}
            <label htmlFor="salaireBase">
              salaireBase:
              <Field type="number" name="salaireBase" />
              <ErrorMessage name="salaireBase" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>{" "}
            <label htmlFor="photo">
              photo:
              <Field type="text" name="photo" />
              <ErrorMessage name="photo" component="div" className="text-red-800 font-stretch-90% mt-2" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Soumettre
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormEmployee;
