import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Box, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/layout";
import { ReactComponent as Delete } from "../../svgs/delete.svg";
import { ReactComponent as Edit } from "../../svgs/edit.svg";

const DisplaySubSector = () => {
  const subSector = ["Construction", "Food and Beverages", "Furniture"];

  return (
    <Box>
      <Stack mt='40px' ms='100px'>
        <Text>Go Back</Text>
        <Text>Manufacturing</Text>
      </Stack>
      <Flex justifyContent="center" alignItems='center' minHeight="100vh">
        <Card
          width={{ base: "90%", md: "80%", lg: "60%", xl: "50%" }}
          p={{ base: "20px", md: "40px" }}
        >
          <Stack spacing="24px">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize="2xl">Sub Sectors</Heading>

              <Button fontSize="xs" width={{ md: "215px" }}>
                Add New
              </Button>
            </Flex>

            {subSector?.map((item) => (
              <Box
                border="1px solid rgba(123, 123, 123, 0.50)"
                p="16px"
                borderRadius="8px"
                key={item}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Text>{item}</Text>

                  <HStack>
                    <Button variant="ghosted">
                      <Delete />
                    </Button>

                    <Button variant="ghosted">
                      <Edit />
                    </Button>
                  </HStack>
                </Flex>
              </Box>
            ))}
          </Stack>
        </Card>
      </Flex>
    </Box>
  );
};

export default DisplaySubSector;
