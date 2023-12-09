import { Box, Button, Flex, FormLabel, Heading, Image, Input, Text, VStack } from "@chakra-ui/react";

// Your logo image URL
const logoUrl = "path/to/your/logo.png";

const Login = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Flex direction={"column"} gap={7} p={{ base: "5", md: "8" }}>
        <Box m={3}>
          <VStack justify="center">
            <Image src={logoUrl} alt="Logo" mb={4} />
          </VStack>

          <Heading my={3} textAlign={"center"}>
            Welcome back
          </Heading>

          <Text size={"sm"} textAlign={"center"}>
            Enter Your login details
          </Text>
        </Box>

        <Box width={500} maxWidth={600} p={8} borderWidth={1} m={5} borderRadius={8} boxShadow="lg">
          <form>
            <Box m={[5, 7]}>
              <VStack>
                <FormLabel>Userna</FormLabel>
                <Input placeholder="Username" size="lg" mb={4} />
              </VStack>

              <VStack>
                <Input type="password" placeholder="Password" size="lg" mb={4} />
              </VStack>

              <Button backgroundColor={"#4197E8"} size="lg" width={"100%"} color={"white"} my={7}>
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
