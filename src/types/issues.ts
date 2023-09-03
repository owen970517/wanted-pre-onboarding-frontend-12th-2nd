export interface IssuesProps {
  number :number;
  title : string;
  created_at : string;
  comments : number;
  user : {
    login : string;
  }
}

export interface IssueProps extends IssuesProps {
  user: {
    login: string;
    avatar_url: string;
  };
  body: string;
}
