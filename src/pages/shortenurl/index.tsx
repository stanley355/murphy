import React from "react"
import classNames from "classnames";
import { FaSun } from 'react-icons/fa';

import ShorturlForm from "../../components/Forms/ShorturlForm/ShorturlForm";

import useResponsive from "../../utils/useResponsive";

import styles from './Shortenurl.module.scss';

const ShortenURL = () => {
  const { isDesktop } = useResponsive();

  return (
    <div className={styles.shortenurl}>
      <div className={isDesktop ? "container" : ""}>
        <div className={styles.shortenurl__singleurlForm}>
          <div className={styles.shortenurl__singleurlForm__texts}>
            <h1>Short links, big results</h1>
            <h2>A URL shortener built with powerful tools to help you grow and protect your brand.</h2>
          </div>
          <ShorturlForm />
        </div>
      </div>

      {/* To do: Ponder the UI for file upload */}
      {/* <div className={styles.shortenurl__bulkurlForm}>
        <div className={classNames(isDesktop ? "container" : "")}>
          <h1>Want to convert more URL to short links?</h1>
          <h2>Rest easy, here comes the sun <FaSun /> </h2>
        </div>
      </div> */}
      <div className={styles.shortenurl__faq}>
        <div className={isDesktop ? "container" : ""}>
          <h1>Frequently asked questions</h1>

          <div className={styles.shortenurl__faq__question}>
            <span>What is a URL Shortener?</span>
            <ul>
              <li>A URL shortener, also known as a link shortener, seems like a simple tool, but it is a service that can have a dramatic impact on your marketing efforts.</li>
              <li>Link shorteners work by transforming any long URL into a shorter, more readable link. When a user clicks the shortened version, they are automatically forwarded to the destination URL.</li>
              <li>Think of a short URL as a more descriptive and memorable nickname for your long webpage address. You can, for example, use a short URL like bit.ly/CelebrateBitly so people will have a good idea about where your link will lead before they click it.</li>
              <li>If you are contributing content to the online world, you need a URL shortener.</li>
              <li>Make your URLs stand out with our easy to use free link shortener above.</li>
            </ul>
          </div>

          <div className={styles.shortenurl__faq__question}>
            <span>Benefits of a Short URL</span>
            <ul>
              <li>How many people can even remember a long web address, especially if it has tons of characters and symbols? A short URL can make your link more memorable. Not only does it allow people to easily recall and share your link with others, it can also dramatically improve traffic to your content.</li>
              <li>On a more practical side, a short URL is also easier to incorporate into your collateral, whether you are looking to engage with your customers offline or online.</li>
              <li>Marph is the best URL shortener for everyone, from influencers to small brands to large enterprises, who are looking for a simple way to create, track and manage their links.</li>
            </ul>
          </div>

          <div className={styles.shortenurl__faq__question}>
            <span>What is a Custom URL Shortener?</span>
            <ul>
              <li>For example, instead of marph.herokuapp.com/xyz123, you could use a custom short URL like marph.herokuapp.com/yourbrnd.</li>
              <li>There are several benefits of branding your short links. Branded links build trust between your audience and your business, drive more clicks, give your audience a preview of where they are being taken and increase brand awareness.</li>
              <li>A link shortening service that includes custom short URLs is vital to improving audience engagement with your communications. A short URL is good, but a custom URL works every time.</li>
            </ul>
          </div>

          <div className={styles.shortenurl__faq__question}>
            <span>Why choose Marph?</span>
            <ul>
              <li>Whether you are sharing one link or millions, our platform was built to help you make every point of connection between your content and your audience ignite action.</li>
              <li>That is why the most recognized brands in the world love our platform.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortenURL;
