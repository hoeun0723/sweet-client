import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnEdit.style';
import { IcEdit2 } from '../../../../assets/svg';
type BtnEditProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
};
const BtnEdit = ({ disabled, children, customStyle, onClick }: BtnEditProps) => {
  return (
    <S.Wrapper disabled={disabled} onClick={onClick} style={customStyle}>
      <IcEdit2 style={{ width: '2.4rem', color: 'white' }} />
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
};

export default BtnEdit;
