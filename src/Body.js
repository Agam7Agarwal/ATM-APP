/**
 * Created by agam on 2/3/17.
 */
import React from 'react';

export default class Body extends React.Component{
  constructor(){
     super();
  }

  render(){
    return (
      <div className="col-sm-8">
        {/*<button onClick={this.props.handleClick}>
          Click me
        </button>*/}

        <h2 >TRANSACTIONS</h2>
        <table className="table table-bordered" >
          <thead>
          <tr>
            <th>Amount</th>
            <th>2000</th>
            <th>500</th>
            <th>100</th>
            <th>50</th>
            <th>Left</th>

          </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>


    )
  }

}
