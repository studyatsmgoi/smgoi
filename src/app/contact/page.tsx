
import dynamic from "next/dynamic";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:{
    absolute:"Contact Us | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
  }
};
const ContactMe = dynamic(() => import('@/components/contact/contact'));
 export default function Contact() {
    return (
        <>
      <ContactMe />
       </>
    );
 }