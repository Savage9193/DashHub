// import Navbar from "../ui/navbar/navbar"
// import Sidebar from "../ui/sidebar/sidebar"
// import styles from '@/app/ui/dashboard/dashboard.module.css'
// const layout = ({children}) => {
//   return (
//     <div className={styles.container}>
//     <div className={styles.menu}>
//       <Sidebar/>
//     </div>
//     <div className={styles.content}>
//       <Navbar/>
//       {children}
//     </div>
//     </div>
//   )
// }

// export default layout

"use client"
// app/layout.tsx or app/layout.js
import { SessionProvider } from 'next-auth/react';
import Navbar from '../ui/navbar/navbar';
import Sidebar from '../ui/sidebar/sidebar';
import styles from '@/app/ui/dashboard/dashboard.module.css';
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionProvider>
          <div className={styles.container}>
            <div className={styles.menu}>
              <Sidebar />
            </div>
            <div className={styles.content}>
              <Navbar />
              {children}
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
