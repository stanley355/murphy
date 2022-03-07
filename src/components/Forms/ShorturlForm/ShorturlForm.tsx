import React, { useState } from 'react';
import { FaLink, FaPenAlt } from 'react-icons/fa';
import getConfig from 'next/config';

import RestClient from '../../../lib/RestClient';

import styles from './ShorturlForm.module.scss';

const { BASE_URL } = getConfig().publicRuntimeConfig;

const ShorturlForm = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  const [copiedText, setCopiedText] = useState(false);

  const singleurlHandler = async (e: any) => {
    e.preventDefault();
    setBtnLoading(true);

    const originURL = e.target.origin_url.value;
    const customURL = e.target.custom_url.value;

    const config = {
      method: "POST",
      url: `${BASE_URL}/api/shortenurl/singleurl`
    }

    if (originURL.includes('http') || originURL.includes('https')) {
      const response = await RestClient(config, {
        origin_url: originURL,
        custom_url: customURL
      });

      const shortUrl = response.custom_url !== "" ? `${BASE_URL}/${response.custom_url}` : `${BASE_URL}/${response.hashed_url}`;

      setFinalUrl(shortUrl);
      setBtnLoading(false);
    } else {
      alert("Please include url with http or https");
      setBtnLoading(false);
    }
  }

  const copyToClipboard = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.final_url.value);
    setCopiedText(true);
  }

  const SingleurlForm = () => {
    return (
      <form onSubmit={(e) => singleurlHandler(e)} className={styles.shortenurlForm__form}>
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

        <button
          type="submit"
          disabled={btnLoading}
          className={styles.shortenurlForm__submitBtn}
        >
          {btnLoading ? "Processing the magic..." : "Show me the Magic!"}
        </button>
      </form>
    );
  }

  const FinalurlForm = () => {
    // To do: create copy to clipboard function
    return (
      <form onSubmit={(e) => copyToClipboard(e)} className={styles.shortenurlForm__form}>
        <div className={styles.shortenurlForm__field}>
          <label htmlFor='final_url'><FaLink /> Hooray, the magic is done!</label>
          <input
            type="text"
            value={finalUrl}
            name="final_url"
            id="final_url"
            className={styles.shortenurlForm__field__finalurlInput}
          />
        </div>
        <button type="submit" className={styles.shortenurlForm__submitBtn}>{copiedText ? "Copied to Clipboard" : "Copy Text to Clipboard"}</button>
        <button
          onClick={() => setFinalUrl("")}
          className={styles.shortenurlForm__anotherBtn}
        >Create another one</button>
      </form>
    )
  }


  return (
    <div className={styles.shortenurlForm}>
      {finalUrl === "" ? <SingleurlForm /> : <FinalurlForm />}
    </div>
  )
}

export default ShorturlForm;
