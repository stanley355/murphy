import styles from './DOCS.module.scss';
import React from 'react';
import { FaLink } from "react-icons/fa";

const HomeDOCS = () =>{
  return (
    <div className={styles.homeDOCS} id="docs">
      <div className={styles.homeDOCS__title}>DOCS for Developers</div>

      <div className={styles.homeDOCS__services}>
        <div> <FaLink /> Shorten URL</div>
        <div className={styles.homeDOCS__services__endpoint}>GET: https://morph.herokuapp.com/api/shortenurl/[url]</div>
        <div className={styles.homeDOCS__services__endpoint}>POST: https://morph.herokuapp.com/api/shortenurl</div>
        <a href="/shortenurl">See More</a>
      </div>
    </div>
  )
}

export default HomeDOCS;
