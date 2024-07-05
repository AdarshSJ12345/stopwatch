import React, { Component } from 'react'

export class Stopwatch extends Component {
  

    constructor(props){
        super(props);
        this.state={counter:0};
    }
    stopwatch=()=>{
    this.timer=setInterval(()=>{ this.setState({counter:this.state.counter+1})},1000);
    }
    stop=()=>{
      clearInterval(this.timer) ; 
    }
    restart = () => {
      clearInterval(this.timer); 
      this.setState({ counter:0 }); 
    };
   
  render() {
    return (
      <div className='container'>
      <div className='my'>
        STOPWATCH<br/>{this.state.counter}<br/>
        <button className='btn1' onClick={this.stopwatch}>start</button>

        <button className='btn2'onClick={this.stop}>stop</button>
        <button className='btn3' onClick={this.restart}>restart</button> 
      </div>
      </div>
    )
}}

export default Stopwatch;
