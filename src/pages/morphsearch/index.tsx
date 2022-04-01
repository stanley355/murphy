import React from 'react';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import styles from './morphsearch.module.scss';
import MetaHead from '../../components/Head/Head';
import morphsearchFeatures from '../../clients/json/morphsearch_feature.json';
import useResponsive from '../../utils/useResponsive';
import MorphsearchMeta from '../../../public/seo/morphsearch.json';

const Morphsearch = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className={styles.morphsearch}>
      <MetaHead meta={MorphsearchMeta}/>
      <div className='container'>
        <h1 className={styles.morphsearch__title}>Morphsearch: The next generation of search</h1>
        <div className={styles.morphsearch__subtitle}>An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.</div>
        
        <div className={styles.morphsearch__features}>
          {morphsearchFeatures.features.map((feature) => {
            return (
              <div className={styles.morphsearch__features__card}  key={feature.title}>
                <div className={styles.morphsearch__features__card__title}>{feature.title}</div>
                <div className={styles.morphsearch__features__card__subtitle}>{feature.subtitle}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.morphsearch__requestCopy}>
          <h3>API Endpoint:</h3>
          <div className={styles.morphsearch__requestCopy__head}>
            <span>POST</span>
            <span>https://morphsearch.herokuapp.com/api/v1/</span>
          </div>
          <div className={styles.morphsearch__requestCopy__body}>
            <div>Body:</div>
            <ul>
              <li>word (String): ... (The target word you want to search)</li>
              <li>word_array (Array of String): [...] (List of word that you want to search through) </li>
            </ul>
          </div>
        </div>

        <div>
          <Image
            src="/images/homepage/search_example.webp"
            width={isDesktop ? 1000 : 400}
            height={isDesktop ? 450 : 350}
          />
        </div>

        <div className={styles.morphsearch__note}>*: The search feature hasn't been optimized, please help for optimization and update by raising a Pull Request to <a href="https://github.com/stanley355/murphsearch">Morphsearch Github <FaGithub /></a> </div>
      </div>
    </div>
  )
}

export default Morphsearch;
