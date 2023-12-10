import { Box, Button, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import { object, string } from "yup";
import Input from "../../customs/input";
import { ReactComponent as Icon } from "../../svgs/login.svg";
import { useMutation } from "@tanstack/react-query";
import { postData } from "../../utils/helpers/request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateSector = () => {
  const navigate = useNavigate();

  const validationSchema = object({
    name: string().required("Sector Name is Required"),
  });

  const mutation = useMutation({
    mutationFn: async (payload) => {
      return await postData("/sectors", payload);
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
              <form onSubmit={props.handleSubmit}>
                <Box m={[5, 7]}>
                  <Stack gap="4">
                    <Input placeholder="Sector Name" name="name" label="Sector Name" type="text" />

                    <Button type="submit">Add Sector</Button>
                  </Stack>
                </Box>
              </form>
            );
          }}
        </Formik>
      </Box>
    </Flex>
  );
};

export default CreateSector;
