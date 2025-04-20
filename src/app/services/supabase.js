import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fbaxkmkgluvgrsobzhrb.supabase.co";
const supabaseKey =
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZiYXhrbWtnbHV2Z3Jzb2J6aHJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MTYxMDUsImV4cCI6MjA1OTk5MjEwNX0
    .ET3qMoGMZQv -
  EhgdiKDXt -
  pymrbdXT0UNffANjp258Q;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
