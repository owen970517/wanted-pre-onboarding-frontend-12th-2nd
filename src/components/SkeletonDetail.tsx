import React from 'react'
import { styled } from 'styled-components'

const SkeletonDetail = () => {
  return (
    <Container>
        <Wrapper>
            <Avatar/>
            <IssuesContainer/>
        </Wrapper>
        <Info/>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ccc;
  padding: 10px;
  margin-right: 10px;
`;

const IssuesContainer = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 100px; /* 높이를 조정하여 화면을 벗어나지 않도록 합니다 */
  padding: 20px 10px;
  margin-bottom: 10px;
`;

const Info = styled.span`
  width: 100%;
  height: 500px;
  background-color: #ccc;
  margin-top: 8px;
`;
export default SkeletonDetail