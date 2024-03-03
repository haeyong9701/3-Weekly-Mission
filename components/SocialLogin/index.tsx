import Link from "next/link";
import Image from "next/image";
import { SocialLoginProps } from "@/lib/types";
import styles from "./SocialLogin.module.css";

const SocialLogin = ({ children }: SocialLoginProps) => {
  return (
    <div className={styles.SocialLogin}>
      <span className={styles.text}>{children}</span>
      <div className={styles.links}>
        <Link href="https://www.google.com">
          <div className={`${styles["icon-box"]} ${styles.google}`}>
            <div className={styles.image}>
              <Image fill src="/assets/google.png" alt="구글 로그인" />
            </div>
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <div className={`${styles["icon-box"]} ${styles.kakao}`}>
            <div className={styles.image}>
              <Image fill src="/assets/kakao.svg" alt="카카오 로그인" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialLogin;
