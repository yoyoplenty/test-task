import { Box, Button, Checkbox, Flex, Heading, Spinner, Stack, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import Input from "../../customs/input";
import { appStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/helpers/request";
import { ReactComponent as Icon } from "../../svgs/login.svg";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { IUserSector } from "../../utils/types";
import { convertToFirstNameLastName } from "../../utils/helpers";

const CreateUserSector = () => {
  const store = appStore();
  const navigate = useNavigate();

  const userSector = store.userSector;
  const { firstName = null, lastName = null } = userSector?.name
    ? convertToFirstNameLastName(userSector.name) ?? {}
    : {};

  const validationSchema = object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    sector: string().required("Sector is required"),
    agreedTerms: boolean().required("Terms required"),
  });

  const mutation = useMutation({
    mutationFn: async (payload: IUserSector) => {
      return await postData("/user-sectors", payload, store.authUser.token);
    },
    onSuccess: (response) => {
      const res = response.response.data;

      if (res.statusCode === 200 || res.statusCode === 201) {
        toast.success("User sector created successfully");

        store.setUserSector(res.data);
        navigate("/update-user-sector");
      } else {
        toast.error(res.message);

        navigate("/add-user-sector");
      }
    },
    onError: (error) => {
      toast.error("Unable to create user sector");

      navigate(-1);
    },
  });

  return (
    <Flex minHeight="100vh" align="center" justify="center" direction="column">
      <Box m={3}>
        <VStack>
          <Icon />
        </VStack>

        <Heading my={3} textAlign={"center"}>
          Add User To Sector
        </Heading>
      </Box>
      <Box width={500} maxWidth={600} p={8} borderWidth={1} m={5} borderRadius={8} boxShadow="lg">
        <Formik
          enableReinitialize
          validateOnMount
          initialValues={{
            firstName: "",
            lastName: "",
            sector: "",
            agreedTerms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values: any, { setSubmitting }) => {
            if (!values.agreedTerms) {
              toast.error("Please agree to the Terms of use and Privacy Policy");

              setSubmitting(false);
              return;
            }

            const payload = {
              name: values.firstName + " " + values.lastName,
              sector: values.sector,
              agreedTerms: values.agreedTerms,
            };

            await mutation.mutate(payload);
          }}
        >
          {(props) => {
            return (
              <Form onSubmit={props.handleSubmit}>
                <Box m={[5, 7]}>
                  <Stack gap="4">
                    <Input
                      placeholder={firstName ? firstName : "First Name"}
                      name="firstName"
                      label="First Name"
                      type="text"
                    />

                    <Input
                      placeholder={lastName ? lastName : "Last Name"}
                      name="lastName"
                      label="Last Name"
                      type="text"
                    />

                    <Input placeholder="sectors" label="Sectors" name="sector" type="text" />

                    <Checkbox
                      isChecked={props.values.agreedTerms}
                      onChange={() => props.setFieldValue("agreedTerms", !props.values.agreedTerms)}
                      name="agreedTerms"
                    >
                      I agree to the Terms of use and Privacy Policy
                    </Checkbox>

                    {firstName ? (
                      <Button type="submit">{mutation.isPending ? <Spinner /> : "Update"}</Button>
                    ) : (
                      <Button type="submit">{mutation.isPending ? <Spinner /> : "Save"}</Button>
                    )}
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

export default CreateUserSector;
