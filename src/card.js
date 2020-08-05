import React from 'react';
import Card from 'react-bootstrap/Card';
import Like from './like'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css';
import LetterAvatars from './Avatar'


class Scard extends React.Component {


    render() {
        return ( 
    <>
      <Card className="root"> 
         <CardHeader
              avatar={<LetterAvatars/>}
              title=  {this.props.Author}  
              subheader={this.props.Data}/>
          <CardMedia className="media" image={this.props.img} title={this.props.alt} />
              
          <Accordion>
            <Card>
              <Row>
               <Col md={6}>
                  <Like no={this.props.likes} likeaction={this.props.likeaction} postTopic={this.props.postTopic} />
               </Col>  
               <Col md={{ span: 3, offset: 3 }}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      See More
                  </Accordion.Toggle>  </Col>
               </Row>
               <Accordion.Collapse eventKey="0">
 
               <Card.Body>
                 <Card.Text><b>{this.props.Topictitle}:</b> </Card.Text>
                 {this.props.Textarea} 
                </Card.Body>
              </Accordion.Collapse>
              </Card>
               </Accordion>
        </Card>
   </>
        )
    }
}

export default Scard;