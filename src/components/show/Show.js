import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './Show.css'
import React, { Component } from 'react'

export default class Show extends Component {
  constructor(){
    super();
    this.state={
        name:""
    }
}

displayProduct =()=>{
    this.setState({
        name:<First />
    })
} 
displayProduct1 =()=>{
    this.setState({
        name:<Second />
    })
} 
displayProduct2 =()=>{
    this.setState({
        name:<Third />
    })
} 
displayProduct3 =()=>{
    this.setState({
        name:<Fourth />
    })
} 
  
  
  
  render() {
    return (
      <div>
              <nav>
      <div className="left-links">
      <Link className="links" to="/"> Electronics</Link>   
       

</div>
<div className="right-links">
<Link className="links" to="/"> <i class="fa fa-fw fa-user"></i> Logout</Link>

</div>
</nav>
<div class="container" >
 <div>{this.state.name} </div>
</div>
              <div className="container">
             
  
         <div className="card-deck">
<div class="card" id="c1">
  <img className="showimg" src="iphone.jpg" alt="" onClick={this.displayProduct}/>
  
  <div class="card-body">
   
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="samsung.jpg" alt="" onClick={this.displayProduct1}/>
  <div class="card-body">
     
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="nokia.jpg" alt="" onClick={this.displayProduct2}/>
  <div class="card-body">
      
  </div>
</div>
<div class="card" id="c1">
<img className="showimg" src="vivo.jpg" alt="" onClick={this.displayProduct3}/>
  <div class="card-body">
      
  </div>
</div>
</div>


          </div>

      </div>
    )
  }
}
class First extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="iphone.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">i phone </h4>
               <p className="card-text">
                   Color: Black <br/>
                   RAM: 16GB <br/>
                   Storage:128Gb<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Second extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="samsung.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Samsung</h4>
               <p className="card-text">
                   Color: Grey <br/>
                   RAM: 4GB <br/>
                   Storage:64GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Third extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="nokia.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Nokia</h4>
               <p className="card-text">
                   Color:Fantasy Grey <br/>
                   RAM: 6GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
class Fourth extends React.Component{
  render(){
      return(
          <div>
             <div className="container">
              <div id="c2" className="card col-md-6">
              <img className="card-img-top" src="vivo.jpg" alt="" />
               <div className="card-body">
               <h4 className="card-title">Vivo V20</h4>
               <p className="card-text">
                   Color: Sunset Melody <br/>
                   RAM: 8GB <br/>
                   Storage:128GB<br/>
                    </p>
          </div>
          </div>
             </div>
          </div>
         
      )
  }
}
