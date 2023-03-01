import styles from './style.module.css';

export default function Button({ onClick, href, children, variant }) {
    return (
        <button
            className={styles.ButtonClass} 
            onClick={onClick} 
            href={href}
            variant={variant}
        >
            <h3>
                {children}
            </h3>
        </button>
    )
}