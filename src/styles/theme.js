const mainTheme = {
  mainClr: 'hsl(200.2 95.1% 59.6%)',
  borderRadius: '10px',
  fonts: {
      'fs-100': '1rem',
      'fs-200': '1.5rem',
      'fs-300': '2rem',
      'fs-400': '3rem',
  },
  size: {
      full: '100%',
      logoSize: '2.5rem',
      headerWidth: '80rem',
      containerWidth: '50rem'
  }
} 

const light = {
  id: 'light',
  backgroundClr: 'hsl(0deg 0% 87%)',
  cardClr: 'hsl(0 0% 100%)'
}
const dark = {
  id: 'dark',
  backgroundClr: 'hsl(0 0% 6.3%)',
  cardClr: 'hsl(0 0% 16.1%)'
}

export {light, dark}
export default mainTheme