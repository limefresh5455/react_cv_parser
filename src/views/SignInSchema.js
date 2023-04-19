import * as Yup from 'yup';


export const SignInSchema = Yup.object({
// If user hit submit without entering the details, required messge ("") will be shown

email:Yup.string().email().required("Please enter Email"),

password:Yup.string().required("Please Enter Your Password")
.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,"Enter Strong Password including Capital letter, Special characters and numbers"),


})

