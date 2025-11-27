import { useEffect, useState } from "react";
import fetchEmployee from "../api/axios"
import type { Employee } from "../type/type";
import React from 'react'; 
export const Dashboard: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const loadEmployees = async () => {
            setLoading(true);
            const data = await fetchEmployee();

            if (data) {
                // If API returns an array use it directly, otherwise wrap single item
                if (Array.isArray(data)) {
                    setEmployees(data);
                } else {
                    setEmployees([data]);
                }
            }
            setLoading(false);
        };
        
        loadEmployees();
        
    }, []); 

    if (loading) {
        return (
            <div className="text-center p-8 text-indigo-600 font-semibold">
                Chargement des données...
            </div>
        );
    }
    
    if (employees.length === 0) {
        return (
            <div className="text-center p-8 text-gray-500">
                Aucun employé trouvé.
            </div>
        );
    }

    return (
        <>

            <button className="bg-blue-600 p-3 d-flex items-end"> {show ? "Close Employee Form" : "Add Employee"}
            </button>
            
            <div className="bg-white p-6 rounded-lg shadow mt-6">
                <h2 className="text-xl font-bold mb-4">Liste des Employés</h2>
                
                {employees.map((item) => { 
                    return ( 
                        <div key={item.id } className="p-4 border-b border-gray-100 last:border-b-0">
                            <h3 className="text-lg font-semibold">{item.nom} {item.prenom}</h3>
                            <p className="text-sm text-gray-500">Matricule: {item.matricule} | Poste: {item.poste}</p>
                            <p className="text-sm text-gray-500">Salaire de Base: **{item.salaireBase}** MGA</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}