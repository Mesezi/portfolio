import Layout from "@/components/Layout";
import { getMyDetails } from "@/sanity/query";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getMyDetails();

  return <Layout tagline={data?.tagline}>{children}</Layout>;
}
