import React from "react";
import styled from 'styled-components'

const ContainerFundo = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e1e1d7; 
`

const ContainerVerde = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 10%;
    background-color:#075E55;
`

const TituloBranco = styled.h2`
    color: #fff;
`

const ContainerInput = styled.div`
    position: fixed;
    top:100;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 90vh;
    padding: 0 16px;
`

const MensagemContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
`;

const Texto = styled.p``;

const NomeUsuario = styled.p`
    font-weight:bold;
`;

class Mensagem extends React.Component {
    state = {
        listaMensagens: [],
        usuario: "",
        mensagem: ""
};

    onChangeNome = (event) => {
        this.setState({ usuario: event.target.value });
    };

    onChangeMensagem = (event) => {
        this.setState({ mensagem: event.target.value });
    };

    onClickEnviar = () =>{
        this.setState({usuario: "", mensagem:""});
        const novaMensagem = [
            ...this.state.listaMensagens,
            {
            usuario: this.state.usuario,
            mensagem: this.state.mensagem
        }
    ];
        this.setState({
            listaMensagens: novaMensagem
        });
    }

    render() {
        return (
            <ContainerFundo>
                <ContainerVerde>
                    <TituloBranco>WhatsLab</TituloBranco>
                </ContainerVerde>
                {this.state.listaMensagens.map((mensagem) => {
                    return (
                        <MensagemContainer>
                          <NomeUsuario>{mensagem.usuario}: </NomeUsuario>
                          <Texto>{mensagem.mensagem}</Texto>
                        </MensagemContainer>
                      );
                    })}
                <ContainerInput>
                <input
                    placeholder={"usuário"}
                    value={this.state.usuario}
                    onChange={this.onChangeNome}
                />
                <input
                    placeholder={"mensagem"}
                    value={this.state.mensagem}
                    onChange={this.onChangeMensagem}
                />
                <button onClick={this.onClickEnviar}>Enviar</button>
                
                </ContainerInput>
            </ContainerFundo>
        );
    }
}

export default Mensagem;