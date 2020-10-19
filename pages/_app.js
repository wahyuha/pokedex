import App from 'next/app';

class Pokedex extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default Pokedex;
