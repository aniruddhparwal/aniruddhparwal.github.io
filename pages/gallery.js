import React, { useEffect, useState } from "react";
import Head from "next/head";
import Masonry from "react-masonry-css";
import Footer from "@/components/Footer/Footer";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images from the API route
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/gallery");
        const data = await response.json();
        const suffle = data.images.sort((a, b) => 0.5 - Math.random());
        setImages(suffle);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Head>
        <title>Aniruddh Parwal - Gallery</title>
        <link rel="icon" href="/aniruddh.jpg" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>

      <div className="bg-darkBg text-darkText min-h-screen py-10 px-5">
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          Photo Gallery
        </h1>

        {loading ? (
          <p className="text-center text-xl">Loading...</p>
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((image, index) => (
              <div key={index} className="mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </Masonry>
        )}

        <div className="mt-10 flex justify-center">
          <Footer />
        </div>
      </div>

      <style jsx global>{`
        .my-masonry-grid {
          display: flex;
          margin-left: -15px; /* gutter size offset */
          width: auto;
        }
        .my-masonry-grid_column {
          padding-left: 15px; /* gutter size */
          background-clip: padding-box;
        }
      `}</style>
    </>
  );
};

export default GalleryPage;
