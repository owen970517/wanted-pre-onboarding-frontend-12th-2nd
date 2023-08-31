import { useState, createContext, ReactNode, useCallback } from "react";
import { IssuesProps } from "../types/issues";
import { detailProps } from "../types/IssueDetail";
import { getIssue, getIssues } from "../apis/github";

interface AssignmentContextProps {
  isLoading: boolean;
  getListByPageNumber: (pageNumber: number) => Promise<void>;
  getNextPageList: () => void;
  issueList: IssuesProps[];
  getIssueDetail: (issueNum: string) => void;
  issueDetail: detailProps | undefined;
  pageNum: number;
  isNoMore: boolean;
  isError: boolean; 
}
export const AssignmentContext = createContext<AssignmentContextProps>({
  isLoading: false,
  getListByPageNumber: (pageNumber: number) => Promise.resolve(),
  getNextPageList: () => {},
  issueList: [],
  getIssueDetail: (issueNum: string) => {},
  issueDetail: undefined,
  pageNum: 0,
  isNoMore: false,
  isError: false,
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [issueList, setIssueList] = useState<IssuesProps[]>([]);
  const [issueDetail, setIssueDetail] = useState<detailProps>();
  const [isNoMore, setIsNoMore] = useState(false);
  const [isError, setIsError] = useState(false);

  const getIssueDetail = useCallback(async (issueNumber: string) => {
    try {
      setIsLoading(true);
      const response = await getIssue(issueNumber)
      setIssueDetail(response.data);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getNextPageList = () => {
    if (!isNoMore) {
      setPageNum(prev => prev+1);
      getListByPageNumber(pageNum+1);
    }
  };

  const getListByPageNumber = useCallback(async (pageNumber: number) => {
    try {
      setIsLoading(true);
      const response = await getIssues({page : pageNumber,state:'open',sort:'comments'})  
      if (response.data.length === 0) {
        setIsNoMore(true);
      }
      setIssueList((prev) => [...prev, ...response.data]);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = {
    isLoading,
    getListByPageNumber,
    getNextPageList,
    issueList,
    getIssueDetail,
    issueDetail,
    pageNum,
    isNoMore,
    isError,
  };

  return (
    <AssignmentContext.Provider value={value}>
      {children}
    </AssignmentContext.Provider>
  );
};

export default ContextProvider;