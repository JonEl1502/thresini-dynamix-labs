import type { Metadata } from "next";
import IndustryPage from "@/components/industry-page";
import { INDUSTRY_BY_SLUG } from "@/data/industries";

const data = INDUSTRY_BY_SLUG.electricians;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return <IndustryPage data={data} />;
}
