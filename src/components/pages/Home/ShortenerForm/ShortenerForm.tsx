import styles from './ShortenerForm.module.scss';
import React, { useState } from 'react';
import getConfig from 'next/config';
import axios from 'axios';

const { MARPH_URL } = getConfig().publicRuntimeConfig;

const ShortenerForm = () => {
  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");

  const urlShortenerHandler = async (event: any) => {
    event.preventDefault();

    const originURL = event.target.origin_url.value;
    const customURL = event.target.custom_url.value;

    if (!originURL.includes('http') || !originURL.includes('https')) { //validation
      alert("Please enter correct URL with http or https");
    } else {
      setLoading(true);
      const response = await axios.post('/api/shortenurl', {
        origin_url: originURL,
        custom_url: customURL
      });

      if (response && response.data && response.data.origin_url) {
        const url = `${MARPH_URL}/link/${response.data.custom_url !== "" ? response.data.custom_url : response.data.hashed_url}`;
        setFinalUrl(url);
        setLoading(false);
      } else {
        alert("System Error, please try again");
        setLoading(false);
      }
    }
  }

  return (
    <div className={styles.shortenerForm}>
      <p className={styles.shortenerForm__title}>Shortenize your Long URL here!</p>
      <form onSubmit={(e) => urlShortenerHandler(e)} className={styles.shortenerForm__form}>
        <div className={styles.shortenerForm__form__inputContainer}>
          <label htmlFor="origin_url">Your URL:</label>
          <input id="origin_url" type="text" />
        </div>

        <div className={styles.shortenerForm__form__inputContainer}>
          <label htmlFor="custom_url">Custom URL (empty it if unnecessary):</label>
          <input id="custom_url" type="text" />
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Shortenize'}</button>
      </form>

      {finalUrl !== "" && <p>Your link is: {finalUrl}</p>}
    </div>
  );
}

export default ShortenerForm;
