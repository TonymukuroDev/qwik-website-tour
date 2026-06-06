import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Home from "~/pages/home/components/home";

export default component$(() => {
  return <Home/>
});

export const head: DocumentHead = {
  title: "Tsar's Table — Imperial Russian Dining",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
