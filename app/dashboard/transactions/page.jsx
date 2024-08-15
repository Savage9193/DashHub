import Image from "next/image"
import styles from '@/app/ui/transactions/transactions.module.css'

const TransactionPage = () => {
  return (
    <div className={styles.container1}>
      {/* <h2 className={styles.title}>Latest Transactions</h2> */}
      <table className={styles.table}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Status</td>
                <td>Date</td>
                <td>Amount</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        Shahvez Tyagi
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>14.02.2024</td>
                <td>$999</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        Husain
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>14.02.2024</td>
                <td>$999</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        Adil Tyagi
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.done}`}>
                        Done
                    </span>
                </td>
                <td>14.02.2024</td>
                <td>$999</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                        Ziya Tyagi
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.cancel}`}>
                        Cancelled
                    </span>
                </td>
                <td>14.02.2024</td>
                <td>$999</td>
            </tr>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/avatar.png"
                        alt=""
                        width={40}
                        height={40}/>
                        Sadik Tyagi
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.done}`}>
                        Done
                    </span>
                </td>
                <td>14.02.2024</td>
                <td>$999</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TransactionPage
