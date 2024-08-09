// pages/_app.js
import '../styles/globals.css';

import ClientRouter from '../components/ClientRouter';

function MyApp({ Component, pageProps }) {
  return <ClientRouter />;
}

export default MyApp;
