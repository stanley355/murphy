import React from 'react';

import { FaLink, FaPenAlt } from 'react-icons/fa';

import styles from './ShorturlForm.module.scss';

const ShorturlForm = () => {
  return (
    <div className={styles.shortenurlForm}>
      <form action="POST" className={styles.shortenurlForm__form}>
        <div className={styles.shortenurlForm__field}>
          <label htmlFor='origin_url'><FaLink /> Enter a long URL to make short URL</label>
          <input type="text" name="origin_url" id="origin_url" className={styles.shortenurlForm__field__originurlInput} />
        </div>
        <div className={styles.shortenurlForm__field}>
          <label htmlFor='custom_url' ><FaPenAlt /> Customize your link</label>
          <div className={styles.shortenurlForm__field__customurl}>
            <div>marph.herokuapp.com</div>
            <input type="text" name="custom_url" id="custom_url" placeholder='alias' />
          </div>
        </div>

        <button type="submit" className={styles.shortenurlForm__submitBtn}>Show me the Magic!</button>
      </form>
    </div>
  )
}

export default ShorturlForm;
