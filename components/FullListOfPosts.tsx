import Link from "next/link";
import classes from "../styles/mainPage.module.css";
import { PostObject } from "../types/types";

export const FullListOfPosts = ({
    clientPosts
}: {
    clientPosts: Array<PostObject> | null;
}): JSX.Element => (
    <>
        <div className={classes.postsListTabHeadersWrap}>
            <span>ID</span>
            <span>Title</span>
            <span>Body</span>
        </div>
        <ul className={classes.postsList}>
            {clientPosts.map(({ title = "empty field", id, body = "empty field" }) => (
                <li key={title + id} className={classes.postListItem}>
                    <Link href="/posts/[id]" as={`/posts/${id}`}>
                        <a className={classes.postListLink}>
                            <span>{id}</span>
                            <span>{title || "empty field"}</span>
                            <span>{body || "empty field"}</span>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    </>
);
