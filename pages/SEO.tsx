import Head from "next/head";

interface ISeo {
  title: string;
}

function SEO({ title }: ISeo) {
  return (
    <Head>
      <title>{`ASK TRAVEL : ${title}`}</title>
    </Head>
  );
}

export default SEO;
