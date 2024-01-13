import { SelectStyle } from "./styles";

type CategoryListItemProps = {
  value: string[];
  text: string[];
};

export const Select = (props: CategoryListItemProps) => {
  return (
    <>
      <SelectStyle>
        {props.value.map((item,index) => (
          <option key={item+index} value={props.value[index]}>{props.text[index]}</option>
        ))}
      </SelectStyle>
    </>
  );
};
