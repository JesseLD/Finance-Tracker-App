import { InputStyle } from "./style";

type InputProps = {
  type: string;
  name: string;
  id: string;
  placeholder?: string;
  value?: string;
  isRequired?: boolean;
};

export const Input = (props: InputProps) => {
  return (
    <>
      {props.isRequired ? (
        <InputStyle
          type={props.type}
          name={props.name}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          required
        />
      ) : (
        <InputStyle
          type={props.type}
          name={props.name}
          id={props.id}
          value={props.value}
          placeholder={props.placeholder}
          required
        />
      )}
    </>
  );
};
