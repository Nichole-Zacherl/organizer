import { createClient } from "@supabase/supabase-js";
import env from "../env";

export const supabase = createClient(
  "http://localhost:54321",
  env.SUPABASE_KEY
);
