import React from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LikeIcon from './likeicon.png'




class Like extends React.Component {

  clickHandler(event) {
    this.props.likeaction(this.props.postTopic);
  }

  render() {
    return (
      <>
        <Row >
    <Col md={{ span: 3, offset: 2 }}><Image onClick={() => this.clickHandler()} fluid className="mx-auto" src={LikeIcon} width="25px" alt="like logo" /></Col>
    <Col md={4}> {this.props.no}</Col>
  </Row>
      </>
    );
  }
}

export default Like;
