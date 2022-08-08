import React, { useEffect, ChangeEvent } from "react";
import * as C from './styles'
import { Theme } from "../../components/Theme";
import { Link, useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'

export const FinalStep = () => {

    const navigate = useNavigate()
    const {state, dispatch} = useForm()

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    const handleNextPage = () => {
        navigate('/proof')
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4 - {state.currentStep}</p>
                <h1>Muito bem {state.name}, cadastro realizado com sucesso!</h1>
                <p>Confira seus dados e emita seu comprovante.</p>

                <hr />
                <div className="labels">
                    <label htmlFor="name" className="i1">
                        Nome: {state.name}
                    </label>                              

                    <label htmlFor="level" className="i2">
                        Level: {state.level === 0 ? 'Iniciante 🥳.' : 'Programador 😎.'}
                    </label>                              

                    <label htmlFor="email" className="i3">
                        E-mail: {state.email}
                    </label>                              

                    <label htmlFor="github" className="i4">
                        Github: {state.github}
                    </label>   
                </div>
                <Link to='/step3' className="backbutton">Voltar</Link>
                <button>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}