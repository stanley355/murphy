import React from 'react';
import { FaCloud, FaBuffer, FaRegCopyright } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  const hostList = [
    {
      id: 4,
      name: 'Vercel',
      url: 'https://vercel.com/',
    },
    {
      id: 3,
      name: 'Netlify',
      url: 'https://www.netlify.com/',
    },
    {
      id: 5,
      name: 'Heroku',
      url: 'https://www.heroku.com',
    },
    {
      id: 8,
      name: 'Google Cloud Platform',
      url: 'https://cloud.google.com/',
    },
    {
      id: 1,
      name: 'Gitlab',
      url: 'https://gitlab.com/',
    },
    {
      id: 2,
      name: 'Github',
      url: 'https://github.com/',
    },
    {
      id: 6,
      name: 'Digital Ocean',
      url: 'https://www.digitalocean.com/',
    },
    {
      id: 7,
      name: 'Amazon Web Services',
      url: 'https://aws.amazon.com/',
    },
  ];

  const planList = [
    {
      id: 9,
      hosts_id: 1,
      name: 'Gitlab Pages',
      plan_url: 'https://docs.gitlab.com/ee/user/project/pages/',
    },
    {
      id: 8,
      hosts_id: 2,
      name: 'Github Pages',
      plan_url: 'https://docs.github.com/en/pages/quickstart',
    },

    {
      id: 4,
      hosts_id: 4,
      name: 'Vercel Hobby',
      plan_url: 'https://vercel.com/new',
    },
    {
      id: 5,
      hosts_id: 4,
      name: 'Vercel Pro',
      plan_url: 'https://vercel.com/signup?next=/dashboard?createTeam=true',
    },
    {
      id: 6,
      hosts_id: 4,
      name: 'Vercel Enterprise',
      plan_url: 'https://vercel.com/pricing',
    },
    {
      id: 1,
      hosts_id: 3,
      name: 'Netlify Starter',
      plan_url: 'https://app.netlify.com/signup',
    },
    {
      id: 2,
      hosts_id: 3,
      name: 'Netlify Pro',
      plan_url: 'https://app.netlify.com/?upgrade_pro=true',
    },
    {
      id: 3,
      hosts_id: 3,
      name: 'Netlify Business',
      plan_url: 'https://app.netlify.com/?upgrade_business=true',
    },
    {
      id: 7,
      hosts_id: 3,
      name: 'Netlify Enterprise',
      plan_url: 'https://www.netlify.com/enterprise/contact/',
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.footer__top__section}>
            <div className={styles.footer__top__section__title}>
              <FaCloud /> Web Hosts:{' '}
            </div>
            {hostList.map((host) => (
              <Link href={host.url} key={host.name}>
                <a title={host.name}>{host.name}</a>
              </Link>
            ))}
          </div>
          <div className={styles.footer__top__section}>
            <div className={styles.footer__top__section__title}>
              <FaBuffer /> Hosting Plans:{' '}
            </div>
            {planList.map((plan) => (
              <Link href={plan.plan_url} key={plan.name}>
                <a title={plan.name}>{plan.name}</a>
              </Link>
            ))}
          </div>
          <div className={styles.footer__top__section}>
            <div className={styles.footer__top__section__title}>PT. Komunikasi Istimewa</div>
            <div>Chubb Square, 9th Floor, Jl. M.H. Thamrin No.10, RT.14/RW.20, Kb. Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230</div>
            <div>support@marph.com</div>
            <div>(021) 30006718</div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          Copyright <FaRegCopyright /> PT. Komunikasi Istimewa
        </div>
      </div>
    </footer>
  );
};

export default Footer;
