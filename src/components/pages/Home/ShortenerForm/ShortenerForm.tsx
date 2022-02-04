import styles from './ShortenerForm.module.scss';
import React from 'react';

const ShortenerForm = () => {
  const urlShortenerHandler = (event: any) => {
    event.preventDefault();
    const origin_url = event.target.origin_url.value;

    console.log(origin_url);
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
        <button type="submit">Shortenize</button>
      </form>
    </div>
  );
}

export default ShortenerForm;
