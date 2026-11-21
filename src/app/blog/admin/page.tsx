import type { Metadata } from "next";
import BlogAdmin from "@/components/blog-admin";

export const metadata: Metadata = {
  title: "Author sign in | Jaelyn Cuellar",
  robots: { index: false, follow: false },
};

export default function BlogAdminPage() {
  return <BlogAdmin />;
}
