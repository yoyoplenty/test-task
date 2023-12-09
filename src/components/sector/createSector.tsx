import { Box, Button, Card, Flex, Heading, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Input from "../../customs/input";
import Select from "../../customs/select";

const CreateSector = () => {
  return (
    <Box mt="10">
      <Flex justifyContent="center">
        <Card w="40%" p="10" border="1px solid #e2e8f0">
          <Stack spacing="6">
            <Heading>Sector</Heading>

            <Formik
              enableReinitialize
              validateOnMount
              initialValues={{
                firstName: "",
                lastName: "",
                sector: "",
                category: "",
              }}
              // validationSchema={validationSchema}
              onSubmit={(values) => {}}
            >
              {(props) => {
                return (
                  <Form>
                    <Stack spacing="6">
                      <Input name="firstName" type="text" label="First Name" placeholder="John" />

                      <Input name="lastName" type="text" label="Last Name" placeholder="Smith" />

                      <Select
                        name="sector"
                        label="Sector"
                        // defaultValue="United Kingdom"
                      ></Select>

                      <Select name="division" label="Division of Sector"></Select>

                      <Button
                        type="submit"
                        bg="#2473F7"
                        color="#ffffff"
                        _hover={{
                          bg: "transparent",
                          border: "1px solid #2473F7",
                          color: "#2473F7",
                        }}
                      >
                        Save
                      </Button>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </Stack>
        </Card>
      </Flex>
    </Box>
  );
};

export default CreateSector;
