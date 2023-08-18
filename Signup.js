import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SingupValidation'
import axios from 'axios'

function Signup() { 
    const [values, setValues] = useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const handleInput = event => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const err = Validation(values)
        setErrors(err)
        if (errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup', values)
            .then(res=> {
                if (res.data === "Error"){
                    alert("Database connection issue")
                } else {
                    navigate('/')
                }
            })
            .catch(err=>console.log(err));
        }
    }

    return(
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
            <div className='bg-white p-3 w-25'>
                <h2>Sign-Up</h2>
                <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name'
                         onChange={handleInput} className='form-control'/>
                         {errors.name && <span className='text-danger'> {errors.name} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder='Enter Email' name='email'
                         onChange={handleInput} className='form-control'/>
                         {errors.email && <span className='text-danger'> {errors.email} </span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label> 
                        <input type="password" placeholder="Enter Password" name='password'
                         onChange={handleInput} className='form-control'/>
                         {errors.password && <span className='text-danger'> {errors.password} </span>}
                    </div>
                    <button className='btn btn-primary w-100'>Sign-Up</button>
                    <Link to="/" className='btn btn-secondary border w-100'>Log-In</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup