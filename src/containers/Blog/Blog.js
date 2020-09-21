import React, { Component } from 'react';
// import axios from 'axios'
import axios from '../../axios' // could use another name   
// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import classes  from'./Blog.module.css';
import Posts from './Posts/Posts';

class Blog extends Component {

    constructor(props) {
        super(props);
    }
    state = { posts: [], selected_post_id: null, err: false }
    componentDidMount() {
       


    }
  

    render() {
      
        return (
            <div >
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li>
                                <a href='/home'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='/post'>
                                    New Post
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
             <Posts></Posts>
                {/* <section>
                    <FullPost id={this.state.selected_post_id} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;