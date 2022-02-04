import styles from './ShortenerForm.module.scss';
import React, { useState } from 'react';
import getConfig from 'next/config';
import axios from 'axios';

const { MORPH_URL } = getConfig().publicRuntimeConfig;

const ShortenerForm = () => {
  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");

  const urlShortenerHandler = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const origin_url = event.target.origin_url.value;
    const custom_url = event.target.custom_url.value;

    const urlArr = origin_url.split('/');
    if (!urlArr.includes('http') || !urlArr.includes('https') || urlArr.length < 3) { //validation
      alert("Please enter correct URL with http or https");
      window.location.reload;
    } else {
      const response = await axios.post('/api/shortenurl', {
        origin_url, custom_url
      });

      if (response && response.data && response.data.origin_url) {
        const url = `${MORPH_URL}/link/${response.data.custom_url !== "" ? response.data.custom_url : response.data.hashed_url}`;
        setFinalUrl(url);
      } else {
        alert("System Error, please try again");
        window.location.reload;
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
