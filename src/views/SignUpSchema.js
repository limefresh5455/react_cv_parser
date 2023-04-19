import * as Yup from 'yup';


export const SignUpSchema = Yup.object({
// If user hit submit without entering the details, required messge ("") will be shown
first_name:Yup.string().min(3).required("Please Enter First Name"),

last_name:Yup.string().min(3).required(" Please Enter Last Name"),

phone_no:Yup.number().min(10).required(" Please Enter Valid Phone Number"),

username:Yup.string().min(3).required(" Please Enter User Name"),

email:Yup.string().email().required(" Please Enter Email"),

password:Yup.string().required("Please Enter Your Password")
.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,"Enter Strong Password including Capital letter, Special characters and numbers"),

password1:Yup.string()
.required("Please Enter Your Password")
.oneOf([Yup.ref('password'),null],"Both Password must match"),

})

