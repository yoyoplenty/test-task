import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { ReactComponent as Arrow } from "../../svgs/arrow-right.svg";
import { getData } from "../../utils/helpers/request";
import { useQueries, useQuery } from "@tanstack/react-query";
import { GenericResponse, Sector } from "../../types/response";
import { useState } from "react";

const DisplaySector = () => {
  const [parentSectorId, setParentSectorId] = useState("");

  async function getSectors(): Promise<GenericResponse> {
    return await getData("/sectors/parent");
  }
  async function getSubSectors(): Promise<GenericResponse> {
    return await getData(`/sectors/sub?parentSector=${parentSectorId}`);
  }

  const [getSector, getSubSector] = useQueries({
    queries: [
      { queryKey: ["get-sector"], queryFn: getSectors },
      { queryKey: ["get-subsectors"], queryFn: getSubSectors },
    ],
  });

  const handleGetSubSectors = (parentSectorId: string) => {
    setParentSectorId(parentSectorId);

    console.log(getSubSector?.data);
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Card width={{ base: "90%", md: "80%", lg: "50%" }} p={{ base: "20px", md: "40px" }}>
        <Stack spacing="24px">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="2xl">Sectors</Heading>
            <Button fontSize="xs" width={{ md: "215px" }}>
              Add New
            </Button>
          </Flex>

          {getSector?.data?.data?.map((item: Sector) => (
            <Box
              border="1px solid rgba(123, 123, 123, 0.50)"
              p="16px"
              borderRadius="8px"
              key={item?._id}
              onClick={() => handleGetSubSectors(item?._id)}
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

export default DisplaySector;
