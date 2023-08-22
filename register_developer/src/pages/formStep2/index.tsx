import  {useNavigate, Link}  from 'react-router-dom'
import * as C from './style'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/themes'
import { useEffect } from 'react'
import  { SelectOption } from '../../components/selectOption'

export const FormStep2 = () => {
    const navigate = useNavigate()
    const {state, dispatch} = useForm()

    useEffect(() => { 
        if (state.name === '') {
            navigate('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const handleNextStep = () => {
        if(state.name !== ''){
            navigate('/step3')
        }else{
            alert('Type your name')
        }
    } 

    const setLevel = (level: number) => {
        dispatch({type: FormActions.setLevel, payload: level})
    }

    return(
        <Theme>
            <C.Container>
                <p>Step 2/3 - {state.name}</p>
                <h1>{state.name}, what best describes you?</h1>
                <p>Select the option that best aligns with my current state professionally.</p>

                <hr />

                <SelectOption 
                    title="I'm a beginner"
                    description="I started programming less than a year ago"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                    />
                <SelectOption 
                    title="I am a programmer"
                    description="I've been programming for just over two years"
                    icon="😎" 
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <Link className='backButton' to="/">Back</Link>
                <button onClick={handleNextStep}>Next</button>
            </C.Container>
        </Theme>
    )
}