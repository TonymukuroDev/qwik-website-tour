import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Home from "~/pages/home/components/home";

export default component$(() => {
  return (
    <Home/>
  );
});

export const head: DocumentHead = {
  title: "NexusCom - Next Generation Connectivity",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
