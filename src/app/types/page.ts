import { PageLayout } from "layout";
import { NextPage } from "next";

type Page = NextPage & {
  layout?: PageLayout;
};

export default Page;
