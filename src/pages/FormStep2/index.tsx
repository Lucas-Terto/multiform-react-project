import React, { useEffect } from "react";
import * as C from './styles'
import { Theme } from "../../components/Theme";
import { Link, useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../contexts/FormContext'
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {

    const navigate = useNavigate()
    const {state, dispatch} = useForm()

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const handleNextStep = () => {
        if(state.level === 1 || state.level === 0) {
            navigate('/step3')
        } else {
            alert('Selecione uma das opções!')
        }
    }

    const setLevel = (level:number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3 - {state.currentStep}</p>
                <h1>Olá {state.name}, como você se descreve?</h1>
                <p>Escolha a opção que representa seu estado atual.</p>

                <hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to='/' className="backbutton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}