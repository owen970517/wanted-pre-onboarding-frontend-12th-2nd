import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { AssignmentContext } from '../contexts';
import AdBanner from '../components/AdBanner';
import Issue from '../components/Issue';
import Spinner from "../assets/Spinner.gif";
import * as S from '../styles/Issues.styled'
import SkeletonUI from '../components/SkeletonUI';

const IssuesContainer = () => {
    const {
        isLoading,
        issueList,
        isNoMore,
        isError,
        pageNum,
        getNextPageList,
        getListByPageNumber,
    } = useContext(AssignmentContext);

    useEffect(() => {
        getListByPageNumber(1)
    },[getListByPageNumber])
    console.log(pageNum)
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
        {
            issueList.length === 0 ? Array.from({length: 10}).map((_, index) => <SkeletonUI key={index} />) :
            issueList.map((issue, index) => {
                const showAd = (index + 1) % 4 === 0;
                return (
                <React.Fragment key={issue.number}>
                    <Issue issue={issue} />
                    {showAd && <AdBanner />}
                </React.Fragment>
                );
            })
        }
        {isLoading && <S.SpinnerImg src={Spinner} alt="img" />}
        {!isNoMore && <S.ScrollObserver ref={bottomLoader} />}
    </S.IssuesContainer>
  )
}

export default IssuesContainer