import { Metadata } from "next";
import Head from "next/head";
export const metadata: Metadata = {
  title:{
    absolute:"About Us | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
  }
};
import dynamic from "next/dynamic";
const AboutDirector = dynamic(() => import('@/components/about/director/aboutdirector'));
const AboutManager = dynamic(() => import('@/components/about/manager/aboutmanager'));
const AboutPresident = dynamic(() => import('@/components/about/president/aboutpresident'));
const AboutInstitutions = dynamic(() => import('@/components/about/institute/aboutinstitutions'));
const AboutPrincipalOfSenior = dynamic(() => import('@/components/about/principalofsenior/aboutprincipalofsenior'));
const AboutPrincipalOfJunior = dynamic(() => import('@/components/about/principalofjunior/aboutprincipalofjunior'));
export default function About() {
    return (
        <>
      <AboutInstitutions />
      <AboutDirector />
      <AboutPresident />
      <AboutManager />
      <AboutPrincipalOfSenior />
      <AboutPrincipalOfJunior />
        </>
    );
}