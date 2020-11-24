
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './Login.css'
import React, { Component } from 'react'

export default class Login extends Component {



  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["emailid"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    
    

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
     
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
  render() {
    return (
      <div id="main-registration-container">
      <div id="register">
         <h3>Login page</h3>
         <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
         
         <label>Email ID:</label>
         <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} required />
         <div className="errorMsg">{this.state.errors.emailid}</div>
        
         <label>Password</label>
         <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} required />
         <div className="errorMsg">{this.state.errors.password}</div>
      <Link to="/show">  <input type="submit" className="button"  value="Login"/></Link> 
         </form>
     </div>
     <nav>
<div className="left-links">
<Link className="links" to="/"> Electronics</Link>    

</div>
<div className="right-links">
<Link className="links" to="/"> <i class="fa fa-fw fa-user"></i> Logout</Link>

</div>
</nav>
  
 </div>
 
       );
   }
  }
   












