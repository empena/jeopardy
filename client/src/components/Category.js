import React from 'react'
import {Card, Button, } from 'semantic-ui-react';

export default class Category extends React.Component {

  state = { name:'' }


  render () {
    const { name } = this.state
    return (
      <>
      <Button>Delete Category</Button>
      <Button>Add Category</Button>
      <Button>Update Category</Button>
      <Card >
        {/* { name.map( category => */}
        <Card.Content>
          <Card.Description>
            {/* {category.name} */}
          </Card.Description>
        </Card.Content>
        )}
      </Card>
    </>
  )
}
}