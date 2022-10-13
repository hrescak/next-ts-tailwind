import * as React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  children: React.ReactNode
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title,
}) => (
    <div className="p-10">
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      {children}
    </div>
)

export default Layout
