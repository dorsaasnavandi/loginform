import React,{Component} from 'react';
import './Form.scss';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import Validation from './UserValidation';

class Register extends Component{
   constructor(){
     super();
   }
   handleClck=()=>{
     this.props.history.push('/');
   }
   render(){
      return(
        <div className="form">
            <div className="form__in">
                <button className="btn-design" onClick={this.handleClck} type="button">Login</button>
                <button className="reg-btn" type="button">Register</button>
            </div>
            <Formik
               initialValues={{
                 fname:"",
                 email:"",
                 password:"",
                 confirmpassword:"",

               }}
               validationSchema={Validation}
               onSubmit={(values)=>{
                  console.log(values);
                }}
            >
               <Form className="form__inputs">
                   <div className="parent-input">
                     <Field name="fname" type="text" placeholder="Name" className="input-design first-input"/>
                     <ErrorMessage
                       name="fname"
                       component="div"
                       className="error-design"
                     />
                   </div>
                   <div className="parent-input">
                     <Field name="email" type="email" placeholder="Email" className="input-design other-inputs"/>
                     <ErrorMessage
                       name="email"
                       component="div"
                       className="error-design"
                      />
                   </div>
                   <div className="parent-input">
                     <Field name="password" type="text" placeholder="Password" className="input-design other-inputs"/>
                     <ErrorMessage
                       name="password"
                       component="div"
                       className="error-design"
                      />
                   </div>
                   <div className="parent-input">
                     <Field name="confirmpassword" type="text" placeholder="Confirm password" className="input-design other-inputs"/>
                     <ErrorMessage
                       name="confirmpassword"
                       component="div"
                       className="error-design"
                     />
                   </div>
                   <button type="submit">Register</button>
               </Form>
           </Formik>
         </div>
      )

   }

}

export default Register;
