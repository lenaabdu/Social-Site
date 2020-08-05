import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


class Add extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      postTopic:0,
      Topictitle: "",
      Author: "",
      Data:"",
      img: "",
      Textarea:""
    }
    toastr.options = {
      closeButton: true,
      debug: false,
      extendedTimeOut: "1000",
      hideDuration: "1000",
      hideEasing: "linear",
      hideMethod: "fadeOut",
      newestOnTop: false,
      onclick: null,
      positionClass: "toast-top-full-width",
      preventDuplicates: true,
      progressBar: true,
      showDuration: "300",
      showEasing: "swing",
      showMethod: "fadeIn",
      timeOut: "5000",
    };
    toastr.clear();
  }

  componenttopicMount() {
    console.log(this.props.lasttopic)
    this.setState({
      postTopic: this.props.lasttopic
    })
  }
  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitHandler(event) {
    event.preventDefault();
    const newTopic = this.state.postTopic+ 1
    this.props.onsubmit(newTopic, this.state.Topictitle, this.state.Author, this.state.Data, this.state.img, this.state.Textarea, 0);
    toastr.success("post added");
    this.setState({
      postTopic:newTopic,
      Topictitle: "",
      Author: "",
      Data:"",
      img:"",
      Textarea:"",
      likes:0
    }, console.log(this.state))
  }


    render() {
        return (
            <>
            
           <Form className="Container" onSubmit={(e) => this.submitHandler(e)}> 
              <Form.Group controlId="Topictitle">
                <Form.Label>Topic title </Form.Label>
                <Form.Control   name="Topictitle" type="text" value={this.state.Topictitle}  placeholder="Topic title" onChange={(e) => this.handleChange(e)}/>
             </Form.Group>

              <Form.Group controlId="Author">
                 <Form.Label>Author / Source</Form.Label>
                 <Form.Control  name="Author" type="text"  value={this.state.Author} placeholder="Author / Source" onChange={(e) => this.handleChange(e)}/>
             </Form.Group>
             <Form.Group controlId="Data">
                <Form.Label>Data</Form.Label>
                <Form.Control  name="Data" type="text"  value={this.state.Data} placeholder="1/1/2000" onChange={(e) => this.handleChange(e)}/>
             </Form.Group>
            <Form.Group controlId="img">
              <Form.Label>Image Address</Form.Label>
             <Form.Control name="img" type="text"  value={this.state.img} placeholder="insert url for image" onChange={(e) => this.handleChange(e)} />
            </Form.Group>
            <Form.Group controlId="Textarea">
              <Form.Label> Textarea</Form.Label>
              <Form.Control name="Textarea"  as="textarea" rows="5" value={this.state.Textarea}  onChange={(e) => this.handleChange(e)} />
           </Form.Group>
        
  
           <Button variant="primary" type="submit">
                Add Topic
            </Button>
         </Form>


          </>
        )
    }
}
export default Add;