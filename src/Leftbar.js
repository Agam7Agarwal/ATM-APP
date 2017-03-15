/**
 * Created by agam on 2/3/17.
 */
import React from 'react';

export default class Leftbar extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="col-sm-4">

        {/*<div> {this.props.counter}</div>*/}
        <h2 >FILL ATM</h2>
        <form id="deposit_form" className="form-horizontal">

          <div className="form-group">
            <label className="control-label col-sm-2" >2000</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="2000_notes" id="2000_notes" placeholder="Enter 2000 notes" required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" >500</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="500_notes" id="500_notes" placeholder="Enter 500 notes" required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" >100</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="100_notes" id="100_notes" placeholder="Enter 100 notes" required />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" >50</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="50_notes" id="50_notes" placeholder="Enter 50 notes" required />
            </div>
          </div>


          <button type="button" id="formSave" className="btn btn-success"  onClick={this.props.addmoney}>Deposit</button>
        </form>


      </div>
    )
  }
}
