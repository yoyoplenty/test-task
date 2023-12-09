import type React from 'react';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { Field, type FieldProps } from 'formik';

interface ComponentProps {
  name: string;
  label?: string;
  placeholder?: string;
  selectFontSize?: string;
  selectWidth?: string;
  children?: any;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  border?: string;
  defaultValue?: string;
}

const Dropdown: React.FC<ComponentProps> = ({
  name,
  label,
  placeholder,
  selectWidth,
  children,
  onChange,
  value,
  disabled,
  border,
  defaultValue,
}) => {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl
          isInvalid={!!(form.touched[name] && form.errors[name])}
          marginInline="auto"
          isDisabled={disabled}
        >
          <Flex direction="column" justifyContent="space-between">
            <FormLabel fontSize="sm" mr={0} color="#263152">
              {label}
            </FormLabel>

            <Select
              {...field}
              placeholder={placeholder}
              color="#263152"
              size="md"
              fontSize={{ base: 'xs', md: 'md' }}
              w={selectWidth}
              onChange={(e) => {
                field.onChange(e);
                onChange && onChange(e.target.value);
              }}
              value={value}
              zIndex="1000"
              border={border}
              defaultValue={defaultValue}
              _placeholder={{ fontsize: '#CBD5E1' }}
            >
              {children}
            </Select>
          </Flex>

          {form.errors[name] && form.touched[name] && (
            <FormErrorMessage>{form.errors[name] as any}</FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default Dropdown;
