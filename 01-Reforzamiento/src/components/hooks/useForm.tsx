import { useState } from 'react';

export const useForm = <T extends Object>(formulario: T) => {

    const [state, setState] = useState(formulario);

    const onChange = (valor: string, campo: keyof T) => {
        setState({
            ...state,
            [campo]: valor
        });
    }
    return {
        ...state,
        formulario: state,
        onChange
    }
}
