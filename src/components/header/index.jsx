import { Container, Profile, Input, Button, Logout } from "./styles";

import logo from "../../assests/logo.svg"
import receipt from "../../assests/receipt.svg"
import search from "../../assests/search.svg"
import logout from "../../assests/logout.svg"

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src= {logo}
          alt= "Logo marcar em forma de poligono e ao lado uma frase Food Explore" 
        />
        <span>admin</span>
      </Profile>

      <Input>
        <img src={search} alt="" />
        <input type="text" placeholder="Busque por pratos ou ingredientes" />
      </Input>

      <Button>
       <img src={receipt} alt="Número de pedidos" />
        Pedidos (0)
      </Button>
      
      <Logout>
        <img src={logout} alt="Butão de sair" />
      </Logout>
      
    </Container>
  )
}