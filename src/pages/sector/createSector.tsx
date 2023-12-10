import { useEffect } from "react";
import { Box, Button, Flex, Heading, Spinner, Stack, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import Input from "../../customs/input";
import { ReactComponent as Icon } from "../../svgs/login.svg";
import { useMutation } from "@tanstack/react-query";
import { postData } from "../../utils/helpers/request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authorizeUserRole } from "../../utils/middleware/auth";
import { appStore } from "../../store";

const CreateSector = () => {
  const store = appStore();
  const navigate = useNavigate();

  const isAuthorized = authorizeUserRole();

  useEffect(() => {
    if (!isAuthorized) navigate("/");
  }, [isAuthorized, navigate]);

  const validationSchema = object({
    name: string().required("Sector Name is Required"),
  });

  const mutation = useMutation({
    mutationFn: async (payload) => {
      return await postData("/sectors", payload, store.authUser.token);
    },
    onSuccess: (data) => {
      toast.success("Sector created successfully");

      navigate("/add-sub-sector");
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
          Add Sector
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
          initialValues={{ name: "" }}
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
                    <Input placeholder="Sector Name" name="name" label="Sector Name" type="text" />

                    <Button type="submit">{mutation.isPending ? <Spinner /> : "Add Sector"}</Button>
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

export default CreateSector;
