import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ label, href, onClick, size = "medium", variant = "primary" }) => {
  const className = `${styles.button} ${styles[size]} ${styles[variant]}`;

  // Lien interne
  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  // Bouton classique / action externe
  return (
    <button className={className} onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
