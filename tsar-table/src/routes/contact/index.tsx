import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/pages/contact/components/contact";


export default component$(() => {
    return (
        <Contact/>
    )
});


export const head: DocumentHead = {
  title: "Contact - Tsar's Table",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
