import { useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Box, Flex, HStack, Heading, Stack, Text } from "@chakra-ui/layout";
import { ReactComponent as Delete } from "../../svgs/delete.svg";
import { ReactComponent as Edit } from "../../svgs/edit.svg";
import { ReactComponent as ArrowLeft } from "../../svgs/arrow-left.svg";
import { appStore } from "../../store";
import { getData } from "../../utils/helpers/request";
import { useQuery } from "@tanstack/react-query";
import { GenericResponse, Sector } from "../../utils/types/response";
import { Link, useNavigate } from "react-router-dom";
import { authorizeUserRole } from "../../utils/middleware/auth";

const DisplayChildSubSector = () => {
  const store = appStore();
  const navigate = useNavigate();

  const isAuthorized = authorizeUserRole();

  useEffect(() => {
    if (!isAuthorized) navigate("/");
  }, [isAuthorized, navigate]);

  const subSector = store.subSector;

  async function getChildSubSectors(): Promise<GenericResponse> {
    return await getData(`/sectors/parent-sub?_id=${subSector._id}`);
  }

  const getChildSubSector = useQuery({ queryKey: ["get-child-sub-sectors"], queryFn: getChildSubSectors });
  const childSubSectors = getChildSubSector?.data?.data[0];

  return (
    <Box>
      <Flex mt="40px" ms="100px" direction="column" alignItems="flex-start" gap="4">
        <Button variant="ghosted" color="#4197E8" fontWeight="400" fontSize="md" ps="0" display="flex" gap="2">
          <ArrowLeft />
          <Text>Go Back</Text>
        </Button>

        <Text as="b" fontSize="xl">
          {subSector && subSector?.name}
        </Text>
      </Flex>

      <Flex justifyContent="center" mt="92px">
        <Card width={{ base: "90%", md: "80%", lg: "60%", xl: "50%" }} p={{ base: "20px", md: "40px" }}>
          <Stack spacing="24px">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading fontSize="2xl">Child Sub Sectors</Heading>

              <Button fontSize="xs" width={{ md: "215px" }}>
                <Link to={"/add-child-sub-sector"}>Add New</Link>
              </Button>
            </Flex>

            {childSubSectors &&
              childSubSectors?.subSectors?.map((item: Sector) => (
                <Box border="1px solid rgba(123, 123, 123, 0.50)" p="16px" borderRadius="8px" key={item._id}>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text>{item.name}</Text>

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

export default DisplayChildSubSector;
