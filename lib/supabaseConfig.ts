import { IS_BROWSER } from "$fresh/runtime.ts";
import { createClient } from "supabase";

type SupabaseConfig = {
  supabaseUrl: string;
  supabasePublicAnonKey: string;
} | undefined;

function loadFromDataAttribute() {
  const element = document.querySelector('[data-supabase-config]') as HTMLElement;
  const configJson = element.dataset.supabaseConfig;
  if (!configJson) {
    return null;
  }
  return JSON.parse(configJson) as SupabaseConfig;
}

async function loadFromEnvironment() {
  const { load } = await import("$std/dotenv/mod.ts");
  const env = await load();
  const supabaseUrl = env["SUPABASE_URL"];
  const supabasePublicAnonKey = env["SUPABASE_PUBLIC_ANON_KEY"];
  return { supabaseUrl, supabasePublicAnonKey };
}

async function loadSupabaseConfig() {
  if (IS_BROWSER) {
    return loadFromDataAttribute();
  } else {
    return await loadFromEnvironment();
  }
}

export const supabaseConfig = await loadSupabaseConfig();

function initSupabaseClient() {
  if (!supabaseConfig) {
    console.error("Supabase config not found");
    return null;
  }
  return createClient(
    supabaseConfig.supabaseUrl,
    supabaseConfig.supabasePublicAnonKey
  );
}

export const supabase = initSupabaseClient();
