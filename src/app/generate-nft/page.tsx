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
  Text,
} from "@chakra-ui/react";

const GenerateNFTPage = () => {
  const [nftName, setNftName] = useState("");
  const [nftDescription, setNftDescription] = useState("");
  const [nftImage, setNftImage] = useState("");
  const [nftTraits, setNftTraits] = useState("");
  const [deploymentMethod, setDeploymentMethod] = useState("hardhat");
  const [purpose, setPurpose] = useState("value-based");
  const [isGenerating, setIsGenerating] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (purpose === "just-for-fun") {
      toast({
        title: "NFT cannot be issued just for fun.",
        description: "NFTs must have value.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsGenerating(true);
    try {
      await generateNFTOnChain(nftName, nftDescription, nftImage, nftTraits, deploymentMethod);
      toast({
        title: "NFT Successfully Generated!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast({
          title: "Error generating NFT",
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
      setIsGenerating(false);
    }
  };

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-r, gray.900, gray.800)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={8}
    >
      <Card bg="gray.700" p={8} boxShadow="xl" borderRadius="lg" maxW="500px">
        <CardBody>
          <Heading mb={4} textAlign="center">
            Generate a New NFT
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
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
              </FormControl>

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

              <FormControl>
                <FormLabel>Purpose of NFT</FormLabel>
                <Select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  bg="gray.800"
                  border="none"
                  _focus={{ bg: "gray.700" }}
                >
                  <option value="value-based">Value Based</option>
                  <option value="just-for-fun">Just for Fun</option>
                </Select>
              </FormControl>

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
                  <option value="self-served">Self-Served</option>
                  <option value="bfhevm">Via BFHEVM</option>
                </Select>
              </FormControl>

              <Button
                colorScheme="blue"
                type="submit"
                w="full"
                isLoading={isGenerating}
                loadingText="Generating..."
                _hover={{ bg: "blue.500" }}
              >
                Generate NFT
              </Button>
            </VStack>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
};

const generateNFTOnChain = async (
  name: string,
  description: string,
  image: string,
  traits: string,
  deploymentMethod: string
) => {
  console.log("Generating NFT:", { name, description, image, traits, deploymentMethod });
};

export default GenerateNFTPage;
