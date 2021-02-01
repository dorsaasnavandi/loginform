import React,{Component} from 'react';
import './Form.scss';

class Login extends Component{
  constructor(){
    super();

  }
  handleClick=()=>{
    this.props.history.push('/register');
  }
  passClick=()=>{
    this.props.history.push('/forget');
  }
  submitClick=(e)=>{
     e.preventDefault();
  }
   render(){
      return(

                <div className="form">
                    <div className="form__in">
                        <button className="log-btn" type="button">Login</button>
                        <button className="btn-design" onClick={this.handleClick} type="button">Register</button>
                    </div>
                    <form className="form__inputs">
                        <div className="parent-input">
                          <input type="text" placeholder="Username" className="input-design"/>
                        </div>
                        <div className="parent-input">
                          <input type="text" placeholder="Password" className="input-design"/>
                        </div>
                        <a onClick={this.passClick} className="forget-design">forget password?</a>
                        <button type="submit" onClick={this.submitClick}>Login</button>
                    </form>
                 </div>
      )

   }

}

export default Login;
