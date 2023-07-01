import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>RevuLink - Collect reviews and listen to your customers</title>
        <meta
          name="description"
          content="RevuLink lets you collect, analyze and show reviews provided by your customers. 
                  Organize them at a central place and get insights into your offerings."
        />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        // pretitle="RevuLink Benefits"
        title=" Still presenting reviews as chat screenshots in Instagram stories?">
        Screenshots of chats are great, but wouldn't it be better if you could collect reviews, store them securely and use them
        to create beautiful promotional pages for your business?
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what other creators said">
        <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">100+</span>{" "}
            creators, JUST LIKE YOU
          </div>
      </SectionTitle> */}
      {/* <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        We know how busy running an online business can be, so we want to make using RevuLink super easy for you.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;