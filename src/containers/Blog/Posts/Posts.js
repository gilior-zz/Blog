import React, { useState, useEffect, Component } from 'react';
import axios from '../../../axios'
import Post from '../../../components/Post/Post.js'
import classes from './Posts.module.css'
import { Link, Route } from "react-router-dom";
import { render } from 'react-dom';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
    constructor(props) {
        super(props);
        let a = 9;  
    }
    state = {
        posts: [],
        selected_post_id: null,
        err: false
    }
    // const [posts, update_posts] = useState([]);
    // const [selected_post_id, selected_post_id_update] = useState(null);
    // const [err, err_update] = useState(false);
    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updated_posts = posts.map((post, index) => { return { ...post, author: 'author_' + index } })
                // console.log(updated_posts);
                // update_posts(posts)
                this.setState({ posts: posts })
                // console.log(response);
            })
            .catch((err) => {
                console.log(err);
                // this.setState({ err: true });
                // err_update(true);
            })
    }

    on_post_click = (id) => {
        //    this.sets selected_post_id_update(id)
        // this.setState({ selected_post_id: id })
        this.props.history.push(
            {
                pathname: '/posts/' + id
            }
        )
    }

    render() {
        let _posts = <p>somthng is wrong</p>
        if (!this.state.err)
            _posts = this.state.posts.map((post, index) =>
                // <Link key={post.id} to={'/'+post.id}>
                <Post
                    key={post.id}
                    on_post_click={(id) => this.on_post_click(id)}
                    post={post}></Post>
                // </Link>
            )

        return (
            <div>
                <section className={classes.Posts}>
                    {_posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost}></Route>
            </div>

        )




    }
}

export default Posts;