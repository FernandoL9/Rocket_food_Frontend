import { Container } from "./styles";
import { Header } from "../components/header/Header";
import { Button } from "../components/button/Button";

export function Details() {
  return (
    <Container>
      <Header/>
      <Button title="Voltar"/>
    </Container>
  )
}