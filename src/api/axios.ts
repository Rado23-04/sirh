import axios from 'axios';
import type { Employee } from '../type/type';

const apiClient = axios.create({
    baseURL: "http://localhost:8084",
    headers: {
        "Authorization" : "Basic " + btoa("user:d2c61e17-b469-43e8-a007-feeb858e9eb5"),
        "Content-type": "application/json"
    },
})

export default async function fetchEmployee(): Promise<Employee[] | Employee | undefined> {
    try {
        const respone = await apiClient.get<Employee[] | Employee>("/api/v1/employees/all-employees");
        return respone.data;
    } catch (error) {
        console.log("Error while get employees", error);
    }
}

export async function createEmployee(employee: Employee) :Promise<Employee | undefined> {
    try {
        const response = await apiClient.post<Employee>("/api/v1/employees/save-employee", employee)
        return response.data
     }
      catch (error) {
        console.log("Error while creating employee", error);
    }
}