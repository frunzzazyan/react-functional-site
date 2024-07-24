import * as yup from "yup"
const p = /^(?=.*\d.*\d)(?=.*[^A-Za-z\d].{5,})/

export const loginSchema = yup.object().shape({
    login: yup.string().min(5, "Too short of a login").required("This field is required"),
    fpassword: yup.string().matches(p,"Enter a valid password!!").required("You must enter the password"),    
})