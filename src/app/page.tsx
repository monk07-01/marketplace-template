"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  Button,
} from "@chakra-ui/react";
import GenerateNFTPage from "./generate-nft";
import router from "next/router";


export default function Home() {
  const router = useRouter(); // useRouter now works in client-side
  return (

    <Flex position="relative">
      {/* Left Side Image */}
      <Image 
        src="/images/bfhcoindogsymbol.png" 
        alt="Left Logo" 
        position="absolute" 
        left="0" 
        top="30%" 
        transform="translateY(-50%)"
        boxSize="290px"
      />
      <Image 
        src="/images/bfhcoindogsymbol.png" 
        alt="Left Logo" 
        position="absolute" 
        left="0" 
        top="73%" 
        transform="translateY(-50%)"
        boxSize="300px"
      />
      <Image 
        src="/images/bfhcoindogsymbol.png" 
        alt="Left Logo" 
        position="absolute" 
        right="0" 
        top="30%" 
        transform="translateY(-50%)"
        boxSize="290px"
      />
      <Image 
        src="/images/bfhcoindogsymbol.png" 
        alt="Left Logo" 
        position="absolute" 
        right="0" 
        top="73%" 
        transform="translateY(-50%)"
        boxSize="300px"
      />
      <Box mt="24px" m="auto">
        <Flex direction="column" gap="4">
          {/* Delete this <Card /> in your own app */}
          <Card border="1px" maxW="90vw" mx="auto">
            <CardHeader>
              <Heading size="md">BFH = Home of Value Based Assets</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                {_latestUpdates.map((item) => (
                  <Box key={item.title}>
                    <Heading size="xs" textTransform="uppercase">
                      {item.title}
                    </Heading>
                    {item.bullet_points.map((pt) => (
                      <Text pt="2" fontSize="sm" key={pt}>
                        {pt}
                      </Text>
                    ))}
                  </Box>
                ))}
              </Stack>
            </CardBody>
          </Card>
          <Heading ml="20px" mt="40px">
            Trending collections
          </Heading>
          <Flex
            direction="row"
            wrap="wrap"
            mt="20px"
            gap="5"
            justifyContent="space-evenly"
          >
          {/* Button to navigate to NFT generation page */}
          <Box textAlign="center" mt="20px">
            <Button
              padding="10px 20px"
              fontSize="16px"
              backgroundColor="#4CAF50"
              color="white"
              border="none"
              borderRadius="5px"
              cursor="pointer"
              onClick={() => router.push("/generate-nft")}
            >
              Generate NFT
            </Button>
              {/* Navigate to Collections Page */}
            <Button
              padding="10px 20px"
              fontSize="16px"
              backgroundColor="#007BFF"
              color="white"
              border="none"
              borderRadius="5px"
              cursor="pointer"
              onClick={() => router.push("/collections")}
            >
            View Collections
            </Button>
          </Box>
           
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

// Delete this in your own app
const _latestUpdates: Array<{ title: string; bullet_points: string[] }> = [
  {
    title: "VBA - Value Based Assets (Tokens or NFT's)",
    bullet_points: [
      "BFH is only the home of Value Based Assets as BFH promotes Value over Financial Gain",
      "It is extremely necessary for consumers to get a Valuable product"
    ],
  },
  {
    title: "Why Value Based?",
    bullet_points: [
      "In the times where Crypto is becoming a go-to for people, it's also necessary",
      "for the Market to pivot and provide something valuable to its consumers.", 
      "Like Crypto-Coins have value that is based of its underlying protocol, in a very simialar way",
      "these Tokens would derive value from the service or product that the creator would like to provide",
    ],
  },
  {
    title: "For Example",
    bullet_points: [
      "A type of token or VBA that is issued by someone who is providing Value like:",
      "Value based Fair Barter - Product Exchange for Similar Valued",
      "Access Pass Tokens or NFT's - Tokens act as membership passes or Subscription", 
    ],
  },
];
