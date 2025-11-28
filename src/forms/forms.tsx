import React from "react";
import type { FormValuesEmployee } from "../type/type";
import { Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import type { Employee } from "../type/type";
import { createEmployee } from "../api/axios";
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
      //.url("La photo doit être une URL valide")
      .required("La photo est requise"),
  });

  const [fromData, setFormData] = useState<Employee>({
    matricule: "",
    nom: "",
    prenom: "",
    dateNaissance: "",
    dateEmbauche: "",
    cnaps: "",
    poste: "",
    salaireBase: 0,
    photo: "",
  });



  // Gestion du changement dans les champs
  const handleChange = (event: any) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormData({
      ...fromData,
      [name]: value,
    });
  };

  // Soumission du formulaire
  const handleSubmit = async (
    values: FormValuesEmployee,
    action: {
      setSubmitting: (isSubmitting: boolean) => void;
    }
  ) => {
    try {
      const dataToSubmit: Employee = {
        ...values,
      };
      console.log("Données soumises :", dataToSubmit);
      const response = await createEmployee(dataToSubmit);
      console.log("Response after creating employee", response);
    } catch (error) {
      console.log("Error while submitting employee data", error);
    } finally {
      action.setSubmitting(false);
    }
  };

  return (
    <div className="bg-linear-to-br from-purple-50 to-blue-50 shadow-lg rounded-xl p-6 border border-purple-100 d-flex flex-row justify-center items-center ">
      <h1 className="text-2xl font-bold text-purple-800 mb-6 text-center">
        Form Validation Example
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleSubmit: formikHandleSubmit }) => (
          <form onSubmit={formikHandleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label htmlFor="matricule" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Matricule</span>
                <Field
                  type="text"
                  name="matricule"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="matricule"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="nom" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Nom</span>
                <Field
                  type="text"
                  name="nom"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="nom"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="prenom" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Prénom</span>
                <Field
                  type="text"
                  name="prenom"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="prenom"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="dateNaissance" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Date de Naissance</span>
                <Field
                  type="date"
                  name="dateNaissance"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="dateNaissance"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="dateEmbauche" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Date d'Embauche</span>
                <Field
                  type="date"
                  name="dateEmbauche"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="dateEmbauche"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="cnaps" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">CNAPS</span>
                <Field
                  type="text"
                  name="cnaps"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="cnaps"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="poste" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Poste</span>
                <Field
                  type="text"
                  name="poste"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="poste"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="salaireBase" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Salaire de Base</span>
                <Field
                  type="number"
                  name="salaireBase"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="salaireBase"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>

              <label htmlFor="photo" className="flex flex-col">
                <span className="text-purple-700 font-medium mb-1">Photo</span>
                <Field
                  type="text"
                  name="photo"
                  className="px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <ErrorMessage
                  name="photo"
                  component="div"
                  className="text-purple-600 text-sm mt-1"
                />
              </label>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-linear-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                // onChange={handleChange}
              >
                
                Soumettre
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormEmployee;
