import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { AssignmentContext } from '../contexts';
import AdBanner from '../components/AdBanner';
import Issue from '../components/Issue';
import Spinner from "../assets/Spinner.gif";
import * as S from '../styles/Issues.styled'

const IssuesContainer = () => {
    const {
        isLoading,
        issueList,
        isNoMore,
        isError,
        getNextPageList,
    } = useContext(AssignmentContext);
    const bottomLoader = useRef<HTMLDivElement>(null);
    
    const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
        observer.unobserve(bottomLoader.current as HTMLDivElement);
        if (isNoMore) {
            observer.disconnect();
            return;
        }
        getNextPageList();
        }
    },[isLoading, isNoMore, getNextPageList]
    );

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (bottomLoader.current) {
            observer.observe(bottomLoader.current);
        }
        return () => {
            observer && observer.disconnect();
        };
    }, [handleObserver]);


    if (isError) {
        return <div>에러가 발생헀습니다.</div>;
    }
    
  return (
    <S.IssuesContainer>
      <S.IssueList>
        {issueList.map((issue,index) =>  {
          const showAd = (index+1)%4 === 0 
          return (
            <React.Fragment key={issue.number}>
              <Issue issue={issue} key={issue.number}/>
              {showAd && <AdBanner/>}
            </React.Fragment>
          )
        })}
      </S.IssueList>
      <S.ScrollObserver ref={bottomLoader}>
        {isLoading && <img src={Spinner} alt='img'/>}
      </S.ScrollObserver>
    </S.IssuesContainer>
  )
}

export default IssuesContainer