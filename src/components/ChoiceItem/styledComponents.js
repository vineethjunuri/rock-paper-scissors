import styled from 'styled-components'

export const SelectorImage = styled.img`
  width: 130px;
  height: 130px;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`

export const SelectorButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const SelectorItem = styled.li`
  margin: auto;
  margin-top: 40px;
`
