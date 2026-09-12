import type { Metadata } from "next";
import VerticalPage from "@/components/vertical-page";
import { VERTICAL_BY_SLUG } from "@/data/verticals";

const data = VERTICAL_BY_SLUG["hvac"]!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function Page() {
  return <VerticalPage data={data} />;
}
