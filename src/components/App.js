import React from 'react'
import { withRouter } from 'react-router-dom'
import AppRouter from 'components/Router_HG'

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    )
  }
}

export default withRouter(App)
