import { Box, Button, Checkbox, Flex, Stack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import Input from "../../customs/input";
import { appStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/helpers/request";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { IUserSector } from "../../utils/types";
import { convertToFirstNameLastName } from "../../utils/helpers";

const Create = () => {
  const store = appStore();

  const userSector = store.userSector;
  const { firstName, lastName } = convertToFirstNameLastName(userSector?.name);

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (payload: IUserSector) => {
      return await postData("/user-sectors", payload);
    },
    onSuccess: (data) => {
      toast.success("User sector created successfully");

      store.setUserSector(data.data);
      navigate("/sectors");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const validationSchema = object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    sector: string().required("Sector is required"),
    agreedTerms: boolean().required(),
  });

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Box width={500} maxWidth={600} p={8} borderWidth={1} m={5} borderRadius={8} boxShadow="lg">
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
          onSubmit={async (values: any) => {
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

                    <Checkbox defaultChecked name="agreedTerms">
                      I agree to to the Terms of use and Privacy Policy
                    </Checkbox>

                    <Button type="submit">Save</Button>
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
