import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      text: string
      accent: string
    }
    fontFamily: string,
    breakpoints:{
      xl: string
      l: string
      m: string
      s: string
    }
  }
}