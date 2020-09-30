import React from "react";
import styled from "styled-components";

const Wrapper = styled.p`
  width: 100%;
  white-space: pre-wrap;
  margin: 20px 0;
`;

export type ParagraphProps = {
  text: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ text }) => (
  <Wrapper>{text}</Wrapper>
);

export default Paragraph;
