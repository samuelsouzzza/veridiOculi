import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin: 1% 0;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 1% 2%;
  background-color: #fff;
  color: #333;
  border: 1px solid #bbb;
  border-radius: 5px;
  background-color: #fff;
  height: 35px;
  &::placeholder {
    color: #666;
    font-size: 0.85rem;
  }
`;
