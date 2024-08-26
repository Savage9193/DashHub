"use client";
import styles from '@/app/ui/login/login.module.css'
import Link from 'next/link'
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';





const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router=useRouter();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res=await signIn('credentials',{
        email,password,redirect:false,
      });
      if (res.error){
        setError("Invalid Credentials");
        return
      }
      router.replace("/dashboard")

    } catch (error) {
      console.log(error)

    }

  }
  return (

    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <input onChange={e => setEmail(e.target.value)} type='text' placeholder='Email' />
        <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
        <button className={styles.formButton} >Login</button>
        <h5 className={styles.h5}>or sign up with</h5>
        <button
          type='button'
          onClick={() => signIn('google')}
          className={styles.googleButton}
        >
          Sign in with Google
        </button>
        {error && (
          <div className={styles.errormsg}>{error}</div>
        )}

        <Link className={styles.register} href={'/register'}>Don't have an account?<span> Register</span></Link>
      </form>
    </div>
  )
}

export default LoginPage
