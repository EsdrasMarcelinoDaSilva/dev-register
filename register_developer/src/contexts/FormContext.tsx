// Context Reducer, Provider, Hook
import { createContext, useContext, useReducer } from 'react'

type State = {
    currentStep: number,
    name: string,
    level: 0 | 1,
    email: string,
    github: string
}

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}
type Action = {
    type: FormActions, 
    payload: any
}
type ContextType = {
    state: State,
    dispatch: (action: Action) => void
}
type FormProviderProps = {
    children: React.ReactNode
}   
// 1. Definir o tipo de dados (Context)
const FormContext = createContext<ContextType | undefined>(undefined)

// 2. Definir o tipo de dados (Reducer)
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
const formReducer = (state: State , action: Action) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        default:
            return state
    }
}

// 3. Definir o tipo de dados (Provider)
export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// 4. Definir o tipo de dados (Hook)
// eslint-disable-next-line react-refresh/only-export-components
export const useForm = (): ContextType => {
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error('useForm must be used within a FormProvider')
    }
    return ( context )
}