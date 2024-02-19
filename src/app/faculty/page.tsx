
import dynamic from "next/dynamic";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:{
    absolute:"Faculty | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
  }
};
const ComputerScienceDepartment = dynamic(
  () => import("@/components/faculty/departments/computersciencedepartment")
);
const HindiDepartment = dynamic(
  () => import("@/components/faculty/departments/hindidepartment")
);
const MathsDepartment = dynamic(
  () => import("@/components/faculty/departments/mathsdepartment")
);
const ScienceDepartment = dynamic(
  () => import("@/components/faculty/departments/sciencedepartment")
);
const SSTDepartment = dynamic(
  () => import("@/components/faculty/departments/sstdepartment")
);
const EnglishDepartment = dynamic(
  () => import("@/components/faculty/departments/englishdepartment")
);

export default function Faculty() {
  return (
    <>
      <ScienceDepartment />
      <MathsDepartment />
      <ComputerScienceDepartment />
      <EnglishDepartment />
      <HindiDepartment />
      <SSTDepartment />
    </>
  );
}
