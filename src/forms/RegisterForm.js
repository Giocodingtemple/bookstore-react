import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'

const FormSchema = Yup.object(
    {
        firstname:Yup.string().firstname.required(),
        lastname:Yup.string().lastname.required(),
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required()
    }
)

const initialValues={
    firstname:'',
    lastname:'',
    email:'',
    password:''
}


export default function LoginForm() {
    const handleSubmit=(values)=>{
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })
    


  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id ="Firstname"
            name="Firstname"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Firstname"
            placeholder="Firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error = {formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <TextField
            id ="Last Name"
            name="Last Name"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Last Name"
            placeholder="Last Name"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error = {formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
        />
        <TextField
            id ="email"
            name="email"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error = {formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
            id ="password"
            name="password"
            type="password"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="Password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error = {formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
            id ="confirmpassword"
            name="confirmpassword"
            type="confirmpassword"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="confirmpassword"
            placeholder="confirmpassword"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            error = {formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
            helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
        />
        <Button type="submit" sx={{ width:"100%"}}>Login</Button>
    </form>
  )
}
