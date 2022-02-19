import styles from './DocsCard.module.scss';
import React from 'react';
import { FaLink } from "react-icons/fa";

const DocsCard = () =>{
  return (
    <div className={styles.docsCard} id="docs">
      <div className={styles.docsCard__title}>DOCS for Developers</div>

      <div className={styles.docsCard__services}>
        <div> <FaLink /> Shorten URL</div>
        <div className={styles.docsCard__services__endpoint}>GET: https://marph.herokuapp.com/api/shortenurl/[url]</div>
        <div className={styles.docsCard__services__endpoint}>POST: https://marph.herokuapp.com/api/shortenurl</div>
        <a href="/shortenurl">See More</a>
      </div>
    </div>
  )
}

export default DocsCard;
