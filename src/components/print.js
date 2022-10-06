import React, { Component } from 'react'

class PrintThisComponent extends Component {
  render() {
    return (
      <div className='mt-3 pl-2'>
        <button className='btn btn-success ' onClick={() => window.print()}>PRINT</button>
   
      </div>
    )
  }
}

export default PrintThisComponent
