import React, { useEffect, useRef, useState } from 'react'
// import { ChilData } from './ChildData'

const Form = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    
    const inputref = useRef(null)

    useEffect(()=>{
        inputref.current.focus();
    })

    const handelChange = (e) =>{
        const {name ,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            alert('password does not match')
        }
       console.log('form Submitted : ', formData)
    }

    return (
        <div className='form' onClick={handleSubmit}>
            <form action=""  >
                <input type='text' placeholder='Enter the First name' name='fname' value={formData.fname} onChange={handelChange} ref={inputref} />
                <input type='text' placeholder='Enter the last name' name='lname' value={formData.lname} onChange={handelChange} />
                <input type='email' placeholder='Enter the email' name='email' value={formData.email} onChange={handelChange} />
                <input type='password' placeholder='Enter the paswword' name='password' value={formData.password} onChange={handelChange} />
                <input type='password' placeholder='confirm Password' name ='confirmPassword' value={formData.confirmPassword} onChange={handelChange} />
                <button >Submit</button>
            </form>
            {/* <ChilData alldata = {formData} /> */}
        </div>
    )
}

export default Form