import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import HomePage from "~/pages/home/components/home-page/home-page";

export default component$(() => {
  return (
    <HomePage/>
  );
});

export const head: DocumentHead = {
  title: "Apex Motors | Premium Automotive Retail",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
