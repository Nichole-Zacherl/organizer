type Env = {
  SUPABASE_KEY: string;
  SUPABASE_URL: string;
};

const env: Env = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  SUPABASE_KEY: import.meta.env.VITE_SUPABASE_KEY,
};

console.log("env", import.meta.env);

export default env;
