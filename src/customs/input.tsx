/* eslint-disable no-unused-vars */
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Field, type FieldProps } from 'formik';
import { useState } from 'react';

interface Props {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  variant?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  pl?: string;
  w?: string;
}

const TextInput = (props: Props) => {
  const { name, label, type, placeholder, variant, disabled, pl, w } = props;
  const [show, setShow] = useState(false);

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <FormControl
          isInvalid={!!(form.touched[name] && form.errors[name])}
          minH="60px"
        >
          <FormLabel>{label}</FormLabel>

          <InputGroup>
            <Input
              {...field}
              placeholder={placeholder}
              variant={variant || 'outline'}
              fontSize={{ base: 'md' }}
              _placeholder={{ fontSize: 'xs', color: '#CBD5E1' }}
              _focus={{
                borderColor: 'transparent',
                boxShadow: '0 0 5px #ACC9F1',
              }}
              type={handleType(type, show)}
              disabled={disabled}
              pl={pl}
              border="1px solid #cbd5e1"
              height="40px"
              minW={w}
            />

            {type === 'password' && (
              <InputRightElement width="3.5rem">
                <Button
                  variant="ghost"
                  background="none"
                  size="sm"
                  fontSize="sm"
                  fontWeight="500"
                  onClick={() => setShow(!show)}
                  color="brand.100"
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            )}
          </InputGroup>

          {form.touched[name] && form.errors[name] && (
            <FormErrorMessage fontSize="small">
              {form.errors[name] as any}
            </FormErrorMessage>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default TextInput;

const handleType = (type: string, show: boolean) => {
  if (type == 'password') {
    if (show) {
      return 'text';
    } else {
      return 'password';
    }
  } else {
    return type;
  }
};
