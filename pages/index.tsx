import { useEffect } from "react";
import { api } from "../api/apiConfig";
import { Layout } from "../layout/layout";
import classes from "../styles/mainPage.module.css";
import { Posts, MainStore } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { getPostsAC, initGetPostsAC } from "../redux/actionCreaters/postaActionCreaters";
import { FullListOfPosts } from "../components/FullListOfPosts";

const Index = ({ posts }: Posts | null): JSX.Element => {
    const clientPosts = useSelector((state: MainStore) => state.data.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(posts ? getPostsAC(posts) : initGetPostsAC());
    }, []);

    return (
        <Layout header="All posts">
            <section className={classes.allPostsSection}>
                <h2 className={classes.postsListTitle}>Select Post</h2>
                {!clientPosts ? (
                    <p className="preloader">Loading...</p>
                ) : (
                    <>
                        <FullListOfPosts clientPosts={clientPosts} />
                    </>
                )}
            </section>
        </Layout>
    );
};

Index.getInitialProps = async req => {
    if (!req) return { posts: null };

    const posts = await api.getPosts();

    return { posts };
};

export default Index;
