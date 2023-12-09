import { Box, Button, Checkbox, Flex, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import Input from "../../customs/input";

const Create = () => {
  const validationSchema = object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    sector: string().required("Sector is required"),
    agreedTerms: boolean().required(),
  });

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Box
        width={500}
        maxWidth={600}
        p={8}
        borderWidth={1}
        m={5}
        borderRadius={8}
        boxShadow="lg"
      >
        <Formik
          enableReinitialize
          validateOnMount
          initialValues={{
            firstName: "",
            lastName: "",
            sector: "",
            agreedTerms: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {}}
        >
          {(props) => {
            return (
              <Form>
                <Box m={[5, 7]}>
                  <Stack gap="4">
                    <Input
                      placeholder="FirstName"
                      name="firstName"
                      label="First Name"
                      type="text"
                    />

                    <Input
                      placeholder="LastName"
                      name="lastName"
                      label="Last Name"
                      type="text"
                    />

                    <Input
                      placeholder="sectors"
                      label="Sectors"
                      name="sector"
                      type="text"
                    />

                    <Checkbox defaultChecked name="agreedTerms">
                      I agree to to the Terms of use and Privacy Policy
                    </Checkbox>

                    <Button>Save</Button>
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

export default Create;
