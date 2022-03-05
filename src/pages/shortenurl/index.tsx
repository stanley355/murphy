import React from "react"

import ShorturlForm from "../../components/Forms/ShorturlForm/ShorturlForm";

import styles from './Shortenurl.module.scss';

const ShortenURL = () =>{
  return(
    <div className={styles.shortenurl}>
      <div className={styles.shortenurl__texts}>
        <h1>Short links, big results</h1>
        <h2>A URL shortener built with powerful tools to help you grow and protect your brand.</h2>
      </div>
      <ShorturlForm />
    </div>
  )
}

export default ShortenURL;
