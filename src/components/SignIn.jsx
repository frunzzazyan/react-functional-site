import React from 'react'
import { Formik } from 'formik'
import "/src/SignIn.css"
import { schema } from '../schema/generalSchema'
import { user } from '../dataUser/user'


const initialValues = {
      login : "",
      fpassword : "",
      rpassword : "",
      email : "",
      age : ""
}

// let password = "^123abC"


function mySubmit(values,{resetForm,submitForm}){
  submitForm(true)
  if(values.login !== "" || values.fpassword !== "" || values.rpassword !== "" || values.email !== "" || values.age !== ""){
    console.log(values)
    localStorage.setItem("userSignin", JSON.stringify(values))
    localStorage.setItem("login",true)
  }
  resetForm()
  submitForm(false)
  location.pathname = "/"
  
}



const SignIN= () => {
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={mySubmit}>
        {({values,errors,touched,handleBlur,handleChange,handleSubmit,isSubmitting})=>{
           return <div className='sign-in'>
            <h1>Sign In</h1>
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
                  <div className="div-input">
                    <input style={{borderColor: (errors.rpassword && touched.rpassword ? "red" : "black")}} onBlur={handleBlur} onChange={handleChange} value={values.rpassword} type="password" placeholder='Repeat Password' name='rpassword'  id='rpassword'/>
                    <span>{(errors.rpassword && touched.rpassword ? errors.rpassword  : "")}</span>
                  </div>
                  <div className="div-input">
                    <input style={{borderColor: (errors.email && touched.email ? "red" : "black")}} onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" placeholder='Email' name='email'  id='email'/>
                    <span>{(errors.email && touched.email ? errors.email : "")}</span>
                  </div>
                  <div className="div-input">
                    <input style={{borderColor: (errors.age && touched.age ? "red" : "black")}} onBlur={handleBlur} onChange={handleChange} value={values.age} type="number" placeholder='Age' name='age'  id='age'/>
                    <span>{(errors.age && touched.age ? errors.age : "")}</span>
                  </div>
                    <input disabled={!!Object.keys(errors).length} type="submit" value="Go for it!"/>
                </fieldset>
                </form>
            </div>
            
    }}
    </Formik>
  )
}

export default SignIN