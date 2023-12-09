import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
  } from '@chakra-ui/react';
  import { Field, type FieldProps } from 'formik';
  
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
                _placeholder={{ fontSize: 'sm', color: '#CBD5E1' }}
                _focus={{
                  borderColor: 'transparent',
                  boxShadow: '0 0 5px #ACC9F1',
                }}
                disabled={disabled}
                pl={pl}
                border="1px solid #cbd5e1"
                height="40px"
                minW={w}
              />
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
  
  