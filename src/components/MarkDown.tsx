import styled from "styled-components";
import MarkdownPreview from '@uiw/react-markdown-preview';

const Markdown = ({ content }: { content: string }) => {
  return (
    <BodyContainerStyled>
      <MarkdownPreview source={content}/>
    </BodyContainerStyled>
  );
};

export default Markdown;

const BodyContainerStyled = styled.div`
    padding: 30px 20px;
    ol,
    ul {
        list-style: inherit;
    }
`;