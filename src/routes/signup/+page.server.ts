import type {Actions} from './$types';
import {redirect} from '@sveltejs/kit';

export const actions : Actions = {
    default:  async () => {
        // Redirect to the login page
        redirect(302, 'https://event-center-backend-production-db60.up.railway.app/signin');
    }
}