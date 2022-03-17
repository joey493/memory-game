import { Logo, StyledHeader } from '../styles/Header.styled'

function Header({children}) {
  return (
    <StyledHeader>
      <Logo src='./logo.png'/>
      {children}
    </StyledHeader>
  )
}

export default Header