import React from 'react';

const ContactPage = () => {
    return (
        <main className='background-bright-blue vh-100'>
            <div className='center container'>
                <form className='background-grey'>
                    <h3>Contact Us</h3>
                    <p>information about contact process and response time</p>
                    <div>
                        <input placeholder='First Name' type={'text'} ></input>
                        <input placeholder='Last Name'  type={'text'}></input>
                        <input placeholder='E-Mail' type={'email'}></input>
                        <input placeholder='Mobile Number'  type={'tel'}></input>

                        <input placeholder='Job Title'  type={'text'} size={100}></input>
                        <textarea placeholder='Job Description' size={255} type={'description'}></textarea>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ContactPage