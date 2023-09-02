import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const IssueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  padding: 20px 10px;
  border : solid white 1px;
  margin-bottom: 10px;
  p {
    color : white;
  }
`
export const IssueLink = styled(Link)`
  color : white;
`

export const IssueInfo = styled.div`
`