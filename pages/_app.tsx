import { MainLayout } from "../components/Layout";
import { AppPropsWithLayout } from "../models/common";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
