import React from "react"
import classNames from "classnames";
import ShorturlForm from "../../components/Forms/ShorturlForm/ShorturlForm";

import useResponsive from "../../utils/useResponsive";

import styles from './Shortenurl.module.scss';

const ShortenURL = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className={styles.shortenurl}>
      <div className={classNames(isDesktop ? "container" : "")}>
        <div className={styles.shortenurl__singleurlForm}>
          <div className={styles.shortenurl__singleurlForm__texts}>
            <h1>Short links, big results</h1>
            <h2>A URL shortener built with powerful tools to help you grow and protect your brand.</h2>
          </div>
          <ShorturlForm />
        </div>
      </div>
    </div>
  )
}

export default ShortenURL;
