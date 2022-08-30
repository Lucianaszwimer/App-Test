import React, { useContext } from 'react';

export const initialState = {
    loading: true,
    profesor: {
        nombre: "",
        apellido: "",
    },
    cursos: [],
    alumnos: [],
};

export const ActionTypes = {
    SetLoading: "SET_LOADING",
    SetProfesor: "SET_PROFESOR",
    SetNombre: "SET_NOMBRE",
    SetApellido: "SET_APELLIDO",
    SetCursos: "SET_CURSOS",
    SetAlumnos: "SET_ALUMNOS",

};


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetLoading:
            return {
                ...state,
                loading: action.value,
            };
        case ActionTypes.SetProfesor:
            return {
                ...state,
                profesor: action.value,
            };
        case ActionTypes.SetNombre:
            return {
                ...state,
                profesor: {
                    ...state.profesor,
                    nombre: action.value,
                }
            };
        case ActionTypes.SetApellido:
            return {
                ...state,
                profesor: {
                    ...state.profesor,
                    apellido: action.value,
                }
            };
        case ActionTypes.SetCursos:
            return {
                ...state,
                cursos: action.value
            };
        case ActionTypes.SetAlumnos:
            return {
                ...state,
                alumnos: action.value
            };
    }
}

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>

}

export const useContextState = () => useContext(Cont);