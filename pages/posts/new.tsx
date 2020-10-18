import { NewItemForm } from "../../components/NewItemForm";
import { Layout } from "../../layout/layout";
import classes from "../../styles/newPost.module.css";

const New = (): JSX.Element => {
    return (
        <Layout header={"Add New Post"}>
            <section className={classes.newPostsSection}>
                <div className={classes.postWrapper}>
                    <div className={classes.headerPost}>
                        <h2>Add new post</h2>
                    </div>
                    <NewItemForm />
                </div>
            </section>
        </Layout>
    );
};

export default New;
