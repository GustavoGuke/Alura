import Link from 'next/link';
import styles from './button.module.css'

export const Button = ({ children, outline, href }) => {
    if (href) {
        return (
            <Link href={href} className={outline ? styles.outline : styles.btn}>
                {children}
            </Link>
        );
    }

    return (
        <button className={outline ? styles.outline : styles.btn}>
            {children}
        </button>
    );
}