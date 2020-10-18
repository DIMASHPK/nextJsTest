import Link from "next/link";
import { PostObject } from "../types/types";
import classes from "../styles/post.module.css";

export const PostItem = ({ clientPost }: { clientPost: PostObject }): JSX.Element => (
    <div className={classes.postWrapper}>
        <div className={classes.headerPost}>
            <h2>{clientPost.title || "empty field"}</h2>
        </div>
        <div className={classes.bodyPost}>
            <p>{clientPost.body || "empty field"}</p>
        </div>
        <div className={classes.bodyActions}>
            <Link href="/">
                <a>back</a>
            </Link>
        </div>
    </div>
);
