import axios from "axios";
import {redirect} from "@sveltejs/kit"

const BASE_URL="https://event-center-backend-production-db60.up.railway.app"


export async function fetchUserInformation(){
    const data = await axios.get(`${BASE_URL}/users`)
    const finalUrl = data.request.res.responseUrl
    redirect(303, finalUrl)
}