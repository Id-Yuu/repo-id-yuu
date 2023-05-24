/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Cards = (props) => {
  const { children, variant } = props;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant={variant}
      my="20px"
    >
      {children}
    </Card>
  );
};

const Images = (props) => {
  const { title, imgs } = props;
  return (
    <Image
      objectFit="cover"
      maxW={{ base: "100%", sm: "200px" }}
      src={imgs}
      alt={title}
    />
  );
};

const CardBodys = (props) => {
  const { title, desc, alink, tags } = props;
  return (
    <CardBody>
      <Link isExternal href={alink}>
        <Heading size="md">{title}</Heading>
      </Link>
      <Text py="2">{desc}</Text>
      <Text py="2" fontStyle="italic" fontSize="xs">
        {tags}
      </Text>
    </CardBody>
  );
};

const CardFooters = (props) => {
  const { title, alink, forks, flink } = props;
  return (
    <CardFooter>
      <Link isExternal href={alink}>
        {title} <ExternalLinkIcon mx="2px" />
      </Link>
    </CardFooter>
  );
};

Cards.Images = Images;
Cards.Body = CardBodys;
Cards.Foot = CardFooters;

export default Cards;
