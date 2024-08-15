"use client"
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import styles from '@/app/ui/login/login.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <div className={styles.form}>
      <h1>Sign In</h1>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
      <button onClick={() => signIn('linkedin')}>Sign in with LinkedIn</button>
    </div>
    </div>
    
  )
}
