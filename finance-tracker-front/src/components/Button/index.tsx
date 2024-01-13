import { ButtonStyle } from "./style";

type ButtonProps = {
  type: "button" | "reset" | "submit" | undefined;
  id: string;
  value?: string;
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      <ButtonStyle type={props.type} id={props.id}>
        {props.value}
      </ButtonStyle>
    </>
  );
};
