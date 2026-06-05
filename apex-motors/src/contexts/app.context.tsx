import { component$, createContextId, Signal, Slot, useContextProvider } from "@builder.io/qwik";


interface AppContextInterface { }

export const AppContext = createContextId<AppContextInterface>('app-context');

export const AppContextProvider = component$(() => {

    useContextProvider(AppContext, {});
    return <Slot/>
})