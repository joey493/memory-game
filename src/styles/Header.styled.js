import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center ;
  padding: ${({theme}) => theme.mainTheme.fonts['fs-200']} ${({theme}) => theme.mainTheme.fonts['fs-300']};
  max-width: ${({theme}) => theme.mainTheme.size.headerWidth};
  margin: 0 auto;
` 

const Logo = styled.img`
  width: 2.5rem;
`

const ThemeToggle = styled.div`
  cursor: pointer;
  user-select: none;
  font-size: ${({theme}) => theme.mainTheme.fonts['fs-300']};
`

export {StyledHeader, Logo, ThemeToggle}