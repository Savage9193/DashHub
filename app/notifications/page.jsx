// "use client";

// import { useState } from 'react';
// import styles from '@/app/ui/notifications/notifications.module.css'; 
// import Link from 'next/link';

// const NotificationPage = () => {
//     const [notifications, setNotifications] = useState([]);
//     const [input, setInput] = useState('');

//     const handleAddNotification = () => {
//         if (input.trim()) {
//             setNotifications([...notifications, input]);
//             setInput('');
//         }
//     };

//     const handleClearNotifications = () => {
//         setNotifications([]);
//     };

//     return (
        
//         <div className={styles.container}>
//             <h1 className={styles.title}>Notifications</h1>
//             <div className={styles.notificationWindow}>
//                 {notifications.map((notification, index) => (
//                     <div key={index} className={styles.notification}>
//                         {notification}
//                     </div>
//                 ))}
//             </div>
//             <div className={styles.inputArea}>
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type your notification..."
//                     className={styles.input}
//                 />
//                 <button onClick={handleAddNotification} className={styles.addButton}>
//                     Add Notification
//                 </button>
//                 <button onClick={handleClearNotifications} className={styles.clearButton}>
//                     Clear Notifications
//                 </button>
//                 <Link href='/dashboard'>
//                 <button  className={styles.navigateButton}>
//                     Go to Dashboard
//                 </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default NotificationPage;

"use client";

import { useState } from 'react';
import styles from '@/app/ui/notifications/notifications.module.css'; 
import Link from 'next/link';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [input, setInput] = useState('');

    const handleAddNotification = () => {
        if (input.trim()) {
            setNotifications([...notifications, input]);
            setInput('');
        }
    };

    const handleClearNotifications = () => {
        setNotifications([]);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Notifications</h1>
            <div className={styles.notificationWindow}>
                {notifications.map((notification, index) => (
                    <div key={index} className={styles.notification}>
                        {notification}
                    </div>
                ))}
            </div>
            <div className={styles.inputArea}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your notification..."
                    className={styles.input}
                />
                <button onClick={handleAddNotification} className={styles.addButton}>
                    Add Notification
                </button>
                <button onClick={handleClearNotifications} className={styles.clearButton}>
                    Clear Notifications
                </button>
                <Link href='/dashboard'  className={styles.navigateButton}>
                        Go to Dashboard
                  
                </Link>
            </div>
        </div>
    );
};

export default NotificationPage;
