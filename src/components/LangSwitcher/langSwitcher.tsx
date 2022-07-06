import { Box } from "@mui/material";
import Router from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LangSwitcher = () => {
  const { locales, asPath } = useRouter();
  return (
    <Box display="flex" gap={1.5} fontSize={12}>
      {locales?.map((locale, idx) => (
        <>
          <Router href={asPath} locale={locale} key={locale}>
            {locale}
          </Router>
          {idx < locales.length - 1 && <span>/</span>}
        </>
      ))}
    </Box>
  );
};

export default LangSwitcher;
