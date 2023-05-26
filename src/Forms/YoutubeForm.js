import React from 'react'
import { useFormik } from 'formik';
function YoutubeForm() {
    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            chaneel:''
        },
        onSubmit:values =>{
            console.log('form data', values)
            console.log('form data', formik.errors)
        },
        validate:values =>{
            let errors={}
            if(!values.name){
                errors.name = 'Requried'
            }
            if(!values.email){
                errors.email = 'Requried'
            }
            else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
                errors.email ='invild Email'
            }
            if(!values.chaneel){
                errors.chaneel = 'Requried'
            }

            return errors
        }
    })

    
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label> Name </label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}></input>

            <label>Email</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}></input>
            
            <label>Channel</label>
            <input type='text' id='channel' name='chaneel' onChange={formik.handleChange} value={formik.values.chaneel}></input>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
