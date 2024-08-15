import styles from '@/app/ui/login/login.module.css'
import { authenticate } from '../lib/action'
import Link from 'next/link'


const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type='text' placeholder='username' name='username'/>
        <Link href='/api/auth/sign'>github</Link>
        <input type='password' placeholder='password' name='password'/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
