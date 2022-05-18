import React, {Component} from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
        <div id="Class">
          <h3 style={{marginTop:"1vw",marginBottom:"1vw"}}>I was made using Functional Componen</h3>
          <p>This is done by using external CSS</p>
          <p style={{color:"white"}}>This is done by using internal CSS</p>
          </div>
    )
    }
  }