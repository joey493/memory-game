import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  padding-inline: ${({theme}) => theme.mainTheme.fonts['fs-300']};
  max-width: ${({theme}) => theme.mainTheme.size.containerWidth};
`

export default Container
