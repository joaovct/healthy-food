import React, { useCallback } from 'react'
import Button from "../../elements/Button/Button"
import container from "../../elements/Container/Container"
import Input from "../../elements/Form/Input/Input"
import page from "../../elements/Page/Page"
import {H1 as Title} from '../../elements/Subtitle/Subtitle'
import metrics from "../../../styles/metrics"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"

let timeout: any

const Register = () => {
    const [cep, setCep] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [requestResponse, setRequestResponse] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const cpfRef = useRef<HTMLInputElement>(null)
    const streetRef = useRef<HTMLInputElement>(null)
    const numberRef = useRef<HTMLInputElement>(null)
    const complementRef = useRef<HTMLInputElement>(null)
    const neighborhoodRef = useRef<HTMLInputElement>(null)
    const cityRef = useRef<HTMLInputElement>(null)
    const stateRef = useRef<HTMLInputElement>(null)
    const [,setUpdate] = useState(0)

    const searchCep = useCallback(() => {
        if(cep){
            fetch('https://brasilapi.com.br/api/cep/v1/'+cep)
            .then(response => response.json().then(response => {
                setRequestResponse(true)

                if(!response.errors && streetRef.current && numberRef.current && neighborhoodRef.current && stateRef.current && cityRef.current){
                    setError('')
                    streetRef.current.value = response.street
                    neighborhoodRef.current.value = response.neighborhood
                    cityRef.current.value = response.city
                    stateRef.current.value = response.state
                }else{
                    setRequestResponse(false)
                    if(response?.erros[0]){
                        setError(response.errors[0].message)
                        setSuccess('')
                    }
                }
            }))
            .catch(() => {
                setRequestResponse(false)
                setSuccess('')
                setError('Ocorreu um erro ao procurar pelo CEP.')
            })
        }
    },[cep])

    function clickSubmit(){
        if(nameRef?.current?.value && dateRef?.current?.value && cpfRef?.current?.value && cep && streetRef?.current?.value &&
            numberRef?.current?.value && neighborhoodRef?.current?.value && cityRef?.current?.value && stateRef?.current?.value){
                setError('')
                setSuccess('Dados cadastrados com sucesso!')
                localStorage.setItem('user', JSON.stringify({
                    name: nameRef.current.value,
                    date: dateRef.current.value,
                    cpf: cpfRef.current.value,
                    cep: cep,
                    street: streetRef.current.value,
                    number: numberRef.current.value,
                    neighborhood: neighborhoodRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    complement: complementRef?.current?.value || ''
                }))
                console.log(localStorage.getItem('user'))
        }else{
            setSuccess('')
            setError('Por favor, preencha todos os campos.')
            setUpdate(old => old + 1)
        }
    }

    useEffect(() => {
        if(timeout)
            clearTimeout(timeout)

        timeout = setTimeout(searchCep, 750)
    },[cep, searchCep])

    useEffect(() => {
        if(success || error){
            window.scrollTo(0,0)
        }
    },[success, error])

    return(
        <Page>
            <Container>
                <FormWrapper showAddressFields={requestResponse}>
                    <Title>Cadastro</Title>
                    <Success show={success ? true : false}>{success}</Success>
                    <Error show={error ? true : false}>{error}</Error>
                    <Fieldset error={error && !nameRef?.current?.value ? true : false}>
                        <label htmlFor="data">Nome completo</label>
                        <Input ref={nameRef} id="nome" type="text" placeholder="José da Silva"/>
                    </Fieldset>
                    <Fieldset error={error && !dateRef?.current?.value ? true : false}>
                        <label htmlFor="data">Data de nascimento</label>
                        <Input ref={dateRef} id="data" type="date"/>
                    </Fieldset>
                    <Fieldset error={error && !cpfRef?.current?.value ? true : false}>
                        <label htmlFor="data">CPF</label>
                        <Input ref={cpfRef} id="cpf" type="text" placeholder="xxx.xxx.xxx-xx"/>
                    </Fieldset>
                    <Fieldset error={error && !cep ? true : false}>
                        <label htmlFor="data">CEP</label>
                        <Input id="cep" type="number" placeholder="xxxxx-xxx" value={cep} onChange={e => setCep(e.target.value.toString())}/>
                    </Fieldset>
                    <FieldsetAddress error={error && !streetRef?.current?.value ? true : false}>
                        <label htmlFor="endereco">Endereço</label>
                        <Input ref={streetRef} id="endereco" type="text" placeholder="Endereço"/>
                    </FieldsetAddress>
                    <FieldsetAddress error={error && !numberRef?.current?.value ? true : false}>
                        <label htmlFor="numero">Número</label>
                        <Input ref={numberRef} id="numero" type="text" placeholder="Número"/>
                    </FieldsetAddress>
                    <FieldsetAddress error={false}>
                        <label htmlFor="complemento">Complemento</label>
                        <Input ref={complementRef} id="complemento" type="text" placeholder="Complemento"/>
                    </FieldsetAddress>
                    <FieldsetAddress error={error && !neighborhoodRef?.current?.value ? true : false}>
                        <label htmlFor="bairro">Bairro</label>
                        <Input ref={neighborhoodRef} id="bairro" type="text" placeholder="Bairro"/>
                    </FieldsetAddress>
                    <FieldsetAddress error={error && !cityRef?.current?.value ? true : false}>
                        <label htmlFor="cidade">Cidade</label>
                        <Input ref={cityRef} id="cidade" type="text" placeholder="Cidade"/>
                    </FieldsetAddress>
                    <FieldsetAddress error={error && !stateRef?.current?.value ? true : false}>
                        <label htmlFor="estado">Estado</label>
                        <Input ref={stateRef} id="estado" type="text" placeholder="Estado"/>
                    </FieldsetAddress>
                    <Button onClick={clickSubmit} btnStyle="bold-primary" effects={{blur: true}}>Cadastrar</Button>
                </FormWrapper>
            </Container>
        </Page>
    )
}

const Success = styled.strong<{show: boolean}>`
    text-align: center;
    font-size: ${metrics.fontSize.text};
    font-style: normal;
    margin: 16px 0 0 0;
    color: forestgreen;
    display: none;

    ${({show}) => {
        if(show) return`
            display: block;
        `
    }}
`

const Error = styled(Success)`
    color: red;
`

const Fieldset = styled.fieldset<{error: boolean}>`
    display: flex;
    flex-flow: column nowrap;
    margin: 16px 0 0 0;
    width: 100%;

    label{
        margin: 0 0 8px 0;
    }

    ${Input}{
        padding-top: 12px;
        padding-bottom: 12px;
        transition: border-color .25s;

        ${({error}) => {
            if(error) return `
                border-color: red;
            `
        }}
    }
`

const FieldsetAddress = styled(Fieldset)`
    display: none;
`

const FormWrapper = styled.div<{showAddressFields: boolean}>`
    width: 500px;
    max-width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 24px 32px;
    border: ${metrics.border.width} solid #ddd;
    border-radius: ${metrics.border.radius};
    box-shadow: ${metrics.effects.shadow};

    ${Button}{
        margin: 32px 0 0 0;
        padding: 16px 32px;
        text-transform: uppercase;
        font-weight: ${metrics.fontWeight.boldButton};
        letter-spacing: ${metrics.letterSpacing.boldButton};
    }

    ${({showAddressFields}) => {
        if(showAddressFields) return `
            ${FieldsetAddress}{
                display: flex;
            }
        `
    }}
`

const Container = styled(container)`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Page = styled(page)`
    padding-top: calc(100px + var(--PageHorizontalSpacing));
`

export default Register