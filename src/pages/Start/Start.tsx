import { Person1, Person2, Person3, Person4 } from '../../assets/svg';
import * as S from './Start.style';
import present from '../../assets/img/gift1_2.png';
//import { post } from '../../apis/client';
// import StartAnimation from '../../../public/motions/start_motion.json';
// import { useEffect, useRef, useState } from 'react';
import { ScrollAnimationContainer } from '../../components/ScrollAnimationContainer/ScrollAnimationContainer';
import { ScrollAnimationLeftContainer } from '../../components/ScrollAnimationContainer/ScrollAnimationContainerLeft';
import StartHeader from './StartHeader/StartHeader';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router';
// import LottieAnimation from '../../hooks/lottie-animation/LottieAnimation';
import BtnFill from '../../components/common/Button/Cta/fill/BtnFill';
import { kakaoURL } from '../../utils/login';

// interface TokenResponseType {
//   data: {
//     accessToken: string;
//     refreshToken: string;
//   };
// }

export const isTokenExist = (): boolean => {
  const token = localStorage.getItem('EXIT_LOGIN_TOKEN'); // 'yourTokenKey'는 실제 사용하는 토큰의 키로 대체하세요
  return !!token;
};

const Start = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.replace(kakaoURL);
  };
  // const handleClick = () => {
  //   const fetchExAuth = (): Promise<TokenResponseType> => post('/member/token/2');
  //   fetchExAuth().then((response: TokenResponseType) => {
  //     const data = response;
  //     const JWT = data.data.accessToken;
  //     if (data) {
  //       localStorage.setItem('EXIT_LOGIN_TOKEN', JWT);
  //       console.log(data);
  //       console.log(localStorage.getItem('EXIT_LOGIN_TOKEN'));
  //     }
  //   });

  //   navigate('/mypage');
  // };

  const goGiftRoom = () => {
    console.log('선물방으로 이동');
    navigate('/onboarding');
  };

  return (
    <S.Wrapper>
      <StartHeader />
      <S.TextWrapper>
        <S.TitleText>
          <div>함께라서</div> 더 스윗한 마음
        </S.TitleText>
        <S.SubTitleText>여러 명이 선물을 준비하는 가장 쉬운 방법</S.SubTitleText>
      </S.TextWrapper>

      <S.ImgWrapper>
        <img src={present} alt='선물' style={{ width: '22rem' }} />
      </S.ImgWrapper>

      <S.Gradient />

      <S.DownIcon />

      {isTokenExist() ? (
        <BtnFill
          onClick={goGiftRoom}
          customStyle={{
            padding: '1.5rem 8.1rem 1.6rem 8.1rem',
            position: 'fixed',
            bottom: '2rem',
            zIndex: '3',
            width: '33.5rem',
          }}
        >
          새로운 선물 준비하기
        </BtnFill>
      ) : (
        <S.KakaoLogin onClick={handleLogin} />
      )}
      {/* <S.BtnGradient /> */}

      <S.Main2 />
      <S.PersonWrapper>
        <ScrollAnimationContainer>
          <Person1 style={{ width: '25.1rem' }} />
          <Person2 style={{ width: '21.4rem' }} />
          <Person3 style={{ width: '31.5rem' }} />
        </ScrollAnimationContainer>
        <ScrollAnimationLeftContainer>
          <Person4 style={{ width: '22.5rem' }} />
        </ScrollAnimationLeftContainer>
      </S.PersonWrapper>
      <S.Main3 />
      <S.Main4 />
      <Footer customStyle={{ position: 'absolute', top: '283rem' }} />
    </S.Wrapper>
  );
};

export default Start;
