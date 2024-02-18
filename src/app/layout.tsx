import { Metadata as NextMetadata } from "next";
import type { Viewport } from 'next';
import dynamic from 'next/dynamic';
import "./globals.css";

const NavigationBar = dynamic(() => import('@/components/navbar/Navbar'));
const   Footer = dynamic(() => import('@/components/footer/Footer'));

export interface Metadata extends NextMetadata {
  additionalMetaTags?: Array<{ name: string; content: string } | { property: string; content: string }>;
}
export const metadata: Metadata = {
  title:{ 
    default:"Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
    template:"%s | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)"
  },
  description:
    "Welcome to Sankat Mochan Group of Institutions, an academic haven situated in the tranquil town of Kariya Bajhna, Sultnapur, Uttar Pradesh, with the zip code 228142. Affiliated with the esteemed Central Board of Secondary Education (CBSE), our institution stands as a symbol of educational excellence, shaping the destinies of young minds.  Immerse yourself in a holistic educational experience against the scenic backdrop of Uttar Pradesh. Sankat Mochan Group of Institutions blends academic prowess, artistic expression, and athletic achievement, crafting a comprehensive learning environment that extends beyond conventional classrooms.  Discover a passion for learning with our dedicated faculty, committed to igniting curiosity, fostering creativity, and encouraging critical thinking. Our campus boasts modern facilities, including well-appointed classrooms, advanced laboratories, and expansive sports fields, ensuring a conducive setting for academic and personal development.  Beyond academic rigor, we emphasize character development, instilling values of compassion, responsibility, and global awareness. As proud affiliates of the CBSE board, our curriculum aligns with national standards, preparing students for a future of academic success and competitive excellence.  Sankat Mochan Group of Institutions is more than just a school\u2014it's a community dedicated to unlocking the potential within each student. Join us on this educational journey, where every day presents an opportunity to learn, grow, and thrive. Together, let's pave the way for a brighter future, nurturing the leaders and innovators of tomorrow.",
  manifest: "/manifest.json",
  icons: [
    { url: '/icons/apple-icon-57x57.png', sizes: '57x57' },
    { url: '/icons/apple-icon-60x60.png', sizes: '60x60' },
    { url: '/icons/apple-icon-72x72.png', sizes: '72x72' },
    { url: '/icons/apple-icon-76x76.png', sizes: '76x76' },
    { url: '/icons/apple-icon-114x114.png', sizes: '114x114' },
    { url: '/icons/apple-icon-120x120.png', sizes: '120x120' },
    { url: '/icons/apple-icon-144x144.png', sizes: '144x144' },
    { url: '/icons/apple-icon-152x152.png', sizes: '152x152' },
    { url: '/icons/apple-icon-180x180.png', sizes: '180x180' },
    { url: '/icons/android-icon-192x192.png', sizes: '192x192' },
    { url: '/icons/favicon-32x32.png', sizes: '32x32' },
    { url: '/icons/favicon-96x96.png', sizes: '96x96' },
    { url: '/icons/favicon-16x16.png', sizes: '16x16' },
  ],
  additionalMetaTags: [
    { name: "charset", content: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "description", content: "Welcome to Sankat Mochan Group of Institutions, an academic haven situated in the tranquil town of Kariya Bajhna, Sultnapur, Uttar Pradesh, with the zip code 228142. Affiliated with the esteemed Central Board of Secondary Education (CBSE), our institution stands as a symbol of educational excellence, shaping the destinies of young minds.  Immerse yourself in a holistic educational experience against the scenic backdrop of Uttar Pradesh. Sankat Mochan Group of Institutions blends academic prowess, artistic expression, and athletic achievement, crafting a comprehensive learning environment that extends beyond conventional classrooms.  Discover a passion for learning with our dedicated faculty, committed to igniting curiosity, fostering creativity, and encouraging critical thinking. Our campus boasts modern facilities, including well-appointed classrooms, advanced laboratories, and expansive sports fields, ensuring a conducive setting for academic and personal development.  Beyond academic rigor, we emphasize character development, instilling values of compassion, responsibility, and global awareness. As proud affiliates of the CBSE board, our curriculum aligns with national standards, preparing students for a future of academic success and competitive excellence.  Sankat Mochan Group of Institutions is more than just a school\u2014it's a community dedicated to unlocking the potential within each student. Join us on this educational journey, where every day presents an opportunity to learn, grow, and thrive. Together, let's pave the way for a brighter future, nurturing the leaders and innovators of tomorrow." },
    { property: "og:title", content:  "Home | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)" },
    { property: "og:description", content: "Welcome to Sankat Mochan Group of Institutions, an academic haven situated in the tranquil town of Kariya Bajhna, Sultnapur, Uttar Pradesh, with the zip code 228142. Affiliated with the esteemed Central Board of Secondary Education (CBSE), our institution stands as a symbol of educational excellence, shaping the destinies of young minds.  Immerse yourself in a holistic educational experience against the scenic backdrop of Uttar Pradesh. Sankat Mochan Group of Institutions blends academic prowess, artistic expression, and athletic achievement, crafting a comprehensive learning environment that extends beyond conventional classrooms.  Discover a passion for learning with our dedicated faculty, committed to igniting curiosity, fostering creativity, and encouraging critical thinking. Our campus boasts modern facilities, including well-appointed classrooms, advanced laboratories, and expansive sports fields, ensuring a conducive setting for academic and personal development.  Beyond academic rigor, we emphasize character development, instilling values of compassion, responsibility, and global awareness. As proud affiliates of the CBSE board, our curriculum aligns with national standards, preparing students for a future of academic success and competitive excellence.  Sankat Mochan Group of Institutions is more than just a school\u2014it's a community dedicated to unlocking the potential within each student. Join us on this educational journey, where every day presents an opportunity to learn, grow, and thrive. Together, let's pave the way for a brighter future, nurturing the leaders and innovators of tomorrow." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://smgoi.com" },
    { property: "og:image", content: "https://smgoi.com/backseo.png" }, 
    { property: "og:image:alt", content: "Sankat Mochan Group Of Institutions Profile Logo" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content:  "Home | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)" },
    { name: "twitter:description", content: "Welcome to Sankat Mochan Group of Institutions, an academic haven situated in the tranquil town of Kariya Bajhna, Sultnapur, Uttar Pradesh, with the zip code 228142. Affiliated with the esteemed Central Board of Secondary Education (CBSE), our institution stands as a symbol of educational excellence, shaping the destinies of young minds.  Immerse yourself in a holistic educational experience against the scenic backdrop of Uttar Pradesh. Sankat Mochan Group of Institutions blends academic prowess, artistic expression, and athletic achievement, crafting a comprehensive learning environment that extends beyond conventional classrooms.  Discover a passion for learning with our dedicated faculty, committed to igniting curiosity, fostering creativity, and encouraging critical thinking. Our campus boasts modern facilities, including well-appointed classrooms, advanced laboratories, and expansive sports fields, ensuring a conducive setting for academic and personal development.  Beyond academic rigor, we emphasize character development, instilling values of compassion, responsibility, and global awareness. As proud affiliates of the CBSE board, our curriculum aligns with national standards, preparing students for a future of academic success and competitive excellence.  Sankat Mochan Group of Institutions is more than just a school\u2014it's a community dedicated to unlocking the potential within each student. Join us on this educational journey, where every day presents an opportunity to learn, grow, and thrive. Together, let's pave the way for a brighter future, nurturing the leaders and innovators of tomorrow." },
    { name: "twitter:url", content: "https://smgoi.com" }, 
    { name: "twitter:image", content: "https://smgoi.com/backseo.png" }, 
  ],
};

export const viewport: Viewport = {
  themeColor: '#111827',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-slate-900 to-slate-700">
        <NavigationBar />
        <div className="pt-8">
        {children}
      </div>
        <Footer />
        </body>
    </html>
  );
}
