import React from 'react'
import Layout from '../components/layout/index'
import Section from '../components/section'
import fetch from 'isomorphic-fetch'
import { Card, Pane, Heading, Checkbox } from 'evergreen-ui'

class Wrapper extends React.Component {
  static async getInitialProps ({ res, req, query }) {

  }

  constructor (props) {
    super(props)
    this.state = {
      availableOptions: []
    }
  }

  componentDidMount () {
    const host = window.location.host
    fetch(`http://${host}/api/script/read`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          availableOptions: data.resp,
          functionsAvailable: data.functionsAvailable
        })
      })
      .catch(err => console.error(err))
  }

  loadFile () {
    const host = window.location.host
    fetch(`http://${host}/api/script/read`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }

  updateCheckboxState (id, checked) {
    const {
      functionsAvailable
    } = this.state
    const functionId = functionsAvailable.findIndex(fn => {
      return fn.id == id
    })
    const newFunctionState = functionsAvailable

    newFunctionState[functionId].checked = checked
    this.setState({
      functionsAvailable: newFunctionState
    })
  }

  isBoxChecked (id) {
    const {
      functionsAvailable
    } = this.state

    const functionId = functionsAvailable.findIndex(fn => fn.id == id)

    if (!functionsAvailable[functionId]) return false

    return functionsAvailable[functionId].checked
  }

  render () {
    const {
      availableOptions
    } = this.state

    return (
      <Layout>
        {/* <Button onClick={this.loadFile} height={36} marginRight={16} appearance='primary' intent='success' iconBefore='add'>
          Load File
        </Button> */}
        {availableOptions && availableOptions.map((options, index) => {
          return (
            <Card
              background='tint1'
              key={index}
              display='flex'
              flexDirection='column'
              justifyItems='center'
              alignContent='center'
              border='muted'
              style={{
                padding: '20px',
                marginBottom: '20px'
              }}
            >
              <Heading
                size='600'
                style={{
                  width: '100%',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                {options.heading}
              </Heading>
              <Pane
                flexDirection='row'
                justifyItems='center'
                alignContent='center'
              >
                <Checkbox
                  label={options.a.name}
                  checked={this.isBoxChecked(options.a.id)}
                  id={options.a.id}
                  onChange={e => this.updateCheckboxState(e.target.id, e.target.checked)}
                  style={{
                    padding: '20px'
                  }}
                />
                <Checkbox
                  label={options.b.name}
                  checked={this.isBoxChecked(options.b.id)}
                  id={options.b.id}
                  onChange={e => this.updateCheckboxState(e.target.id, e.target.checked)}
                  style={{
                    padding: '20px'
                  }}
                />
              </Pane>
            </Card>
          )
        })}
        <style jsx>{`

        `}
        </style>
      </Layout>
    )
  }
}

export default Wrapper
