import styles from "@/styles/SocialMedia.module.css";
interface SocialMediaProps {
  isReverse?: boolean;
}
const SocialMedia = ({ isReverse = false }: SocialMediaProps) => {
  const style = isReverse ? styles.reverse : styles.standard;
  return (
    <ul className={`${style} ${styles.social_media__ul}`}>
      <li>
        <img src="/images/badge-ln.svg" alt="badge" aria-label="badge__ln" />
      </li>
      <li>
        <img src="/images/badge-in.svg" alt="badge" aria-label="badge__in" />
      </li>
      <li>
        <img src="/images/badge-fb.svg" alt="badge" aria-label="badge__fb" />
      </li>
    </ul>
  );
};
export default SocialMedia;
