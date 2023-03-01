import styles from './style.module.css';

export default function Button({ onClick, children, variant }) {
    return (
        <button
            className={styles.ButtonClass} 
            onClick={onClick}
            variant={variant}
        >
            <h3>
                {children}
            </h3>
        </button>
    )
}