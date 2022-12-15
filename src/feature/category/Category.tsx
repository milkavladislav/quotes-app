import { Select, SelectChangeEvent } from "@mui/material";
import { QuotesCategory } from "../../utils/enums";
import { CustomInput, CustomMenuItem, Wrapper } from "./Category.style";

export interface ICategoryProps {
  name: string;
  changeCategory: (name: string) => void;
}

export const Category = ({ name, changeCategory }: ICategoryProps) => {
  return (
    <Wrapper>
      <Select
        value={name}
        input={<CustomInput />}
        onChange={(event: SelectChangeEvent) => {
          changeCategory(event.target.value);
        }}
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: "hsl(36deg 80% 60%)",
              maxHeight: 36 * 4.5,
            },
          },
        }}
      >
        {QuotesCategory.map((category) => (
          <CustomMenuItem disableRipple value={category}>
            {category}
          </CustomMenuItem>
        ))}
      </Select>
    </Wrapper>
  );
};
