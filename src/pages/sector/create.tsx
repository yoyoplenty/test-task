import { Box, Button, Checkbox, Flex, Input, VStack } from "@chakra-ui/react";

const Create = () => {
  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Box width={500} maxWidth={600} p={8} borderWidth={1} m={5} borderRadius={8} boxShadow="lg">
        <form>
          <Box m={[5, 7]}>
            <VStack>
              <Input placeholder="FirstName" size="lg" mb={4} />
            </VStack>

            <VStack>
              <Input placeholder="LastName" size="lg" mb={4} />
            </VStack>

            <VStack>
              <Input placeholder="sectors" size="lg" mb={4} />
            </VStack>

            <Checkbox defaultChecked>I agree to to the Terms of use and Privacy Policy</Checkbox>

            <Button backgroundColor={"#4197E8"} size="lg" width={"100%"} color={"white"} my={7}>
              save
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default Create;
