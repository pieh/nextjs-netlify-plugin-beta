import type { AppContext } from 'next/app';
import BaseApp from 'next/app';

class App extends BaseApp {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: { [prop: string]: unknown } = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default App;
