import type { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css';
import { Recoil } from '../recoil';

/**
 * Main App component that renders before any of the pages
 * @see https://nextjs.org/docs/basic-features/typescript#custom-app
 */
const App = ({ Component, pageProps }: AppProps) => (
  <Recoil>
    <Component {...pageProps} />
  </Recoil>
);

export default App;
