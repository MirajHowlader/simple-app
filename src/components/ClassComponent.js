import React, { Component } from 'react'



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class ClassComponent extends Component {
  render() {
    const {name, desc} = this.props
    return (
      <Card>
        <Card.Body>
          
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Hello Developer in Bangladesh of 2024</Card.Text>
        <Button>Learn More</Button>
        </Card.Body>

       
      </Card>
    )
  }
}

export default ClassComponent