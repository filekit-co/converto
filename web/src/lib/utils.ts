import {PUBLIC_BASE_URL} from '$env/static/public';

export const canonicalUrl = (route:string) => `${PUBLIC_BASE_URL}${route}`
