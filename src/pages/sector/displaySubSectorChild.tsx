import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Box, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/layout";
import { ReactComponent as Delete } from "../../svgs/delete.svg";
import { ReactComponent as Edit } from "../../svgs/edit.svg";
import { ReactComponent as ArrowLeft } from "../../svgs/arrow-left.svg";

const DisplaySubSectorChild = () => {
  const subSector = ["Construction", "Food and Beverages", "Furniture"];

  return (
    <Box>
      <Flex mt="40px" ms="100px" direction="column" alignItems="flex-start" gap='4'>
        <Button
          variant="ghosted"
          color="#4197E8"
          fontWeight="400"
          fontSize="md"
          ps="0"
          display="flex"
          gap='2'
        >
          <ArrowLeft />
          <Text>Go Back</Text>
        </Button>

        <Text as="b" fontSize="xl">
          Manufacturing
        </Text>
      </Flex>

      <Flex justifyContent="center" mt="92px">
        <Card
          width={{ base: "90%", md: "80%", lg: "60%", xl: "580px" }}
          p={{ base: "20px", md: "40px" }}
        >
          <Stack spacing="24px">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize="2xl">Sub Sectors Child</Heading>

              <Button fontSize="sm" width={{ md: "215px" }}>
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

export default DisplaySubSectorChild;
