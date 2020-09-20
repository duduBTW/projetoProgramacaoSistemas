import { ValidationRules } from "react-hook-form";

interface SchemaProps {
  lg:
    | boolean
    | "auto"
    | 2
    | 1
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | undefined;
  name: string;
  label: string;
  rules?: ValidationRules;
  type?: string;
  masked?: boolean;
  select?: boolean;
  options?: any;
  date?: boolean;
  mask?: string;
  blank?: boolean;
  onChange?: (value: any, index: string) => void;
  hidden?: boolean;
  value?: any;
}

interface FormProps {
  defaultValues?: any;
  onSubmit?: any;
  schema: Array<SchemaProps>;
  buttons?: any;
  title?: any;
  classForm?: any;
  classBody?: any;
  customValue?: any;
}

interface FormBodyProps {
  schema: Array<SchemaProps>;
  register: any;
  control: any;
  rules?: ValidationRules;
  errors: any;
  index?: string;
  customValue: any;
}
