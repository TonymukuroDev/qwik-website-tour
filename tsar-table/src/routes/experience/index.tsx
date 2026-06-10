import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Experience from "~/pages/experience/components/experience";


export default component$(() => {
    return (
        <Experience/>
    )
});

export const head: DocumentHead = {
  title: "Experience — Tsar's Table",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};