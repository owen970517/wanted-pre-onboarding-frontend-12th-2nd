import { useState, createContext, ReactNode, useCallback } from "react";
import { IssueProps, IssuesProps } from "../types/issues";
import { getIssue, getIssues } from "../apis/github";

interface AssignmentContextProps {
  isLoading: boolean;
  getListByPageNumber: (pageNumber: number) => Promise<void>;
  getNextPageList: () => void;
  issueList: IssuesProps[];
  getIssueDetail: (issueNum: string) => void;
  issueDetail: IssueProps ;
  pageNum: number;
  isNoMore: boolean;
  isError: boolean; 
}
export const AssignmentContext = createContext<AssignmentContextProps>({
  isLoading: false,
  getListByPageNumber: () => Promise.resolve(),
  getNextPageList: () => {},
  issueList: [],
  getIssueDetail: () => {},
  issueDetail: {} as IssueProps,
  pageNum: 0,
  isNoMore: false,
  isError: false,
});

const ContextProvider:React.FC<{children:ReactNode}> = ({ children }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [issueList, setIssueList] = useState<IssuesProps[]>([]);
  const [issueDetail, setIssueDetail] = useState<IssueProps>({} as IssueProps);
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

  const getListByPageNumber = useCallback(async (pageNumber: number) => {
    try {
      setIsLoading(true);
      const response = await getIssues({page : pageNumber,state:'open',sort:'comments'})  
      if (response.data.length === 0) {
        setIsNoMore(true);
      }
      if (pageNumber !== 1) {
        setIssueList(prev => [...prev, ...response.data]);
      } else {
        setIssueList(response.data)
      }
 
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getNextPageList = useCallback(() => {
    const nextPage = pageNum + 1;
    getListByPageNumber(nextPage);
    setPageNum(nextPage);
  }, [pageNum, getListByPageNumber]);

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