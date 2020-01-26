import React from 'react'
import { Card, Badge, Heading } from 'evergreen-ui'

export default class Section extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }

  render () {
    return (
      <Card
        width={350}
        elevation={0}
        hoverElevation={1}
        marginTop={16}
        marginBottom={16}
        display='flex'
        alignItems='center'
        justifyContent='center'
        background='tint2'
        border='muted'
        style={{
          padding: '20px'
        }}
      >
        <Heading
          size={600}
        >
          <Badge color='green' marginRight={8}>{this.props.option.id}</Badge>
          {this.props.option.name}
        </Heading>
      </Card>
    )
  }
}
