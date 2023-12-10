import React from "react";
import { Select, Box } from "@chakra-ui/react";
import { Field, FormikProps } from "formik";
import { Sector } from "../../utils/types/response";

interface SectorSelectProps {
  name: string;
  label: string;
  sectors: Sector[];
}

const SectorSelect: React.FC<SectorSelectProps & { formik: FormikProps<{ [key: string]: any }> }> = ({
  name,
  label,
  sectors,
  formik,
}) => {
  return (
    <Box width="200px">
      <label htmlFor={name}>{label}</label>
      <Field
        as={Select}
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        <option value="">Select Sector</option>
        {sectors.flatMap((sector) => [
          <option key={sector._id} value={sector._id}>{`${"  ".repeat(sector.subSectors.length > 0 ? 1 : 0)}${
            sector.name
          }`}</option>,
        ])}
      </Field>
      {/* {formik.touched[name] && formik.errors[name] && <div style={{ color: "red" }}>{formik.errors[name]}</div>} */}
    </Box>
  );
};

export default SectorSelect;
