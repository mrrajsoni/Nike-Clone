import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
        ></script>
        <div
          hidden
          id="snipcart"
          data-api-key="MjQ4NTdkYmItZjIzYS00YzA2LWJhY2ItNGFjYTEwZDBmMDZmNjM3ODU5Njc2MjUwMDg1ODIw
"
          data-config-modal-style="side"
        ></div>
      </body>
    </Html>
  );
}
