import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { ReactComponent as Arrow } from "../../svgs/arrow-right.svg";

const Sector = () => {
  const sectors = ["Manufacturing", "Service"];
  return (
    <Flex justifyContent="center" alignItems="center">
      <Card width="50%" p="40px">
        <Stack>
          <Flex justifyContent="space-between">
            <Heading fontSize="xl">Sectors</Heading>
            <Button>Add New User</Button>
          </Flex>

            
          <Box border="1px solid rgba(123, 123, 123, 0.50)" p='16px' borderRadius='8px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text>Manufacturing</Text>
              <Arrow />
            </Flex>
          </Box>
        </Stack>
      </Card>
    </Flex>
  );
};

export default Sector;
