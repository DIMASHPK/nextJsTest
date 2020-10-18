import { useEffect } from "react";
import { api } from "../../api/apiConfig";
import { Layout } from "../../layout/layout";
import classes from "../../styles/post.module.css";
import { MainStore, Post } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { getPostAC, initGetPostAC } from "../../redux/actionCreaters/postaActionCreaters";
import { useRouter } from "next/dist/client/router";
import { PostItem } from "../../components/PostItem";

const Index = ({ post }: Post | null): JSX.Element => {
    const clientPost = useSelector((state: MainStore) => state.data.post);
    const dispatch = useDispatch();
    const router = useRouter();
    const {
        query: { postId }
    } = router;

    const changedPostId = Array.isArray(postId) ? postId[0] : postId;

    useEffect(() => {
        dispatch(post ? getPostAC(post) : initGetPostAC(changedPostId));
    }, []);

    const header = clientPost ? clientPost.id : "Loading";

    return (
        <Layout header={"Post " + header}>
            <section className={classes.allPostsSection}>
                {!clientPost ? (
                    <p className="preloader">Loading...</p>
                ) : (
                    <PostItem clientPost={clientPost} />
                )}
            </section>
        </Layout>
    );
};

Index.getInitialProps = async req => {
    if (!req) return { posts: null };

    const post = await api.getPost(req.query.postId);

    return { post };
};

export default Index;
