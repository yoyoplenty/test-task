import { Box, Button, Checkbox, Flex, Heading, Select, Spinner, Stack, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import Input from "../../customs/input";
import { appStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { getData, patchData, postData } from "../../utils/helpers/request";
import { ReactComponent as Icon } from "../../svgs/login.svg";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { convertToFirstNameLastName } from "../../utils/helpers";
import { GenericResponse, Sector } from "../../utils/types/response";

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

  async function getSector(): Promise<GenericResponse> {
    return await getData("/sectors/parent-with-sub", store.authUser.token);
  }

  const getSectors = useQuery({ queryKey: ["get-all-sectors"], queryFn: getSector });
  const sectors = getSectors?.data?.data;

  const mutation = useMutation({
    mutationFn: async (payload: any) => {
      return firstName
        ? await patchData(`/user-sectors/${userSector._id}`, payload, store.authUser.token)
        : await postData("/user-sectors", payload, store.authUser.token);
    },
    onSuccess: (res) => {
      if (res.status === 200 || res.status === 201) {
        toast.success("User sector created successfully");

        store.setUserSector(res.data?.data);
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
          {firstName ? "Update user Sector" : "Add user Sector"}
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

            let selectedSectorId = values.sector;

            if (values.childSubSector) selectedSectorId = values.childSubSector;
            else if (values.subSector) selectedSectorId = values.subSector;

            const payload = {
              name: values.firstName + " " + values.lastName,
              sector: selectedSectorId,
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

                    {!firstName && (
                      <>
                        {/* Sector Select */}
                        <Select
                          placeholder="Select Sector"
                          name="sector"
                          onChange={(e) => {
                            props.handleChange("sector")(e);
                            props.setFieldValue("subSector", "");
                            props.setFieldValue("childSubSector", "");
                          }}
                          value={props.values.sector}
                        >
                          {sectors &&
                            sectors.map((sector: Sector) => (
                              <option key={sector._id} value={sector._id}>
                                {sector.name}
                              </option>
                            ))}
                        </Select>

                        {/* Sub-Sector Select */}
                        {props.values.sector &&
                          sectors.find((s: Sector) => s._id === props.values.sector)?.subSectors.length > 0 && (
                            <Select
                              placeholder="Select Sub-Sector"
                              name="subSector"
                              onChange={(e) => {
                                props.handleChange("subSector")(e);
                                props.setFieldValue("childSubSector", ""); // Reset childSubSector value
                              }}
                              value={props.values.subSector}
                            >
                              {sectors
                                .find((s: Sector) => s._id === props.values.sector)
                                ?.subSectors.map((subSector: Sector) => (
                                  <option key={subSector._id} value={subSector._id}>
                                    {subSector.name}
                                  </option>
                                ))}
                            </Select>
                          )}

                        {/* Child Sub-Sector Select */}
                        {props.values.subSector &&
                          sectors
                            .find((s: Sector) => s._id === props.values.sector)
                            ?.subSectors.find((ss: Sector) => ss._id === props.values.subSector)?.subSectors.length >
                            0 && (
                            <Select
                              placeholder="Select Child Sub-Sector"
                              name="childSubSector"
                              onChange={props.handleChange("childSubSector")}
                              value={props.values.childSubSector}
                            >
                              {sectors
                                .find((s: Sector) => s._id === props.values.sector)
                                ?.subSectors.find((ss: Sector) => ss._id === props.values.subSector)
                                ?.subSectors.map((childSubSector: Sector) => (
                                  <option key={childSubSector._id} value={childSubSector._id}>
                                    {childSubSector.name}
                                  </option>
                                ))}
                            </Select>
                          )}
                      </>
                    )}

                    {!firstName && (
                      <Checkbox
                        isChecked={props.values.agreedTerms}
                        onChange={() => props.setFieldValue("agreedTerms", !props.values.agreedTerms)}
                        name="agreedTerms"
                      >
                        I agree to the Terms of use and Privacy Policy
                      </Checkbox>
                    )}

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
