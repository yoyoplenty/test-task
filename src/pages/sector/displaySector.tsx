import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Card } from "@chakra-ui/card";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { ReactComponent as Arrow } from "../../svgs/arrow-right.svg";
import { getData } from "../../utils/helpers/request";
import { GenericResponse, Sector } from "../../utils/types/response";
import { appStore } from "../../store";
import { Link } from "react-router-dom";

const DisplaySector = () => {
  const store = appStore();
  const navigate = useNavigate();

  async function getSectors(): Promise<GenericResponse> {
    return await getData("/sectors/parent");
  }

  const getSector = useQuery({ queryKey: ["get-sectors"], queryFn: getSectors });

  const handleGetSubSectors = async (parentSector: Sector) => {
    store.setParentSector(parentSector);

    navigate("/sub-sector");
  };

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Card width={{ base: "90%", md: "80%", lg: "50%" }} p={{ base: "20px", md: "40px" }}>
        <Stack spacing="24px">
          <Flex justifyContent="space-between" alignItems="center">
            <Heading fontSize="2xl">Sectors</Heading>
            <Button fontSize="xs" width={{ md: "215px" }}>
              <Link to={"/add-sector"}> Add New</Link>
            </Button>
          </Flex>

          {getSector?.data?.data?.map((item: Sector) => (
            <Box
              border="1px solid rgba(123, 123, 123, 0.50)"
              p="16px"
              borderRadius="8px"
              cursor={"pointer"}
              key={item?._id}
              onClick={() => handleGetSubSectors(item)}
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
