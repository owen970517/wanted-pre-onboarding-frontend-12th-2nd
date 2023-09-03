import React from 'react'
import { useParams } from 'react-router-dom';
import * as S from '../styles/Issue.styled';
import { IssuesProps } from '../types/issues';
import { changeDateFormat } from '../utils/DateFormat';

const Issue = ({issue}:{issue:IssuesProps}) => {
  const {id} = useParams();
  return (
    <S.IssueContainer key={issue?.number}>
      <S.IssueInfo>
        {!id ? <S.IssueLink to={`/issues/${issue?.number}`}>{`#${issue?.number} ${issue?.title}`}</S.IssueLink> :
          <p>{`#${issue?.number} ${issue?.title}`}</p>}
        <p>{changeDateFormat(issue?.created_at)} by {issue?.user?.login}</p>
      </S.IssueInfo>
      <p>
        코멘트 : {issue?.comments}
      </p>
    </S.IssueContainer>
  )
}

export default Issue