import * as React from 'react'
import NextApp from 'next/app'
import '@hackclub/theme/fonts/reg-bold.css'
import base from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

let theme = base

const colors = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',

  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',

  red: '#ec3750',
  orange: '#ff8c37',
  yellow: '#f1c40f',
  green: '#33d6a6',
  cyan: '#5bc0de',
  blue: '#338eda',
  purple: '#a633d6',

  twitter: '#1da1f2',
  facebook: '#3b5998',
  instagram: '#e1306c'
}
theme.colors = {
  text: colors.white,
  background: colors.dark,
  elevated: colors.darkless,
  sheet: colors.darkless,
  sunken: colors.darker,
  border: colors.darkless,
  placeholder: colors.slate,
  secondary: colors.muted,
  muted: colors.muted,
  accent: colors.cyan,
  primary: colors.red,
  ...colors
}
export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
