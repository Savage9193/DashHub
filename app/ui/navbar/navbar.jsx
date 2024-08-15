// "use client"

// import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';
// import styles from '@/app/ui/navbar/navbar.module.css'
// import { usePathname } from "next/navigation"


// const Navbar = () => {
//     const pathname = usePathname();

//   return (
//     <div className={styles.container}>
//       <div className={styles.title}>{pathname.split("/").pop()}</div>
//       <div className={styles.menu}>
//         <div className={styles.search}>
//             <MdSearch/>
//             <input type="text" placeholder="Search..." className={styles.input}/>
//         </div>
//         <div className={styles.icons}>
//             <MdOutlineChat size={20}/>
//             <MdNotifications size={20}/>
//             <MdPublic size={20}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


"use client";

import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';
import styles from '@/app/ui/navbar/navbar.module.css';
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    // Handlers for each icon click
    const handleChatClick = () => {
        router.push('/chat'); // Navigate to chat page
    };

    const handleNotificationsClick = () => {
        router.push('/notifications'); // Navigate to notifications page
    };

    const handlePublicClick = () => {
        router.push('/public'); // Navigate to public page
    };

    const handleSearch = (event) => {
        // Handle search logic here
        console.log('Search:', event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}>
                <div className={styles.search}>
                    <MdSearch size={20} />
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className={styles.input} 
                        onChange={handleSearch}
                    />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20} onClick={handleChatClick} />
                    <MdNotifications size={20} onClick={handleNotificationsClick} />
                    <MdPublic size={20} onClick={handlePublicClick} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
