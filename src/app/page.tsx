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
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter(); // useRouter now works in client-side
  return (

    <Flex position="relative">
      {/* Left Side Image */}
      <motion.img
        src="/images/bfhcoindogsymbol.png"
        alt="Left Top Logo"
        style={{
          position: "absolute",
          left: "58",
          top: "0%",
          width: "290px",
        }}
        animate={{
          x: [Math.random() * 300 - 150, Math.random() * 300 - 150], // Moves left & right
          y: [Math.random() * 300 - 150, Math.random() * 300 - 150], // Moves up & down
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="/images/bfhcoindogsymbol.png"
        alt="Left Top Logo"
        style={{
          position: "absolute",
          left: "0",
          top: "10%",
          width: "290px",
        }}
        animate={{
          x: [Math.random() * 300 - 150, Math.random() * 300 - 150], // Moves left & right
          y: [Math.random() * 300 - 150, Math.random() * 300 - 150], // Moves up & down
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="/images/bfhcoindogsymbol.png"
        alt="Left Top Logo"
        style={{
          position: "absolute",
          left: "20",
          top: "45%",
          width: "290px",
        }}
        animate={{
          x: [Math.random() * 300 - 150, Math.random() * 300 - 150], // Moves left & right
          y: [Math.random() * 300 - 150, Math.random() * 300 - 150], // Moves up & down
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Left Bottom Image */}
      <motion.img
        src="/images/bfhcoindogsymbol.png"
        alt="Left Bottom Logo"
        style={{
          position: "absolute",
          left: "0",
          top: "73%",
          width: "300px",
        }}
        animate={{
          x: [Math.random() * 300 - 150, Math.random() * 300 - 150],
          y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Right Top Image */}
      <motion.img
        src="/images/bfhcoindogsymbol.png"
        alt="Right Top Logo"
        style={{
          position: "absolute",
          right: "0",
          top: "30%",
          width: "290px",
        }}
        animate={{
          x: [Math.random() * 300 - 150, Math.random() * 300 - 150],
          y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Right Bottom Image */}
      <motion.img
        src="/images/bfhcoindogsymbol.png"
        alt="Right Bottom Logo"
        style={{
          position: "absolute",
          right: "0",
          top: "73%",
          width: "300px",
        }}
        animate={{
          x: [Math.random() * 300 - 150, Math.random() * 300 - 150],
          y: [Math.random() * 300 - 150, Math.random() * 300 - 150],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    <Box mt="24px" m="auto" maxW="90vw">
      <Flex direction="column" gap="6">
        {/* Stylish Card Container */}
        <Card
          border="2px solid gold"
          borderRadius="15px"
          boxShadow="0px 0px 20px rgba(255, 215, 0, 0.7)"
          background="linear-gradient(135deg, #FFD700 0%, #FFAA00 100%)"
          color="white"
          textAlign="center"
          p="6"
        >
          <CardHeader>
            <Heading size="lg" color="black">
              🌟 BFH = Home of Value-Based Assets 🌟
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider borderColor="whiteAlpha.600" />} spacing="4">
              {_latestUpdates.map((item) => (
                <Box key={item.title} p="3" borderRadius="10px" background="rgba(255, 255, 255, 0.1)">
                  <Heading size="sm" textTransform="uppercase" color="black">
                    {item.title}
                  </Heading>
                  {item.bullet_points.map((pt) => (
                    <Text pt="2" fontSize="md" color="black" key={pt}>
                      {pt}
                    </Text>
                  ))}
                </Box>
              ))}
            </Stack>
          </CardBody>
        </Card>

        {/* Action Buttons Section */}
        <Box textAlign="center" mt="20px">
          <Button
            padding="12px 24px"
            fontSize="18px"
            background="gold"
            color="black"
            fontWeight="bold"
            borderRadius="10px"
            cursor="pointer"
            boxShadow="0px 0px 15px rgba(255, 215, 0, 0.8)"
            _hover={{ background: "#FFD700", transform: "scale(1.05)" }}
            onClick={() => router.push("/generate-nft")}
            mr="10px"
          >
            ✨ Generate NFT
          </Button>

          <Button
            padding="12px 24px"
            fontSize="18px"
            background="#FFAA00"
            color="black"
            fontWeight="bold"
            borderRadius="10px"
            cursor="pointer"
            boxShadow="0px 0px 15px rgba(255, 165, 0, 0.8)"
            _hover={{ background: "#FFA500", transform: "scale(1.05)" }}
            onClick={() => router.push("/collections")}
          >
            🖼 View Collections
          </Button>
        </Box>
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
