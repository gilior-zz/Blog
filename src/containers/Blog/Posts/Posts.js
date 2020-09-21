import React, { useState, useEffect } from 'react';
import axios from '../../../axios'
import Post from '../../../components/Post/Post.js'
import classes from './Posts.module.css'
function Posts(props) {
    const [posts, update_posts] = useState([]);
    const [selected_post_id, selected_post_id_update] = useState(null);
    const [err, err_update] = useState(false);

    useEffect(() => {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updated_posts = posts.map((post, index) => { return { ...post, author: 'author_' + index } })
                // console.log(updated_posts);
                update_posts(posts)
                // console.log(response);
            })
            .catch((err) => {
                console.log(err);
                // this.setState({ err: true });
                err_update(true);
            })
    })
    const on_post_click = (id) => {
        selected_post_id_update(id)
    }
    let _posts = <p>somthng is wrong</p>
    if (!err)
        _posts = posts.map((post, index) =>
            <Post
                on_post_click={(id) =>on_post_click(post.id)}
                key={post.id}
                post={post}></Post>
        )
    return (

        <section className={classes.Posts}>
            {_posts}
        </section>
    );
}

export default Posts;