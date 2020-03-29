import React from 'react'
import {Card, Button, } from 'semantic-ui-react';
import styled from 'styled-components'

export default class Category extends React.Component {

  state = { name:'' }


  render () {
    const { name } = this.state
    return (
      <>
      <Button>Delete Category</Button>
      <Button>Add Category</Button>
      <Button>Update Category</Button>
      <Card as={Background}>
        <Card.Content>
          <Card.Description>
            React 101
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}
}

const Background = styled.div`
  background: gray !important;
  color: white !important;
  text-align: center;
  font-size: 20px !important;
`