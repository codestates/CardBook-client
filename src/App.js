import React from 'react'
import Login from './Login'
import Main from './Main'
import SignUp from './SignUp'
import Mypage from './Mypage'
import Video from './basicObj/Mainloop.mp4'
import Image from './basicObj/test.png'
import './app.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogin: true,
    }
  }

  render() {
    return (
      <div className="flex_container">
        <div>
          <video loop autoPlay muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <img src={Image} />
        </div>
      </div>
    )
  }
}

export default App
