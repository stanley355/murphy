import React from "react";
import Image from "next/image";
import Link from "next/link";
import useResponsive from "../../../utils/useResponsive";
import styles from './ShortenurlCopy.module.scss';

const ShortenurlCopy = () => {
  const { isDesktop } = useResponsive();

  const RequestCopy = () => {
    return (
      <div className={styles.shortenurlCopy__requestCopy}>
        <div className={styles.shortenurlCopy__requestCopy__head}>
          <span>POST</span>
          <span>https://shortenurl.herokuapp.com/api/v1/</span>
        </div>
        <div className={styles.shortenurlCopy__requestCopy__body}>
          <div>Body:</div>
          <ul>
            <li>origin_url (String): ... (The target URL you want to shortenize)</li>
            <li>hashed_url (String): ... (Empty string, will remove this payload on next optimization)</li>
            <li>custom_url (String): ... (any custom URL, leave it blank if you don't want it) </li>
          </ul>
        </div>
        <Link href="/shortenurl">
          <a title="Marph Shorten URL API" className={styles.shortenurlCopy__requestCopy__cta}>
            See more
          </a>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.shortenurlCopy}>
      <div className="container">
        <div className={styles.shortenurlCopy__top}>
          <div className={styles.shortenurlCopy__top__title}>
            Shorten URL API
          </div>
          <div className={styles.shortenurlCopy__top__subtitle}>
          URL shortener built with powerful tools to help you grow and protect your brand.
          </div>
        </div>
        <div className={styles.shortenurlCopy__bottom}>
          <RequestCopy />
          <div>
            <Image
              src="/images/homepage/shortenurl_example.webp"
              width={isDesktop ? 650 : 400}
              height={isDesktop ? 450 : 350}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortenurlCopy;
