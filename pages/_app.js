import "../styles/globals.css";
import "../public/fonts/fonts.css";

import Layout from "../components/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const pages = ['/', '/about', '/work', '/testimonials', '/contact']; // Liste des URLs de vos pages

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = (e) => {
      const currentIndex = pages.indexOf(router.pathname);
      let nextIndex;

      if (e.deltaY > 0) {
        // Scrolling down
        nextIndex = Math.min(currentIndex + 1, pages.length - 1);
      } else {
        // Scrolling up
        nextIndex = Math.max(currentIndex - 1, 0);
      }

      router.push(pages[nextIndex]);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [router]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
