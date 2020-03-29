import React from 'react';
import Cardshow from '/components/Cardshow';



export default class Cards extends React.Component {

  state = {}


  componentDidMount() {
    console.log("mounted")
    axios.get('api/cards')
      .then(res =>{
        this.setState({res.data})
      }).catch(err =>{
        console.log(err)
      })
  }

  addCard(){

  }

  deleteCard(){

  }





  render(){
    return(
      <Card.Group>
        <Card />
        
      </Card.Group>
    )
  }
  

}