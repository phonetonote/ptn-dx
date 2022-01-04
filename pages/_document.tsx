import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { fontFiles } from "../styles/typography.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    console.log("fontFiles", fontFiles);

    return (
      <Html lang="en">
        <Head>
          {fontFiles.map((file) => {
            return (
              <link
                as="font"
                crossOrigin="anonymous"
                href={file}
                key={file}
                rel="preload"
              />
            );
          })}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
