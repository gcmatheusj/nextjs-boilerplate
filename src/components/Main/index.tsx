import * as Styled from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <Styled.Wrapper>
    <Styled.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado."
    />
    <Styled.Title>{title}</Styled.Title>
    <Styled.Description>{description}</Styled.Description>
    <Styled.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela com código."
    />
  </Styled.Wrapper>
)

export default Main
