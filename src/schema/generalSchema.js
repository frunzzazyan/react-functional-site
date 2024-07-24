import * as yup from "yup"
const p = /^(?=.*\d.*\d)(?=.*[^A-Za-z\d].{5,})/

export const schema = yup.object().shape({
    login: yup.string().min(5, "Too short of a login").required("This field is required"),
    fpassword: yup.string().matches(p,"Enter a valid password!!").required("You must enter the password"),    
    rpassword: yup.string().oneOf([yup.ref("fpassword"),null],"Password must match").required(),
    email: yup.string().email().required("I want wour email"),
    age: yup.number("you can't be 'letters' old").integer().min(10,"you can't be less than 10 years old!!!").max(80,"error").required()

})