import React from "react";
import styled from "styled-components";

const Shell = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: 0 26px;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export type PaddingProps = {
  children: React.ReactNode;
  width?: string;
};

const Padding: React.FC<PaddingProps> = ({ children, width }) => (
  <Shell>
    <Wrapper width={width}>{children}</Wrapper>
  </Shell>
);

export default Padding;
