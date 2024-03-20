import styled from 'styled-components';

type ContainerProps = {
  primary?: boolean;
};

export const Container = styled.button<ContainerProps>`
  background-color: ${({ primary }) => (primary ? '#39A600' : '#fff')};
  color: ${({ primary }) => (primary ? '#fff' : '#39A600')};
  width: 100%;
  height: 35px;
  border: ${({ primary }) => (primary ? 'none' : '0 solid #39A600')};
  font-size: 1rem;
  transition: 0.5s;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ primary }) => (primary ? '#39A600cc' : '#39A60033')};
  }
`;
