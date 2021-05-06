import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

function Body() {
  return (
    <Wrapper>
      <Container>
        <Pin />
      </Container>
    </Wrapper>
  );
}

export default Body;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
const Container = styled.div`
  background-color: white;
`;
