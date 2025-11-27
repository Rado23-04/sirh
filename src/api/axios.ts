import axios from 'axios';
import type { Employee } from '../type/type';

const apiClient = axios.create({
    baseURL: "http://localhost:8084",
    headers: {
        "Authorization" : "Basic " + btoa("user:ff0e2506-e29a-4e1f-8fad-ac6804fb1846"),
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