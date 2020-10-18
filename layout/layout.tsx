import Head from "next/head";
import { Header } from "./header";
import classes from "../styles/layout.module.css";
import { LayoutProps } from "../types/types";

const technologies: Array<string> = [
    "next js",
    "redux",
    "redux-saga",
    "typescript",
    "axios",
    "styled-components",
    "react-hooks"
];

export const Layout = ({ header, children }: LayoutProps): JSX.Element => (
    <>
        <Head>
            <title>{header}</title>
            <meta name="keywords" content="next JS, practice" />
            <meta name="description" content="my first app on Next JS" />
        </Head>
        <Header />
        <main className={classes.main}>
            <section className={classes.firstSection}>
                <h1>{header}</h1>
                <p>
                    This is my test work with:{" "}
                    {technologies.map(item => (
                        <b key={item}>{item}, </b>
                    ))}
                </p>
            </section>
            {children}
        </main>
    </>
);
