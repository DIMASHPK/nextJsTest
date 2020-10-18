import "../styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Store } from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={Store}>
            <Component {...pageProps} />
            <ToastContainer autoClose={false} />
        </Provider>
    );
}
