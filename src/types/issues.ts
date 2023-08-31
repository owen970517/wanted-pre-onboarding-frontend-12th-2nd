export interface IssuesProps {
  body? : string;
  number :number;
  title : string;
  created_at : string;
  comments : number;
  user : {
    avatar_url : string;
    login : string;
  }
}