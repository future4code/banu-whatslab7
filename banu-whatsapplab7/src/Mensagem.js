import React from "react";
import styled from 'styled-components'

const ContainerFundo = styled.div`
    
`
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
    usuario: "",
    mensagem: "",
};

onChangeNome = (event) => {
    this.setState({ usuario: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ mensagem: event.target.value });
  };

  onClickEnviar = () => {};
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
                </ContainerInput>
            
                
            </ContainerFundo>
        );
    }
}

export default Mensagem;