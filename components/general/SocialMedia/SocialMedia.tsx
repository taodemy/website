import styles from "@/styles/SocialMedia.module.css";
interface SocialMediaProps {
  isReverse?: boolean;
}
const SocialMedia = ({ isReverse = false }: SocialMediaProps) => {
  const style = isReverse ? styles.reverse : styles.standard;
  return (
    <ul className={`${style} ${styles.social_media__ul}`}>
      <li>
        <img src="/images/badge-ln.svg" alt="badge" aria-label="First social media" />
      </li>
      <li>
        <img src="/images/badge-in.svg" alt="badge" aria-label="Second social media" />
      </li>
      <li>
        <img src="/images/badge-fb.svg" alt="badge" aria-label="Third social media" />
      </li>
    </ul>
  );
};
export default SocialMedia;
