import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AssignmentContext } from '../contexts';
import * as S from '../styles/IssueDetail.styled';
import Issue from '../components/Issue';
import Markdown from '../components/MarkDown';
import SkeletonDetail from '../components/SkeletonDetail';

const IssueContainer = () => {
    const { getIssueDetail, issueDetail, isError , isLoading } =useContext(AssignmentContext);
    const {id} = useParams();
  
    useEffect(() => {
      if (id)  {
        getIssueDetail(id)
      }
    },[getIssueDetail, id])
    
    if (isError) {
      return <div>존재하지 않는 이슈 입니다.</div>;
    }
  return (
    <>
        {isLoading ? <SkeletonDetail/> :
            <>
                <S.WriterInfo>
                    <S.Avatar src={issueDetail.user?.avatar_url} alt='img'/>
                    <Issue issue={issueDetail} />
                </S.WriterInfo>
                <Markdown content={issueDetail.body} />
            </>
        }
    </>
  )
}

export default IssueContainer