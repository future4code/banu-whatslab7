import React from "react";
import styled from 'styled-components'

const ContainerFundo = styled.div``
const NomeUsuario = styled.span``;
const Texto = styled.span``;

const MensagemContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ContainerVerde = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: flex-start;
    width: 100%;
    height: 10vh;
    background-color:#075E55;
`

const TituloBranco = styled.h2`
    color: #fff;
`

const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: #e1e1d7; 
    height: 90vh;
    padding: 0 16px;
`

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
                {this.state.listaMensagens.map((mensagem, indice) => {
                    return (
                        <MensagemContainer>
                          <NomeUsuario>{mensagem.usuario}</NomeUsuario>
                          <Texto>{mensagem.mensagem}</Texto>
                        </MensagemContainer>
                      );
                    })}
                </ContainerInput>
            </ContainerFundo>
        );
    }
}

export default Mensagem;