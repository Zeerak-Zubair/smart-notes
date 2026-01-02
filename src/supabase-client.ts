import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
      "https://wittwikunzfealyekurs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpdHR3aWt1bnpmZWFseWVrdXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0ODA1MzEsImV4cCI6MjA4MjA1NjUzMX0.pOqYFlNDx_SGfOrqs9qbkX3ID4eFdMI2jrzfTXDMqks"
);