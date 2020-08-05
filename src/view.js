import React from 'react';
import './App.css';
import Scard from './card';




class View extends React.Component {
  
    buildPosts(){
      return this.props.posts.map((current,i) => (
       <Scard key={i}  postTopic={current.posttopic} Topictitle={current.Topictitle} Author={current.Author} Data={current.Data} img={current.img} Textarea={current.Textarea} likes={current.likes} likeaction={this.props.likeaction}/>
        )
        )
      }
    render() {
        return (
            <>
 
        <div>
          {this.buildPosts()}
        </div>

         </>
        )
    }
}
export default View;