import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is Bharosa?",
    answer: "Bharosa is a free simple tool which allows you to collect reviews and create a website to showcase those reviews beautifully and convincingly to convert more potential customers to buy from you.",
  },
  {
    question: "How does this work?",
    answer: "Once you register, we create a personalized link for you which you can share with your existing and new customers and ask for reviews. You can manage these collected reviews, get insights from them and create a simple website link showcasing them. Share this link with your followers and inquiring customers.",
  },
  {
    question: "How does this help? ",
    answer:
      "Along with reviews, we aggregate data from all collected reviews to provide insights and paint a real picture of your business for your followers. This helps convince buyers to buy from you while taking of the burden of managing reviews from your head.",
  },
  {
    question: "What else is offered?",
    answer:
      "We have a team of consultants from Bain, Deloitte who can help you understand your business better and scale it. We also provide marketing, web development services to launch and scale your website.",
  },
];

export default Faq;