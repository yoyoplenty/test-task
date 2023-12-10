import { useEffect } from "react";
import { Box, Button, Flex, Heading, Select, Stack, Text, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import Input from "../../customs/input";
import { ReactComponent as Icon } from "../../svgs/login.svg";
import { useQuery } from "@tanstack/react-query";
import { getData, postData } from "../../utils/helpers/request";
import { useMutation } from "@tanstack/react-query";
import { GenericResponse, Sector } from "../../utils/types/response";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authorizeUserRole } from "../../utils/middleware/auth";
import { appStore } from "../../store";

const CreateChildSubSector = () => {
  const store = appStore();
  const navigate = useNavigate();

  const isAuthorized = authorizeUserRole();

  useEffect(() => {
    if (!isAuthorized) navigate("/");
  }, [isAuthorized, navigate]);

  async function getSubSectors(): Promise<GenericResponse> {
    return await getData("/sectors/sub", store.authUser.token);
  }

  const getSector = useQuery({ queryKey: ["get-sub-sectors"], queryFn: getSubSectors });
  const subSectors = getSector?.data?.data;

  const validationSchema = object({
    name: string().required("Sector Name is Required"),
    parentSector: string().required("Parent Status is Required"),
  });

  const mutation = useMutation({
    mutationFn: async (payload) => {
      return await postData("/sectors", payload);
    },
    onSuccess: (data) => {
      toast.success("Child Sub Sector created successfully");

      navigate("/sectors");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  return (
    <Flex minHeight="100vh" align="center" justify="center" direction="column">
      <Box m={3}>
        <VStack>
          <Icon />
        </VStack>

        <Heading my={3} textAlign={"center"}>
          Add Child Sub Sector
        </Heading>
      </Box>
      <Box
        width={{ base: "90%", md: 500 }}
        maxWidth={600}
        p={{ base: 1, md: 8 }}
        borderWidth={1}
        m={5}
        borderRadius={8}
        boxShadow="lg"
      >
        <Formik
          enableReinitialize
          validateOnMount
          initialValues={{ name: "", parentSector: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values: any) => {
            await mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form onSubmit={props.handleSubmit}>
                <Box m={[5, 7]}>
                  <Stack gap="4">
                    <Text size={"md"}>Sub Sector</Text>
                    <Stack spacing={3}>
                      <Select placeholder="Sub Sector">
                        {subSectors &&
                          subSectors.map((subSector: Sector) => (
                            <option key={subSector._id} value={subSector._id}>
                              {subSector.name}
                            </option>
                          ))}
                      </Select>
                    </Stack>

                    <Input placeholder="Sector Name" name="name" label="Sector Name" type="text" />

                    <Button type="submit">Add Child Sector</Button>
                  </Stack>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Flex>
  );
};

export default CreateChildSubSector;
