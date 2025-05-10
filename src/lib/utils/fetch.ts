import { Axios } from "axios";
import type { EventCenterData } from "./types";

const BASE_URL = "https://event-center-backend-production-db60.up.railway.app";

// Helper function to create an Axios instance with optional token
function getAxiosInstance(token?: string) {
    const headers: Record<string, string> = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return new Axios({
        baseURL: BASE_URL,
        headers: headers
    });
}

export async function fetchUserInformation(token?: string) {
    const request = getAxiosInstance(token);
    const data = await request.get(`${BASE_URL}/users/logged-in-user`);
    const response = JSON.parse(data.data);
    return response;
}

export async function createEventCenter(token: string | undefined, eventCenterData: EventCenterData) {
    const request = getAxiosInstance(token);
    const formData = new FormData();

    // Append text fields
    formData.append("name", eventCenterData.name);
    formData.append("description", eventCenterData.description);
    formData.append("streetAddress", eventCenterData.address.street);
    formData.append("amount", String(eventCenterData.amount));

    // Append files
    formData.append("medias", eventCenterData.medias[0]);
    
    const response = await request.post(`${BASE_URL}/event-centers`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
}

export async function fetchEventCenters(pageSize: number, pageNumber: number) {
    const response = await new Axios().get(`${BASE_URL}/event-centers?pageSize=${pageSize}&pageNumber=${pageNumber}`);
    return JSON.parse(response.data) as EventCenterData[];
}

export async function fetchEventCenter(id: string) {

    const response = await new Axios().get(`${BASE_URL}/event-centers/${id}`);
    return JSON.parse(response.data) as EventCenterData;
}

export async function fetchEventCenterByName(name: string, pageSize: number, pageNumber: number) {
    const response = await new Axios().get(`${BASE_URL}/event-centers/search?key=${name}&pageSize=${pageSize}&pageNumber=${pageNumber}`);
    return JSON.parse(response.data) as EventCenterData[];
}

export async function updatePhoneNumber(token: string | undefined, phoneNumber: string) {
    const request = getAxiosInstance(token);
    const responss = await request.put(`${BASE_URL}/users`, { phoneNumber });
    return JSON.parse(responss.data);
}

export async function fetchUserEventCenter(token: string){
    const request = getAxiosInstance(token);
    const response = await request.get(`${BASE_URL}/event-centers/me`)
    return JSON.parse(response.data)
}