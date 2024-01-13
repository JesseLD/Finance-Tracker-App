/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "./style";
import { CategoryListItem } from "../../components/ListItem";
import { useEffect, useState } from "react";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";

import { api } from "../../api/fetchApi";

interface CategoryInterface {
  name: string;
  type: string;
  // Adicione outras propriedades conforme necessário
}

export const Category = () => {
  const [category, setCategory] = useState<CategoryInterface[]>([]);

  async function getCategories() {
    const data = await api.getCategories();

    setCategory(data);
  }

  useEffect(() => {
    getCategories();

    const timerID = setInterval(() => {
      getCategories();
    }, 5000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <>
      <Container>
        <h1>Categories Page</h1>

        <form action="">
          <Input id="1" name="name" type="text" placeholder="Category Name" />
          <Select value={["Income", "Expense"]} text={["Income", "Expense"]} />

          <Button id="2" type="submit" value="Add" />
        </form>

        <ul className="category-list incomes-wrapper">
          <p className="subtitle">Incomes</p>
          {category.map((item) =>
            item.type == "income" ? (
              <CategoryListItem
                value={item.name}
                type={item.type.toLowerCase()}
              />
            ) : (
              ""
            )
          )}
        </ul>
        <ul className="category-list expenses-wrapper">
          <p className="subtitle">Expenses</p>
          {category.map((item) =>
            item.type == "expense" ? (
              <CategoryListItem
                value={item.name}
                type={item.type.toLowerCase()}
              />
            ) : (
              ""
            )
          )}
        </ul>
      </Container>
    </>
  );
};
