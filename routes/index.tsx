import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { App } from "../components/layouts/app.tsx";

export default function Home() {
  return (
    <>
      <App>
        <p class="text-2xl font-bold">Hello world</p>
      </App>
    </>
  );
}
