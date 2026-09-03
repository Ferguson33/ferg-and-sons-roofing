import type { MetadataRoute } from "next";
import { company } from "@/lib/company";

const paths = [
  "/",
  "/plans",
  "/problems",
  "/about",
  "/contact",
  "/sample-report",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, company.siteUrl).href,
  }));
}
