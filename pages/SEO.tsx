import Head from "next/head";

interface ISeo {
  title: string;
}

/* SEO(Search Engine Optimization) title, meta 정리 */
function SEO({ title }: ISeo) {
  return (
    <Head>
      <title>{`ASK TRAVEL : ${title}`}</title>
    </Head>
  );
}

export default SEO;
