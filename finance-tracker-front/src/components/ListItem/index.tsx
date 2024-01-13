import { CategoryListItemStyle } from "./styles";

type CategoryListItemProps = {
  value:string;
  type: string;
}

export const CategoryListItem = (props:CategoryListItemProps) => {
  return (
    <>
      <CategoryListItemStyle>
      {props.value} <span className={props.type}>{props.type}</span>
      </CategoryListItemStyle>
    </>
  )
}