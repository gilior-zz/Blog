import React, { Component } from 'react';
import axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import post from '../../components/Post/Post';

class Blog extends Component {

    constructor(props) {
        super(props);
    }
    state = { posts: [], selected_post_id: null, err: false }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updated_posts = posts.map((post, index) => { return { ...post, author: 'author_' + index } })
                // console.log(updated_posts);
                this.setState({ posts: updated_posts });
                // console.log(response);
            })
            .catch(() => {
                this.setState({ err: true });
            })


    }
    on_post_click = (id) => {
        this.setState({ selected_post_id: id })
    }

    render() {
        let posts = <p>somthng is wrong</p>
        if (!this.state.err)
            posts = this.state.posts.map((post, index) =>
                <Post
                    on_post_click={(id) => this.on_post_click(post.id)}
                    key={post.id}
                    post={post}></Post>
            )
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selected_post_id} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;