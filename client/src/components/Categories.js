import React from 'react';
import Category from '/components/Category';



export default class Categories extends React.Component {

  state = {}


  componentDidMount() {
    console.log("mounted")
    axios.get('api/categories')
      .then(res =>{
        this.setState({res.data})
      }).catch(err =>{
        console.log(err)
      })
  }

  addCategory(){

  }

  deleteCategory(){

  }





  render(){
    return(
      <Card.Group>
        <Card />
        
      </Card.Group>
    )
  }
  

}