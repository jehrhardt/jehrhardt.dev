import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>jehrhardt's dev lab</title>
        <script defer data-domain="jehrhardt.dev" src="https://plausible.io/js/script.js"></script>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <p class="text-2xl font-bold">Hello world</p>
      </div>
    </>
  );
}
