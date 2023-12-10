import {
  Box,
  Button,
  Flex,
  Heading,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import Input from "../../customs/input";
import { ReactComponent as Icon } from "../../svgs/login.svg";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/helpers/request";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getCurrentUser } from "../../utils/storage/data";
import { setLocalStorage } from "../../utils/storage";
import { appStore } from "../../store";

const Login = () => {
  const store = appStore();
  const navigate = useNavigate();

  const validationSchema = object({
    email: string().email().required("Email is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const mutation = useMutation({
    mutationFn: async (payload: any) => {
      return await postData("/auth/login", payload);
    },
    onSuccess: (res) => {
      const data = res?.data?.data;
      const user = Object.assign(data.user, { token: data.token });

      setLocalStorage("user", user);
      store.setAuthUser(getCurrentUser());

      if (res.status === 200 || res.status === 201) {
        toast.success("User logged in successfully");

        if (data?.user?.role === "admin") navigate("/sector");
        else navigate("/add-user-sector");
      } else {
        toast.error(res.message);

        navigate("/");
      }
    },
    onError: (error) => {
      toast.error("Unable to login");

      navigate("/");
    },
  });

  return (
    <Flex minHeight="100vh" align="center" justify="center" direction="column">
      <Box m={3}>
        <VStack>
          <Icon />
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
          onSubmit={async (values: any) => {
            await mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form onSubmit={props.handleSubmit}>
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

                    <Button type="submit">
                      {mutation.isPending ? <Spinner /> : "Login"}
                    </Button>
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

export default Login;
