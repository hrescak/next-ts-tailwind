import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    const URL = 'https://url.site'
    const DESC = 'this is the website description'
    const TITLE = 'this is the site title'

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
