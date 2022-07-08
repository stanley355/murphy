import getConfig from "next/config";
import MetaHead from "../../../../../components/Head/Head";

const { BASE_URL } = getConfig().publicRuntimeConfig;

const PlanMeta = () => {
  const META = {
    title: "Top 9 Best Web Hosting Plans in 2022 - Marph",
    siteName: "Marph Web Hosting and Services",
    description: "Select & compare all Web Hosting Plans that suit your needs!",
    url: `${BASE_URL}/plans/`,
    keywords: "Marph, Web Hosting, Web Services",
    openGraph: {
      title: "Top 9 Best Web Hosting Plans in 2022 - Marph",
      description: "Select & compare all Web Hosting Plans that suit your needs!",
      modifiedTime: new Date().toDateString(),
      publishedTime: 'Fri Jul 8 2022 09:15:06 GMT+0700 (Western Indonesia Time)',
    },
    twitter: {
      site: "Marph Web Hosting and Services",
      title: "Top 9 Best Web Hosting Plans in 2022 - Marph",
      description: "Select & compare all Web Hosting Plans that suit your needs!"
    }
  }

  return <MetaHead meta={META} />
}

export default PlanMeta;