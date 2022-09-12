import Document, { Html, Head, Main, NextScript } from "next/document";
import { FB_PIXEL_ID } from '../lib/fpixel';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
