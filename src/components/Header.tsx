import { API_URL } from '../constants/urls';
import * as S from '../styles/Header.styled'

const Header = () => {

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderTitle>{API_URL.organization} / {API_URL.repo}</S.HeaderTitle>
      </S.HeaderContainer>
      <S.Padding />
    </>
  );
};

export default Header;
