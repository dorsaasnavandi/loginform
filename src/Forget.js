import React,{Component} from 'react';
import './Form.scss';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import Validate from './ForgetValidation';


class Forget extends Component{
   constructor(){
     super();
   }
   handleClck=()=>{
     this.props.history.push('/');
   }
   handleClick=()=>{
     this.props.history.push('/register');
   }
   render(){
      return(
        <div className="form">
            <div className="form__in">
                <button className="btn-design" onClick={this.handleClck} type="button">Login</button>
                <button className="btn-design" onClick={this.handleClick} type="button">Register</button>
            </div>
            <Formik
               initialValues={{
                 email:"",

               }}
               validationSchema={Validate}
               onSubmit={(values)=>{
                  console.log(values);
                }}
            >
              <Form className="form__inputs">
                  <div className="parent-input">
                    <Field name="email" type="email" placeholder="Email" className="input-design first-input"/>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-design"
                    />
                  </div>
                  <button type="submit">Send code</button>
              </Form>
            </Formik>
         </div>
      )

   }

}

export default Forget;
