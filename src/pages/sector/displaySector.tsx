import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { ReactComponent as Arrow } from "../../svgs/arrow-right.svg";
import { getData } from "../../utils/helpers/request";
import { useQuery } from "@tanstack/react-query";

interface SectorResponse {
  success: boolean;
  message: string;
  data: Sector[];
}

interface Sector {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const Sector = () => {
  async function getSectors(): Promise<SectorResponse> {
    return (await getData('/sectors/parent'));
  } 

  const { data, isLoading, isError } = useQuery({
    queryKey: ['get-sector'],
    queryFn: getSectors,
  })  

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Card
        width={{ base: "90%", md: "80%", lg: "50%" }}
        p={{ base: "20px", md: "40px" }}
      >
        <Stack spacing="24px">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="2xl">Sectors</Heading>
            <Button fontSize="xs" width={{ md: "215px" }}>
              Add New
            </Button>
          </Flex>

          {data?.data?.map((item) => (
            <Box
              border="1px solid rgba(123, 123, 123, 0.50)"
              p="16px"
              borderRadius="8px"
              key={item?._id}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text>{item?.name}</Text>
                <Arrow />
              </Flex>
            </Box>
          ))}
        </Stack>
      </Card>
    </Flex>
  );
};

export default Sector;
