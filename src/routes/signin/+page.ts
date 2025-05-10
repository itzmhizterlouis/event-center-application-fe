import type {PageLoad} from './$types';


export const load:  PageLoad =  function ({url}){
    const token = url.searchParams.get('continue');  
    return {continue: Boolean(token), token}
}