import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../stores/store";
import { createGlobalStyle } from "styled-components";
import Styles from "../constants/Styles";

const ResetCss = createGlobalStyle`${ Styles.resetCss }`;
const App = ({ Component, pageProps }: AppProps) => {

  return (
    <Provider store={ store }>
      <Component {...pageProps} />
      <ResetCss />
    </Provider>
  )
}

export default App
