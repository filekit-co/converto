// Vite exposes all variables contained in the .env file prefixed with VITE_ to the client. 
// If you wanted to use an environment variable with Vite you could expose it using:
// https://scottspence.com/posts/sveltekit-environment-variables-with-the-sveltekit-env-module

// VITE_*
export const {
  VITE_BASE_URL, 
  VITE_IMG_API_URL, 
  VITE_FILE_API_URL
} = import.meta.env
