import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/src/components/Layout/Header/Header";
import Footer from "@/src/components/Layout/Footer/Footer";
import MainBanner from "@/src/components/MainBanner/MainBanner";
import NewsSubscribe from "@/src/components/NewsSubscribe/NewsSubscribe";
import Insights from "@/src/components/Insights/Insights";
import NewProjects from "@/src/components/NewProjects/NewProjects";
import PlacesSwiper from "@/src/components/PlacesSwiper/PlacesSwiper";
import Features from "@/src/components/Features/Features";
import SecondBanner from "@/src/components/SecondBanner/SecondBanner";
import Map from "@/src/components/Map/Map";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>Aqar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.page}>
          <Header setShowSidebar={setShowSidebar} />
          <MainBanner />
          <PlacesSwiper />
          <Features />
          <Map />
          <SecondBanner />
          <NewProjects />
          <Insights />
          <NewsSubscribe />
          <Footer />
        </div>
        <div
          onClick={() => setShowSidebar(false)}
          className={`${styles.overlay} ${showSidebar ? styles.active : ""}`}
        />
      </main>
    </>
  );
}
