import React from 'react'
import { Link, useParams } from 'react-router-dom';
import * as S from '../styles/Issue.styled';
import { IssuesProps } from '../types/issues';

const Issue = ({issue}:{issue:IssuesProps}) => {
  const {id} = useParams();
  return (
    <S.IssueContainer key={issue?.number}>
      <S.IssueInfo>
        {!id ? <Link to={`/issues/${issue?.number}`}>{`#${issue?.number} ${issue?.title}`}</Link> :
          <p>{`#${issue?.number} ${issue?.title}`}</p>}
        <p>{issue?.created_at.slice(0,10)} by {issue?.user?.login}</p>
      </S.IssueInfo>
      <p>
        코멘트 : {issue?.comments}
      </p>
    </S.IssueContainer>
  )
}

export default Issue