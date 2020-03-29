import React from 'react';
import { Card, Button, } from 'semantic-ui-react';

const Cardshow = () => {
  return(
    <Card>
      <Card.Content>
        <Card.Meta>
          Card Points
        </Card.Meta>
        <Card.Description>
          Card Answer
        </Card.Description>
      </Card.Content>
      <Button>Delete</Button>
    </Card>
  )
}

export default Cardshow;