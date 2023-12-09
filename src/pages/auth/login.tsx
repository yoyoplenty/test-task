import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import Input from "../../customs/input";
import { ReactComponent as Login } from "../../svgs/login.svg";

const Create = () => {
  const validationSchema = object({
    email: string().email().required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain an uppercase letter")
      .matches(/[a-z]/, "Password must contain a lowercase letter")
      .matches(/[0-9]/, "Password must contain a number")
      .matches(
        /[~!@#$%^&*()_+=-]/,
        "Password must contain a special character"
      ),
  });

  return (
    <Flex minHeight="100vh" align="center" justify="center" direction="column">
      <Box m={3}>
        <VStack>
          <Login />
        </VStack>

        <Heading my={3} textAlign={"center"}>
          Welcome back
        </Heading>

        <Text size={"sm"} textAlign={"center"}>
          Enter Your login details
        </Text>
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
            email: "",
            password: "",
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
                      placeholder="Email"
                      name="email"
                      label="Email Address"
                      type="email"
                    />

                    <Input
                      placeholder="Password"
                      name="password"
                      label="Password"
                      type="password"
                    />

                    <Button>Login</Button>
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
