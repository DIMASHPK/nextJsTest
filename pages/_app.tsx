import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Store } from "../redux/store";
import NextNprogress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={Store}>
            <NextNprogress color="#006064" />
            <Component {...pageProps} />
            <ToastContainer autoClose={false} />
        </Provider>
    );
}
