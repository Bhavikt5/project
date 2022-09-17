import { Provider } from "react-redux";
import Layout from "../components/Layout";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout style={{ display: "flex", flexDirection: "column" }}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
