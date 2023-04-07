import { Container, Info } from "./styles";

import uploadfile from "../assests/uploadfile.svg"
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Wrapper } from "../components/Wrapper";
import { Section } from "../components/Section";

export function Details() {
  return (
    <Container>
      <Header/>
      <Wrapper>
        <a href="#"> voltar </a>
        <h1>Adicionar prato</h1>

        <Section>
          <Info>
            <div className="image">
              <h2>Imagem do prato</h2>
              <label htmlFor="imagem">
                <img src={uploadfile} alt="" />
                <p>Selecionar imagem</p>
                <input
                  id=""
                  type="file"
                />
              </label>
            </div>
            <div className="name">
              <h2>Nome</h2>
              <input type="text" placeholder="Ex.: Salada Ceasar" />
            </div>
            <div className="category">
              <h2>Categoria</h2>
              <input type="button" value="refeição" />
            </div>
          </Info>
        </Section>

      </Wrapper>
    </Container>
  )
}