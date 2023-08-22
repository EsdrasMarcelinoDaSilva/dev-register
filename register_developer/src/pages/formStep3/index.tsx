import  {useNavigate, Link}  from 'react-router-dom'
import * as C from './style'
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from '../../components/themes'
import { useEffect } from 'react'

export const FormStep3 = () => {
    const navigate = useNavigate()
    const {state, dispatch} = useForm()

    useEffect(() => { 
        if(state.name === ''){
            navigate('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== ''){
            console.log(state)
        }else{
            alert('Fill in all the data')
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Step 3/3 - {state.name}</p>
                <h1>Coll, {state.name}, where can we find you?</h1>
                <p>provide your contacts so we can get in touch.</p>

                <hr />

                <label>
                    Your E-mail?
                    <input type="email" 
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Your Github?
                    <input type="url" 
                        autoFocus
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                <Link className='backButton' to="/step2">Back</Link>
                <button onClick={handleNextStep}>Finalize registration</button>
            </C.Container>
        </Theme>
    )
}