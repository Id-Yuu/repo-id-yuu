import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export const Backtop = () => {
  const [backTop, setBackTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  return (
    <>
      {backTop && (
        <Button
          position="fixed"
          bottom="20px"
          right="20px"
          size="md"
          colorScheme="blue"
          onClick={scrollToTop}
        >
          <ArrowUpIcon />
        </Button>
      )}
    </>
  );
};
