import classes from "../styles/header.module.css";
import Link from "next/link";

export const Header = (): JSX.Element => (
    <header className={classes.header}>
        <div className={classes.fixedWrapp}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/posts/new">
                <a>Add post</a>
            </Link>
        </div>
    </header>
);
