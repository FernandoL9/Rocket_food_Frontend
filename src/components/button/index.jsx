import { Container } from "./styles";

export function Button({title, loading = false, ...rest}) {
  return(
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {/* If ternário */}
      {loading ? "carregando..." : title} 
    </Container>
  )
}