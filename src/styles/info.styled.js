import styled from "styled-components";

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({theme}) => theme.mainTheme.fonts['fs-200']};
` 

export {StyledInfo}