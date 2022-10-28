import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  height: 100vh;
  width: 350px;
  padding: 60px;
  position: fixed;
  top: 0;
  left: 0;

  &:after {
    content: "";
    height: 75%;
    width: 2px;
    background: #656565;
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    right: -2px;
  }
`;

const MenuPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 10px;
`;

const Img = styled.img`
  width: 120px;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;

  color: #656565;
  text-decoration: none;
  font-size: 20px;

  transition: color ease 300ms;

  &:hover {
    color: #307351;
  }
`;

export { Menu, MenuPart, Img, MenuLink };
