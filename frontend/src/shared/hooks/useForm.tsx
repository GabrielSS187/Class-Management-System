import { ChangeEvent, useState } from "react";

export const useForm = ( initialState: any ) => {

    const [ form, setForm ] = useState( initialState );

    const onChange = ( event: ChangeEvent<HTMLInputElement | HTMLInputElement> ) => {
        const { name, value } = event.target ;
        setForm({ ...form, [ name ]: value });
    };

    const clearInputs = () => {
        setForm(initialState);
    };

    return { form, onChange, clearInputs };
};