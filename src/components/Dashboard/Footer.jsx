import React from "react";
import {
  Box,
  Text,
  Link,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiGithubFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  const footerBgColor = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={footerBgColor} py={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color="gray.500">
          &copy; 2024 Atul Gupta. All rights reserved.
        </Text>
        <Flex alignItems="center">
          <Link mx={2} fontSize="sm" color="gray.500">
            Privacy Policy
          </Link>
          <Link mx={2} fontSize="sm" color="gray.500">
            Terms of Service
          </Link>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@atulgupta-g">
            <Box mx={2}>
              <Icon as={RiYoutubeFill} boxSize={5} color={iconColor} />
            </Box>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/atulguptag">
            <Box mx={2}>
              <Icon as={RiGithubFill} boxSize={5} color={iconColor} />
            </Box>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/atulguptag">
            <Box mx={2}>
              <Icon as={RiLinkedinBoxFill} boxSize={5} color={iconColor} />
            </Box>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/itsatulguptag">
            <Box mx={2}>
              <Icon as={RiFacebookBoxFill} boxSize={5} color={iconColor} />
            </Box>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/itsatulguptag">
            <Box mx={2}>
              <Icon as={RiInstagramFill} boxSize={5} color={iconColor} />
            </Box>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
