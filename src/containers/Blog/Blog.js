import React, { Component } from 'react';
// import axios from 'axios'
import axios from '../../axios' // could use another name   
// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import { Route, Link, NavLink, Switch,Redirect } from 'react-router-dom'
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

                                <NavLink activeStyle={{ color: "orange" }}  exact to='/posts'>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <a href='/new-post'>
                                    New Post regular anchor
                                </a>
                            </li>
                            <li>
                                <NavLink activeStyle={{ color: "orange" }} exact to={{
                                    pathname: '/new-post',
                                    hash: '#hash',
                                    search: '?a=b&c=d'
                                }}>
                                    New Post
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{ color: "orange" }} exact to={{
                                    pathname: '/new-post-2'
                                }}>
                                    New Post-2
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts></Posts> */}
                {/* <Route path="/" exact render={()=><h1>home</h1>}></Route>
             <Route path="/"  render={()=><h1>home 2</h1>}></Route> */}
                <Switch>
                    <Route path="/new-post" component={NewPost}></Route>
                    <Route path="/posts"  component={Posts}></Route>
                    <Redirect from="/"  to='/posts'></Redirect>

                    {/* <Route path="/new-post-2" render={() => <h1>new-post-2</h1>}></Route> */}
                    {/* <Route path="/:id" exact component={FullPost}></Route> */}
                </Switch>
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