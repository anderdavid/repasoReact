import React, { Component } from 'react';

class ViewPosts extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                {id: 2, title: 'Installation', content: 'You can install React from npm.'}
            ]
        }
    }
    render() {
       const content =this.state.posts.map(post=>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
       )
        return (
          <div className="componente">
              <h1>POSTS</h1>
              {content}
          </div>
         
        );
    }
}

export default ViewPosts;