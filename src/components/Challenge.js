import React from 'react'

const Challenge = () => {
  return (
    <div className="five wide column">
      <div className="ui special cards">
        <div className="card">
          <div className="blurring dimmable image">
            <div className="ui dimmer">
              <div className="content">
                <div className="center">
                  <div className="ui inverted button">See details</div>
                </div>
              </div>
            </div>
            <img src="https://via.placeholder.com/100" />
          </div>
          <div className="content">
            <a className="header">Challenge name</a>
            <div className="meta">
              <span className="date">Investment: Free</span>
              <br/>
              <span className="date">Category: Free</span>
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="clock outline icon"></i>
              1 month
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge