export interface detailProps {
  body : string;
  comments : number;
  title : string;
  number : number
  created_at : string;
  user : {
    login : string;
    avatar_url : string;
  }
}