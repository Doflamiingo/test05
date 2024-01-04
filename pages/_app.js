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
    
      // Get the current page element
      const currentPageElement = document.documentElement || document.body; // This should be the element that you're scrolling
    
      // Check if the user is at the top or the bottom of the page
      const isAtTop = currentPageElement.scrollTop === 0;
      const isAtBottom = currentPageElement.scrollHeight - currentPageElement.scrollTop === currentPageElement.clientHeight;
    
      if (e.deltaY > 0 && isAtBottom) {
        // Scrolling down and user is at the bottom of the page
        nextIndex = Math.min(currentIndex + 1, pages.length - 1);
      } else if (e.deltaY < 0 && isAtTop) {
        // Scrolling up and user is at the top of the page
        nextIndex = Math.max(currentIndex - 1, 0);
      } else {
        // User is not at the top or bottom of the page, so we don't change the page
        return;
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
