import { Box, Button, Flex, Heading, Spinner, Stack, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import Input from "../../customs/input";
import { appStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { patchData } from "../../utils/helpers/request";
import { ReactComponent as Icon } from "../../svgs/login.svg";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { IUserSector } from "../../utils/types";
import { convertToFirstNameLastName } from "../../utils/helpers";

const UpdateUserSector = () => {
  const store = appStore();
  const navigate = useNavigate();

  const userSector = store.userSector;

  const validationSchema = object({
    firstName: string().optional(),
    lastName: string().optional(),
  });

  const mutation = useMutation({
    mutationFn: async (payload: IUserSector | Partial<IUserSector>) => {
      return await patchData(`/user-sectors/${userSector._id}`, payload, store.authUser.token);
    },
    onSuccess: (response) => {
      const res = response.response.data;

      if (res.statusCode === 200 || res.statusCode === 201) {
        toast.success("User sector updated successfully");

        navigate("/add-user-sector");
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
          Update user Sector
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
          onSubmit={async (values: any) => {
            let { firstName, lastName } = convertToFirstNameLastName(userSector.name);

            firstName = firstName | values.firstName;
            lastName = lastName | values.lastName;

            const payload = { name: firstName + " " + lastName };

            await mutation.mutate(payload);
          }}
        >
          {(props) => {
            return (
              <Form onSubmit={props.handleSubmit}>
                <Box m={[5, 7]}>
                  <Stack gap="4">
                    <Input placeholder={userSector.firstName} name="firstName" label="First Name" type="text" />

                    <Input placeholder={userSector.lastName} name="lastName" label="Last Name" type="text" />

                    <Button type="submit">{mutation.isPending ? <Spinner /> : "Save Changes"}</Button>
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

export default UpdateUserSector;
