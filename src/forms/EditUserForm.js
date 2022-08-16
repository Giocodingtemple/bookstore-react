import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'

const FormSchema = Yup.object(
    {
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required()
    }
)

const initialValues={
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
            id ="newemail"
            name="newemail"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="newemail"
            placeholder="newemail"
            value={formik.values.newemail}
            onChange={formik.handleChange}
            error = {formik.touched.newemail && Boolean(formik.errors.newemail)}
            helperText={formik.touched.newemail && formik.errors.newemail}
        />
        <TextField
            id ="oldpassword"
            name="oldpassword"
            type="oldpassword"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="oldPassword"
            placeholder="oldPassword"
            value={formik.values.oldpassword}
            onChange={formik.handleChange}
            error = {formik.touched.oldpassword && Boolean(formik.errors.oldpassword)}
            helperText={formik.touched.oldpassword && formik.errors.oldpassword}
        />
        <TextField
            id ="newpassword"
            name="newpassword"
            type="newpassword"
            fullWidth
            sx={{mb: 2, mt:2}}
            label="newpassword"
            placeholder="newpassword"
            value={formik.values.newpassword}
            onChange={formik.handleChange}
            error = {formik.touched.newpassword && Boolean(formik.errors.newpassword)}
            helperText={formik.touched.newpassword && formik.errors.newpassword}
        />
        <Button type="submit" sx={{ width:"100%"}}>Login</Button>
    </form>
  )
}
