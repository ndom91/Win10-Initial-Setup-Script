import React from 'react'
import { Heading, Pane } from 'evergreen-ui'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Pane
          elevation={1}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          background='tint2'
          border='muted'
        >
          <Heading
            size={700}
            marginTop='default'
            marginBottom='16'
          >
            Win10 Setup Script Generator
          </Heading>
          {this.props.children}
        </Pane>
        <style jsx>{`

        `}
        </style>
      </div>
    )
  }
}

export default Layout
