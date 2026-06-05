import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Navbar from "~/components/navbar/navbar";
import { AppContextProvider } from "~/contexts/app.context";


export default component$(() => {
    return (
        <AppContextProvider>
            <Navbar/>
            <Slot/>
            <Footer/>
        </AppContextProvider>
    )
});