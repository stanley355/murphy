import getConfig from "next/config"
import MetaHead from "../../../../../components/Head/Head"

const { BASE_URL } = getConfig().publicRuntimeConfig;

const ProductMeta = () => {
  const META = {
    title: "The Best Web Services That Fit Your Needs in 2022",
    siteName: "Marph Web Hosting and Services",
    description: "Marph offers an array of Web Products and Packages optimized for your needs. Visit us & learn about our Web Service options!",
    url: `${BASE_URL}/products/`,
    keywords: "Marph, Web Hosting, Web Services",
    openGraph: {
      title: "The Best Web Services That Fit Your Needs in 2022",
      description: "Marph offers an array of Web Products and Packages optimized for your needs. Visit us & learn about our Web Service options!",
      modifiedTime: new Date().toDateString(),
      publishedTime: 'Fri Jul 8 2022 09:15:06 GMT+0700 (Western Indonesia Time)',
    },
    twitter: {
      site: "Marph Web Hosting and Services",
      title: "The Best Web Services That Fit Your Needs in 2022",
      description: "Marph offers an array of Web Products and Packages optimized for your needs. Visit us & learn about our Web Service options!",
    }
  }

  return <MetaHead meta={META} />
}

export default ProductMeta;