"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  Heading,
  FormControl,
  FormLabel,
  VStack,
  Image,
  Select,
  useToast,
  Card,
  CardBody,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

// Dummy imports for Hardhat and Truffle deployments (assumed to be set up in the backend)
import { deployWithHardhat } from "../thirdweb/hardhat"; // Function for Hardhat deployment
import { deployWithTruffle } from "../lib/truffle"; // Function for Truffle deployment

const GenerateNFTPage = () => {
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [nftImage, setNftImage] = useState("");
  const [nftTraits, setNftTraits] = useState("");
  const [deploymentMethod, setDeploymentMethod] = useState("hardhat");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsDeploying(true);
    try {
      if (deploymentMethod === "hardhat") {
        await deployWithHardhat(nftName, nftDescription, nftImage, nftTraits);
      } else if (deploymentMethod === "truffle") {
        await deployWithTruffle(nftName, nftDescription, nftImage, nftTraits);
      }

      toast({
        title: "NFT Contract Deployed Successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsSuccess(true);
    } catch (error: unknown) {
      setIsSuccess(false);
      if (error instanceof Error) {
        toast({
          title: "Error Deploying NFT Contract",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Unknown Error",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <>
      {/* Global font import */}
      <Global
        styles={{
          body: {
            fontFamily: "'Poppins', sans-serif",
          },
          h1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "600",
          },
          h2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500",
          },
          button: {
            fontFamily: "'Poppins', sans-serif",
          },
        }}
      />
      <Box
        minH="100vh"
        bgGradient="linear(to-r, #FFD700, #FFAA00)"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={8}
      >
        <Card
          bg="linear-gradient(135deg, #FFD700 0%, #FFAA00 100%)"
          p={8}
          boxShadow="xl"
          borderRadius="lg"
          maxW="500px"
          w="full"
        >
          <CardBody>
            <Heading mb={4} textAlign="center" color="black" fontSize="2xl">
              Generate a New NFT
            </Heading>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                {/* NFT Name */}
                <FormControl>
                  <FormLabel>NFT Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter NFT Name"
                    value={nftName}
                    onChange={(e) => setNftName(e.target.value)}
                    required
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                  />
                </FormControl>

                {/* NFT Description */}
                <FormControl>
                  <FormLabel>NFT Description</FormLabel>
                  <Textarea
                    placeholder="Enter NFT Description"
                    value={nftDescription}
                    onChange={(e) => setNftDescription(e.target.value)}
                    required
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                  />
                </FormControl>

                {/* NFT Image URL */}
                <FormControl>
                  <FormLabel>NFT Image URL</FormLabel>
                  <Input
                    type="url"
                    placeholder="Enter Image URL"
                    value={nftImage}
                    onChange={(e) => setNftImage(e.target.value)}
                    required
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                  />
                  {nftImage && (
                    <Image
                      src={nftImage}
                      alt="NFT Preview"
                      boxSize="200px"
                      objectFit="cover"
                      borderRadius="md"
                      mt={2}
                      boxShadow="lg"
                    />
                  )}
                </FormControl>

                {/* NFT Traits */}
                <FormControl>
                  <FormLabel>NFT Traits (comma-separated)</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter NFT Traits"
                    value={nftTraits}
                    onChange={(e) => setNftTraits(e.target.value)}
                    required
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                  />
                </FormControl>

                {/* Deployment Method */}
                <FormControl>
                  <FormLabel>Select Deployment Method</FormLabel>
                  <Select
                    value={deploymentMethod}
                    onChange={(e) => setDeploymentMethod(e.target.value)}
                    bg="gray.800"
                    border="none"
                    _focus={{ bg: "gray.700" }}
                  >
                    <option value="hardhat">Hardhat</option>
                    <option value="truffle">Truffle</option>
                  </Select>
                </FormControl>

                <HStack w="full" justify="space-between">
                  <Button
                    colorScheme="blue"
                    type="submit"
                    isLoading={isDeploying}
                    loadingText="Deploying..."
                    _hover={{ bg: "blue.500" }}
                  >
                    Deploy NFT Contract
                  </Button>
                </HStack>

                {isSuccess && (
                  <Text color="green.500" textAlign="center" mt={4}>
                    NFT Contract Successfully Deployed!
                  </Text>
                )}
              </VStack>
            </form>
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

const deployWithHardhat = async (
  name: string,
  description: string,
  image: string,
  traits: string
) => {
  // Simulate deployment for Hardhat
  console.log("Deploying with Hardhat:", { name, description, image, traits });
  // Simulated delay for deployment
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // Actual Hardhat deployment logic would go here
};

const deployWithTruffle = async (
  name: string,
  description: string,
  image: string,
  traits: string
) => {
  // Simulate deployment for Truffle
  console.log("Deploying with Truffle:", { name, description, image, traits });
  // Simulated delay for deployment
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // Actual Truffle deployment logic would go here
};

export default GenerateNFTPage;
