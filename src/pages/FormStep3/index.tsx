import React, { useEffect, ChangeEvent } from "react";
import * as C from './styles'
import { Theme } from "../../components/Theme";
import { Link, useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'

export const FormStep3 = () => {

    const navigate = useNavigate()
    const {state, dispatch} = useForm()

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleNextStep = () => {
        if(state.github && state.email !== '') {
            console.log(state)
        } else {
        return alert('Preencha os campos restantes!')
        }
    }

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type:FormActions.setEmail,
            payload: e.target.value
        })
    }

    const handleGithubChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type:FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3 - {state.currentStep}</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos.</p>

                <hr />

                <label htmlFor="email">
                    Qual seu e-mail?
                    <input 
                        type="email" 
                        autoFocus
                        value={state.email}    
                        onChange={handleEmailChange}
                    /> 
                </label>               

                <label htmlFor="email">
                    Qual seu Github?
                    <input 
                        type="url" 
                        autoFocus
                        value={state.github}    
                        onChange={handleGithubChange}
                    /> 
                </label>               

                <Link to='/step2' className="backbutton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </C.Container>
        </Theme>
    )
}