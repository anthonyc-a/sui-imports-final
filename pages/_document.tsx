import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>SUI Wine Imports</title>
      <meta name="description" content="SUI Wine Imports Official Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link rel="icon" href="/lgo-c.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
