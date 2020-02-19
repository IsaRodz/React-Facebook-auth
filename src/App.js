import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class App extends Component {

  state = {
    isLoggedIn: false,
    userID: null,
    name: null,
    email: null,
    picture: null
  }

  componentClicked = () => console.log('clicked');

  responseFacebook = response => {
    console.log(response)
    this.setState({
      isLoggedIn: true,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })
  }

  render() {

    let fbContent

    if (this.state.isLoggedIn) {

      fbContent = (
        <div style={{
          background: "#f7f7f7",
          padding: "20px",
          borderRadius: "3px",
          maxWidth: "400px",
          margin: "20px auto"
        }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h3>Welcome, {this.state.name}</h3>
          <p>{this.state.email}</p>
        </div>
      )

    } else {
      fbContent = (
        <FacebookLogin
          appId="2215691505186605"
          autoLoad={true}
          fields="name, email, picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }

    return (
      <div className="app">
        <h1>React-Facebook Login</h1>
        {fbContent}
      </div>
    );
  }
}

export default App;
