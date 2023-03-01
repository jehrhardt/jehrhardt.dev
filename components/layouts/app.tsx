import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import { supabaseConfig } from "../../lib/supabaseConfig.ts";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export const App = ({ children }: Props) => {
  const configJson = JSON.stringify(supabaseConfig);
  return (
    <>
      <Head>
        <title>jehrhardt's dev lab</title>
        <script defer data-domain="jehrhardt.dev" src="https://plausible.io/js/script.js"></script>
      </Head>
      <div data-supabase-config={configJson}>
        {children}
      </div>
    </>
  );
};
