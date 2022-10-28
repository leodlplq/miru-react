import styled from "styled-components";

type GridProps = {
  cols?: number;
  gap?: number;
};
const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || 6}, 1fr);
  gap: ${(props) => props.gap || 20}px;
`;

export { Grid };
