import Document, { Html, Head, Main, NextScript } from "next/document";
// import "../styles/global.scss";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            user-select: none;
            overscroll-behavior-y: contain;
          }

          body {
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
