import React from 'react'
import { styled } from 'styled-components'

const SkeletonUI = () => {
  return (
    <IssueContainer/>
  )
}

export default SkeletonUI

const IssueContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  padding: 20px 10px;
  background-color: #ccc;
  margin-bottom: 10px;
`
