import React from "react";
import styled from "styled-components";

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.7rem;
  &::-webkit-scrollbar{
    display: none;
}
`;

const Container = styled.div`
  background-color: cornflowerblue;
  color: lightgray;
  position: relative;
  min-height: 100vh;
  padding: 10px;
`;

const Wrapper = styled.div`
  padding-bottom: 2.5rem;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
`;
const Copyright = styled.span`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Bottom>
      <Container>
        <Wrapper>
          <List>
            <ListItem>Guide</ListItem>
            <ListItem>Support</ListItem>
            <ListItem>API</ListItem>
            <ListItem>Community</ListItem>
          </List>
          <Copyright>Todd Granados Ⓒ</Copyright>
        </Wrapper>
      </Container>
    </Bottom>
  );
};

export default Footer;
