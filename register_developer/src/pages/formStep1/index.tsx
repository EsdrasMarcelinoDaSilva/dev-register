import  {useNavigate}  from 'react-router-dom'
import * as C from './style'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/themes'
import { useEffect } from 'react'

export const FormStep1 = () => {
    const navigate = useNavigate()
    const {state, dispatch} = useForm()

    useEffect(() => { 
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step2')
        }else{
            alert('Type your name')
        }


    } 
    
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Step 1/3 - {state.name}</p>
                <h1>Let's start with your name</h1>
                <p>Fill in the field below with your full name.</p>

                <hr />

                <label>
                    Your full name
                    <input type="text" 
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    )
}