import React from "react";
import { useRouter } from "next/router";

const bio = () => {
  const router = useRouter();

  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_BIO_QR_REDIRECT == "family") {
      router.push(
        `/family/?pass=${process.env.NEXT_PUBLIC_FAMILY_PAGE_PASSWORD}`
      );
    } else {
      router.push("/biodata");
    }
  });
  return <></>;
};

export default bio;
