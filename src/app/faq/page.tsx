import React from "react";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:{
    absolute:"FAQs | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
  }
};
export default function faq() {
  const faqsList = [
    {
      label: "Payment",
      qas: [
        {
          q: "How can I make tuition fee payments?",
          a: "Tuition fee payments can be made through our secure online any upi app payments application like Phone Pe,Paytm ,Google Pay,Payzapp,Bhim UPI,Amazon Pay. Additionally, we accept payments via bank transfer and at the school's administrative office. ",
        },
        {
          q: "Are there any additional charges or hidden fees?",
          a: "We are committed to transparency. All applicable fees are clearly communicated during the admission process. If you have any specific concerns or questions regarding fees, feel free to contact our finance department for clarification.",
        },
        {
          q: "Is there a deadline for fee payments?",
          a: "Fee payment deadlines are communicated in advance through official announcements, circulars, and the school's website. It is essential to adhere to these deadlines to avoid any inconvenience.",
        },
        {
          q: "Can I get a refund for fees paid if my child withdraws from the school?",
          a: "The refund policy is outlined in the school's admission handbook. Refund eligibility depends on the timing of withdrawal and is subject to the terms and conditions specified. Please refer to the handbook or contact the administrative office for more information.",
        },
      ],
    },
    {
      label: "Safety",
      qas: [
        {
          q: "How does the school prioritize the safety of students?",
          a: "The safety of our students is our top priority. We have implemented comprehensive safety protocols, including trained security personnel, surveillance systems, and regular safety drills to ensure a secure learning environment.",
        },
        {
          q: "What measures are in place for medical emergencies?",
          a: "Our school has a well-equipped infirmary with trained medical staff. Additionally, we maintain a close association with local medical facilities for prompt and efficient handling of any medical emergencies.",
        },
        {
          q: "Are there safety guidelines for transportation services?",
          a: "Absolutely. Our transportation services strictly adhere to safety regulations. All vehicles are regularly inspected, and drivers undergo rigorous training. Detailed safety guidelines are provided to both drivers and students for a secure commuting experience.",
        },
        {
          q: "What security measures are in place within the school premises?",
          a: "Our school premises are equipped with surveillance cameras, access control systems, and secure entry points. Trained security personnel are stationed throughout the campus to monitor and ensure the safety of all individuals.",
        },
        {
          q: "How can parents stay informed about their child's safety at school?",
          a: "We believe in transparent communication. Regular updates on safety measures, emergency procedures, and any relevant information are communicated through newsletters, circulars, and the school's official communication channels.",
        },
        {
          q: "Are there protocols for visitors entering the school premises?",
          a: "Yes, strict visitor protocols are enforced. All visitors are required to register at the front desk, wear identification badges, and adhere to the designated visiting areas. This ensures a secure environment for everyone on campus.",
        },
        {
          q: "What should I do if my child reports a safety concern?",
          a: "We encourage students to communicate any safety concerns to their teachers, school counselors, or any staff member. Our open-door policy ensures that safety concerns are promptly addressed and investigated.",
        },
      ],
    },
  ];

  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-lg">
            <h3 className="mt-3 text-white text-3xl font-extrabold sm:text-4xl">
              Frequently asked questions
            </h3>
            <div className="mt-3 text-white dark:text-gray-400">
              <p>
                Can&lsquo;t find the answer you&lsquo;re looking for? feel free
                to{" "}
                <Link
                  className="text-yellow-500 font-semibold whitespace-nowrap"
                  href="/contact"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-12 divide-y sm:mt-20">
            {faqsList.map((list, idx) => (
              <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
                <div className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
                  <h4 className="text-yellow-500 font-semibold">
                    {list.label}
                  </h4>
                </div>
                <ul className="flex-1 space-y-6 sm:last:pb-6 sm:space-y-8">
                  {list.qas.map((item, idx) => (
                    <li key={idx}>
                      <summary className="flex items-center justify-between font-semibold text-yellow-500">
                        {item.q}
                      </summary>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.a }}
                        className="mt-3 text-white leading-relaxed"
                      ></p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
