
import React from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Leftbar from './Leftbar';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this)




  }
  handleClick () {
   setTimeout( () => {
     this.setState({
       counter: this.state.counter + 1
     })
   },2000);
  }

  addmoney(){
    var a= document.getElementById("2000_notes").value;
    var b= document.getElementById("500_notes").value;
    var c= document.getElementById("100_notes").value;
    var d= document.getElementById("50_notes").value;
    var e= ((a*2000) + (b*500) + (c*100) + (d*50));

   var  markup = "<tr><td>" + e + "</td><td>" + a + "</td><td>" + b + "</td><td>" + c +"</td><td>" + d + "</td><td>" + e + "</td></tr>";
    $("table tbody").append(markup);
  }

  render() {
    return (
      <div>

        <Header />
        <Leftbar  counter ={this.state.counter} addmoney ={this.addmoney}   />
        <Body />
        <Footer/>
      </div>
    )
  }

}

