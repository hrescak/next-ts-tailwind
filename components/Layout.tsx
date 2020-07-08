import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  title?: string
}

const Wrapper = styled.div`
  padding: 2rem;
  @media (max-width: ${p=>p.theme.breakpoints.l}) {
    padding: 1.5rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.m}) {
    padding: 1.2rem;
  }
  @media (max-width: ${p=>p.theme.breakpoints.s}) {
    padding: 1rem;
  }
`
const URL = 'https://url.site'
const DESC = 'this is the website description'
const TITLE = 'this is the website title'

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = TITLE,
}) => (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={DESC}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="@mhrescak"/>
        <meta name="twitter:image" content="/meta/og-image.png"/>
        <meta name="twitter:description" content={DESC}/>
        <meta name="og:url" content={URL}/>
        <meta name="og:type" content="website"/>
        <meta name="og:title" content={TITLE}/>
        <meta name="og:description" content={DESC}/>
        <meta name="og:image" content="/meta/og-image.png"/>
        <meta name="og:image:alt" content={DESC}/>
        <meta name="og:locale" content="en_US"/>
        <meta name="og:site_name" content={TITLE}/>
        <link rel="icon" href="/meta/icon.png"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      {children}
    </Wrapper>
)

export default Layout
