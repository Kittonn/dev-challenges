import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Uploader🚀</title>
        <meta name="description" content="Image uploader made by kitton.🚀" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <main>
        <h1>Image Uploader🚀</h1>
        <input type="file" accept=".jpg,.jpeg,.png" />
      </main>
    </>
  );
}
