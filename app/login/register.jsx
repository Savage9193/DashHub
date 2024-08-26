"use client"

import styles from '@/app/ui/login/register.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function RegisterPage() {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router=useRouter();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if (!username || !email ||!password){
            setError("All fields are necessary.")
            return;
        } 

        try {

            const resUserExists=await fetch('api/userExists',{
                method:"POST",
                headers:{
                     "Content-Type":"application/json",
                },
                body:JSON.stringify({email})
            });


            const {user}=await resUserExists.json();
            if (user){
                setError("User already exists.");
                return;
            }else{
                setError("");

            }

            const res =await fetch('api/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,email,password
                })
            });

            if (res.ok){
                const form=e.target;
                form.reset();
                router.push("/login")

            }else{
                console.log("USer registration failed.")
            }
        } catch (error) {
            console.log("Error during registration:",error)
            
        }
    };


    
    console.log("name" ,username);
    return <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1>Register</h1>
            <input onChange={e => setName(e.target.value)} type='text' placeholder='Full Name' />
            <input onChange={e => setEmail(e.target.value)} type='text' placeholder='Email'/>
            <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password'/>
            <button>Register</button>
            {error && (
                <div className={styles.errormsg}>{error}</div>)}
            <Link className={styles.register} href={'/login'}>Already have an account?<span> Login</span></Link>
        </form>
    </div>
}