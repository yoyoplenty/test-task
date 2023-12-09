import { Box, Button, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import Input from "../../customs/input";
import { ReactComponent as Icon } from "../../svgs/login.svg";

const CreateSector = () => {
  const validationSchema = object({
    name: string().required("Sector Name is Required"),
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
          initialValues={{
            name: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {}}
        >
          {(props) => {
            return (
              <Form>
                <Box m={[5, 7]}>
                  <Stack gap="4">
                    <Input placeholder="Sector Name" name="name" label="Sector Name" type="text" />

                    <Button>Add Sector</Button>
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
