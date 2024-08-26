
"use client";

import Image from "next/image";
import styles from '@/app/ui/sidebar/sidebar.module.css';

import {
  MdAttachMoney,
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import { useSession, signOut } from 'next-auth/react';


const menuItems = [
  {
    title: "Users",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      },
    ],
  },
]

const Sidebar = () => {
  const { data: session } = useSession();
  // const router = useRouter();

  // const handleAuthClick = () => {
  //   if (session) {
  //     signOut(); 
  //     router.push("/"); 
  //   } else {
  //     router.push('/login'); 
  //   }
  // };



  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/avatar.png"
          alt="user image"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.userTitle}>
            {session?.user?.username || session?.user?.name || 'User'}
          </span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
          <li key={item.title}>
            <span className={styles.item}>{item.title}</span>
            {
              item.list.map((i) => (
                <MenuLink item={i} key={i.title} />
              ))
            }
          </li>
        ))}
      </ul>
      <div className={styles.authButton}>
        <button className={styles.button} onClick={() => signOut()}>
          {session ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

