import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    userName: 'USERNAME12345',
    referralCode: 'ABCD12',
    Amount: '20',
    Desc: 'invited you to play Mobile Premier League!'
  };
  render() {
    const { userName, referralCode, Amount, Desc } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="User">
            <div className="username">{userName}</div>
            <br />
            {Desc}
          </div>
          <div className="referral">
            <div className="crickter" />
            <div className="AmountDetails">
              <div className="Amount">
                Get FREE Cash
                <br />
                <span class="amount">₹{Amount}</span>
              </div>
              <div className="referralCode">
                Referral Code
                <br />
                <span className="code">{referralCode}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div class="footer-desc">
            Install the MPL App &amp; Get 20 MPL Tokens Free!
            <div className="googleApp"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
