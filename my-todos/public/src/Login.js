"use client"
import React from 'react'

// import { useRouter } from 'next/router';

import { useRouter } from 'next/navigation';


function Login() {
    const [state, setState] = React.useState({
        userName: '',
        password: ''
    })
    const router = useRouter();


    return (
        <div>
            <div>
                <label>Username</label>
            </div>
            <div>

                <input
                    style={{ border: '2px solid gray', borderRadius: '10px' }}

                    className='bg-red-500 p-5' onChange={(e) => {
                        setState((prev) => {
                            return {
                                ...prev,
                                userName: e.target.value
                            }


                        })

                    }} type="text" />
            </div>
            <div>

                <label>Password</label>
            </div>
            <div>

                <input
                    style={{ border: '2px solid gray', borderRadius: '10px' }}
                    onChange={(e) => {
                        
                        setState((prev) => {
                            return {
                                ...prev,
                                password: e.target.value
                            }


                        })

                    }}
                    type="text" />
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>

                <button style={{ borderRadius: '5px', padding: '10px', background: 'red', color: 'white', textAlign: 'center' }} onClick={() => {
                    if (state.userName === 'user' && state.password === 'user@123') {
                        router.push('/Dashboard')

                    }else{
                        alert("something wrong!")
                    }
                }}>
                    Submit
                </button>
            </div>
        </div>

    )

}


export default Login