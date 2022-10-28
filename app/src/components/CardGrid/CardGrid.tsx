import { Grid } from "../../styles/grid.style";

type CardGridProps = {
  children: JSX.Element[];
};

export default function CardGrid({ children }: CardGridProps) {
  return <Grid cols={6}>{children}</Grid>;
}
