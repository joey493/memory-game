import styled from "styled-components";

const CardsHolder = styled.div`
  margin-top: ${({theme}) => theme.mainTheme.fonts['fs-200']};
  display: grid;
  gap: ${({theme}) => theme.mainTheme.fonts['fs-200']};
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: center;
`

const StyledCard = styled.div`
  position: relative;
  height: 100px;
  font-size: ${({theme}) => theme.mainTheme.fonts['fs-300']};
  cursor: pointer;
  perspective: 1000px;
  perspective-origin: center center;

  

  .front, .back {
    background-color: ${({theme}) => theme.clrTheme.cardClr};
    position: absolute;
    border-radius: ${({theme}) => theme.mainTheme.borderRadius};
    display: grid;
    place-content: center;
    width: ${({theme}) => theme.mainTheme.size.full};
    height: ${({theme}) => theme.mainTheme.size.full};
    transition: transform .7s ease-in, border .3s;
    border: 2px solid transparent;
    &:hover {
    border: 2px solid hsl(200.2 95.1% 59.6%);
  }
  }

  .front {
      backface-visibility: hidden;
    }
    
  .back {
    transform: rotateY(180deg);
    backface-visibility: hidden;
    font-size: ${({theme}) => theme.mainTheme.fonts['fs-400']};
  } 
  
  ${props => !props.flip} {
    .front {
      transform: rotateY(180deg);
    }

    .back {
    transform: rotateY(0);
  }
  }
`

export {CardsHolder, StyledCard}