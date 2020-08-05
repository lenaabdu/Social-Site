import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';
import Add from './add'
import View from './view';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Social from './Social.jpg';


import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postTopic: undefined
    }
  }
  componenttopicMount() {
    const listContents = localStorage.getItem("posts");
    let postValue = 0
    if(listContents) {
      postValue = (JSON.parse(listContents)[JSON.parse(listContents).length -1].posttopic) 
    }
     
    this.setState(
      { posts: JSON.parse(listContents) || [],
        postTopic: postValue
      }
    )
  }


updateListItems( posttopic,Topictitle,Author,Data,img,Textarea,likes) {
  const postItem = { posttopic,Topictitle,Author,Data,img,Textarea, likes }
  this.setState((state) => ({
    posts: state.posts.concat(postItem)
  }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
}

addLike(topic) {

  this.setState((state) => ({
    posts: state.posts.map(
      post => post.posttopic === topic ? { ...post, likes: post.likes +1 } : post )
  }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
}

    render() {
        return (
          <>
          <Router>
  <Navbar   bg="primary" variant="dark" fixed="top"  expand="md">
  <Navbar.Brand>Techopedia</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to="/" >About</Link>
      <Link className="nav-link" to="/add" >Add</Link>
      <Link className="nav-link" to="/view" >View</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Container>
  <Switch>
    <Route path="/add">
      <Add  onsubmit={(posttopic,Topictitle,Author,Data,img,Textarea,likes) => this.updateListItems(posttopic,Topictitle,Author,Data,img,Textarea,likes)} lasttopic={this.state.postTopic} />
    </Route>
    <Route  path="/view"  >
      <View posts={this.state.posts} likeaction={(topic) => this.addLike(topic)} />
      
      </Route>
      <Route   exact path="/"  >
      <Container>
  <Row className="home">
    <Col>
    <h2 className="Color">Techopedia - The IT Education Site</h2><br/>
    <h4 className="Color">What?</h4>
    <p>Techopedia is your go-to tech source for professional IT insight and inspiration, plus we tirelessly feed anyone who is proud to be called a "geek" with the informational and entertaining content they need.</p>
    <p>From defining complex tech jargon in our dictionary, to exploring the latest trends in our articles or providing in-depth coverage of a topic in our tutorials, our goal is to help you better understand technology and — we hope — make better decisions as a result.</p>
    <p>We aim to be a site that isn't trying to be the first to break news stories, but instead is your first resource for thoughtful pieces that provide actionable advice. And we feel there is a place for a site that aims to educate IT pros about the technologies affecting their marketplace.</p>
    <Button variant="primary" className="margin">      <Link className="nav-link " to="/add" >Add</Link></Button>{'      '}
    <Button variant="primary" className="margin"> <Link className="nav-link" to="/view" >View</Link></Button>

    </Col>
    <Col>
    <img src={ Social} a alt="img" />
    </Col>
  </Row>

</Container>
      
      </Route>


  </Switch>
</Container>
    </Router>
    <footer className='footer mt-auto py-3 bg-primary text-white'>
        <div className='container'>Copyright © 2020 Techopedia</div>
      </footer>
          </>

        )
    }
}
export default App;