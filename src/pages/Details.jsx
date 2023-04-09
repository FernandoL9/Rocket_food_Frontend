import { Container, Info, Ingredient, Price, Describe, Button} from "./styles";

import uploadfile from "../assests/uploadfile.svg"
import setaDW from "../assests/setaDw.svg"
import setaRigth from "../assests/setaRigth.svg"
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";
import { Section } from "../components/Section";
import { Tags } from "../components/Tags";
import { Fooster } from "../components/Fooster";

export function Details() {
  return (
    <Container>
      <Header/>
      <Wrapper>
        <div className="back">
          <img src={setaRigth} alt="voltar" />
          <a href="#"> voltar </a>
        </div>
        <h1>Adicionar prato</h1>

        <Section>
          <Info>
            <div className="image">
              <h2>Imagem do prato</h2>
              <label htmlFor="imagem">
                <div>
                  <img src={uploadfile} alt="" />
                  <p>Selecionar imagem</p>
                </div>
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
              <div className="Input">
                <input type="button" value="Refeição"/>
                <img src={setaDW} alt="" />
              </div>
            </div>
          </Info>
        </Section>

        <Section>
          <div className="Box1">
            <p>Ingredientes</p>
            <Ingredient>
              <Tags title="Pão francês"/>
            </Ingredient>
          </div>
          <div className="Box2">
            <p>Preço</p>
            <Price>
              <span> R$00,00 </span>
            </Price>
          </div>
        </Section>

        <Section>
          <Describe>
            <p>Discrição</p>
            <textarea
            name="" 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição">
            </textarea>
          </Describe>
        </Section>

        <Button>
          Salvar alterações
        </Button>
      </Wrapper>
      <Fooster/>
    </Container>
  )
}