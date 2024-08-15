"use client";

import { useRouter } from 'next/navigation';
import styles from '@/app/ui/public/public.module.css'; // Ensure this path is correct

const PublicPage = () => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push('/dashboard'); // Navigate to the dashboard
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Public Page</h1>
            <div className={styles.content}>
                <p>Welcome to the public page! Here, you can find some general information that is available to everyone.</p>
                <p>This page is designed to be accessible without needing to sign in, so feel free to explore and learn more about our platform.</p>
                <button onClick={handleNavigate} className={styles.navigateButton}>
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default PublicPage;
