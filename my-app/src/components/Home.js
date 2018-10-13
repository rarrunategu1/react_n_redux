import React, { Component } from 'react'
import axios from 'axios';

class Home extends Component { 
    state = { //state would grab the json and output it to this template
        posts: [ ]
    }
    componentDidMount() {
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res => {
         console.log(res);
         this.setState({
             posts: res.data.slice(0,10) //will return just 10 of the post in the json object
         });
     });
    }
    render () {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key= {post.id}>
                    <div className="card-content">
                    <span className="card-title">{posts.title}</span>
                    <p>{post.body}</p>
                    </div>
                    </div>
                    )
                
            })) : (
            <div className = "center">No posts yet</div>
            )
        return (
        <div className="container">
        <h4 className="center">Home</h4>
        {postList}
        </div>
        );
    }
}

export default Home;