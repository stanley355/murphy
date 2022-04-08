import React from "react";
import Image from "next/image";
import Link from "next/link";
import useResponsive from "../../../../utils/useResponsive";
import styles from './MorphsearchCopy.module.scss';

const MorphsearchCopy = () => {
  const { isDesktop } = useResponsive();

  const RequestCopy = () => {
    return (
      <div className={styles.morphsearchCopy__requestCopy}>
        <div className={styles.morphsearchCopy__requestCopy__head}>
          <span>POST</span>
          <span>https://morphsearch.herokuapp.com/api/v1/</span>
        </div>
        <div className={styles.morphsearchCopy__requestCopy__body}>
          <div>Body:</div>
          <ul>
            <li>word (String): ... (The target word you want to search)</li>
            <li>word_array (Array of String): [...] (List of word that you want to search through) </li>
          </ul>
        </div>
        {isDesktop && <Link href="/morphsearch">
          <a title="Morph Search" className={styles.morphsearchCopy__requestCopy__cta}>
            See more
          </a>
        </Link>}
      </div>
    )
  }

  return (
    <div className={styles.morphsearchCopy}>
      <div className="container">
        <div className={styles.morphsearchCopy__top}>
          <div className={styles.morphsearchCopy__top__title}>
            Morphsearch: The next generation of search
          </div>
          <div className={styles.morphsearchCopy__top__subtitle}>
            An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.
          </div>
        </div>
        <div className={styles.morphsearchCopy__bottom}>
          <RequestCopy />
          <div>
            <Image
              src="/images/homepage/search_example.webp"
              width={isDesktop ? 650 : 400}
              height={isDesktop ? 400 : 350}
            />
          </div>

          {!isDesktop && <Link href="/morphsearch">
          <a title="Morph Search" className={styles.morphsearchCopy__requestCopy__cta}>
            See more
          </a>
        </Link>}
        </div>

        
      </div>
    </div>
  )
}

export default MorphsearchCopy;
