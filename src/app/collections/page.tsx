"use client";

import { NFT_CONTRACTS } from "@/consts/nft_contracts";
import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function CollectionsPage() {
  return (
    <Box p={8} minH="100vh" bgGradient="linear(to-r, gray.900, gray.800)" color="white">
      <Heading mb={6} textAlign="center">
        Trending NFT Collections
      </Heading>

      <Flex direction="row" wrap="wrap" gap="5" justifyContent="space-evenly">
        {NFT_CONTRACTS.map((item) => (
          <Link
            key={item.address}
            href={`/collection/${item.chain.id.toString()}/${item.address}`}
            _hover={{ textDecoration: "none" }}
            w={300}
            h={400}
          >
            <Box
              bg="gray.700"
              p={4}
              borderRadius="md"
              boxShadow="lg"
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Image src={item.thumbnailUrl} borderRadius="md" />
              <Text fontSize="large" mt="14px" textAlign="center">
                {item.title}
              </Text>
            </Box>
          </Link>
        ))}
      </Flex>
    </Box>
  );
}
