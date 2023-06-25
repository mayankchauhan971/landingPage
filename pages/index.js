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
        <title>Rately - Collect reviews and listen to your customers</title>
        <meta
          name="description"
          content="Rately lets you collect, analyze and show reviews provided by your customers. 
                  Organize them at a central place and get insights into your offerings."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Rately Benefits"
        title=" Still collecting reviews as screenshots in Instagram stories?">
        Screenshots of chats are great, but our AI can analyze your reviews, exactly tell you what you nee
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
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what other creators said">
        <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">100+</span>{" "}
            creators, JUST LIKE YOU
          </div>
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        We know how busy running an online business can be, so we want to make using Rately super easy for you.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;