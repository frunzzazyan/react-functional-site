import React from 'react'
import { Formik } from 'formik'
import "/src/Login.css"
import { loginSchema } from '../schema/loginSchema'

const initialValues = {
      login : "",
      fpassword : ""
}

// let password = "^123abC"


function mySubmit(values,{resetForm,submitForm}){
  submitForm(true)
  if(values.login !== "" || values.fpassword !== ""){
    let userSignin = JSON.parse(localStorage.getItem("userSignin"))
    if(userSignin.login == values.login && userSignin.fpassword == values.fpassword){
      console.log(userSignin)
      localStorage.setItem("login", true)
    }
  }
    resetForm()
    submitForm(false)
  location.pathname = "/"
}

const Login = () => {
  return (
    <div className='login'>
        <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={mySubmit}>
        {({values,errors,touched,handleBlur,handleChange,handleSubmit,isSubmitting})=>{
           return <div className='log-in'>
            <h1>Login</h1>
                <form action="#" onSubmit={handleSubmit}>
                  <fieldset disabled={isSubmitting}>

                  <div className="div-input">
                    <input style={{borderColor: (errors.login && touched.login ? "red" : "black")}} onBlur={handleBlur} onChange={handleChange} value={values.login} type="text" placeholder='Login' name='login'  id='login'/>
                    <span>{(errors.login && touched.login ? errors.login  : "")}</span>
                  </div>
                  <div className="div-input">
                    <input style={{borderColor: (errors.fpassword && touched.fpassword ? "red" : "black")}} onBlur={handleBlur} onChange={handleChange} value={values.fpassword} type="password" placeholder='Password' name='fpassword'  id='fpassword'/>
                    <span>{(errors.fpassword && touched.fpassword ? errors.fpassword  : "")}</span>
                  </div>
                  
                    <input disabled={!!Object.keys(errors).length} type="submit" value="Go for it!"/>
                </fieldset>
                </form>
            </div>
            
    }}
    </Formik>
    </div>
  )
}

export default Login