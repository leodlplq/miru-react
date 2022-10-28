import styled from "styled-components";

const CardContainer = styled.div`
  aspect-ratio: 316/450;
  overflow: hidden;

  border-radius: 5px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover > a {
    top: 0;
  }
`;

const Overlay = styled.a`
  width: 100%;
  height: 100%;
  padding: 10px;

  position: absolute;
  top: 100%;
  left: 0;

  background-color: rgba(165, 206, 161, 0.7);
  z-index: 1;

  transition: top ease 300ms;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  color: white;
  text-decoration: none;
`;

const CardTitle = styled.span`
  font-size: 19px;
  font-weight: bold;
  align-self: flex-start;
`;

export { CardContainer, Overlay, CardTitle };
