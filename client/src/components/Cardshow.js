import React from 'react';
import { Card, Button, } from 'semantic-ui-react';
import styled from 'styled-components'

const Cardshow = () => {
  return(
    <Card as={Background}>
      <Card.Content>
      <Card.Description>
          300
        </Card.Description>
      </Card.Content>
      <Button>Delete</Button>
    </Card>
  )
}

export default Cardshow;


const Background = styled.div`
  background: blue !important;
  color: white !important;
  text-align: center;
  font-size: 30px !important;
`