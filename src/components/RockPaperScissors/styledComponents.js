import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Bree Serif';
  padding: 20px;
`
export const ScoreStatusContainer = styled.div`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 10px;
  width: 90%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`
export const SelectorNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const SelectorName = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin: 0px;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  width: 150px;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 200px;
  }
`
export const ScoreHeading = styled.p`
  font-weight: 600;
  color: #223a5f;
  font-size: 22px;
  margin-bottom: 5px;
  margin-top: 10px;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 38px;
  font-weight: 600;
  margin: 0px;
  font-family: 'Roboto';
`
export const SelectorsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 350px;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const RulesButton = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  width: 120px;
  height: 60px;
  font-family: 'Bree Serif';
  font-size: 24px;
  border-radius: 10px;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectedContainer = styled.div`
  display: flex;
`

export const SelectedContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Contestant = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
`
export const SelectedImage = styled.img`
  width: 130px;
  height: 130px;
  @media screen and (min-width: 768px) {
    width: 230px;
    height: 230px;
  }
`

export const ResultStatus = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-family: 'Roboto';
  text-align: center;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  width: 300px;
  height: 80px;
  border: none;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  font-size: 24px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const RulesImage = styled.img`
  width: 80%;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  width: 28px;
  height: 28px;
  border: none;
  margin-top: 18px;
  margin-right: 18px;
  outline: none;
  cursor: pointer;
`
