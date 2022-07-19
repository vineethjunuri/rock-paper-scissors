import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import {Component} from 'react'
import ChoiceItem from '../ChoiceItem'
import {
  AppContainer,
  ScoreStatusContainer,
  SelectorNamesContainer,
  SelectorName,
  ScoreContainer,
  ScoreHeading,
  Score,
  SelectorsContainer,
  RulesButton,
  ResultContainer,
  SelectedContainer,
  SelectedContainerItems,
  Contestant,
  SelectedImage,
  ResultStatus,
  PlayAgainButton,
  ModalContainer,
  CloseButton,
  RulesImage,
} from './styledComponents'

import './index.css'

class RockPaperScissors extends Component {
  state = {
    score: 0,
    showSelectors: true,
    showResult: false,
    selectedChoice: '',
    computersChoice: '',
    resultState: '',
  }

  increaseScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  decreaseScore = () => {
    this.setState(prevState => ({score: prevState.score - 1}))
  }

  onClickChoice = id => {
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const computerChosed = choicesList[randomNumber].id

    let resultStatus = ''
    if (id === 'ROCK' && computerChosed === 'ROCK') {
      resultStatus = 'IT IS DRAW'
    } else if (id === 'ROCK' && computerChosed === 'PAPER') {
      resultStatus = 'YOU LOSE'
      this.decreaseScore()
    } else if (id === 'ROCK' && computerChosed === 'SCISSORS') {
      resultStatus = 'YOU WON'
      this.increaseScore()
    } else if (id === 'PAPER' && computerChosed === 'PAPER') {
      resultStatus = 'IT IS DRAW'
    } else if (id === 'PAPER' && computerChosed === 'ROCK') {
      resultStatus = 'YOU WON'
      this.increaseScore()
    } else if (id === 'PAPER' && computerChosed === 'SCISSORS') {
      resultStatus = 'YOU LOSE'
      this.decreaseScore()
    } else if (id === 'SCISSORS' && computerChosed === 'SCISSORS') {
      resultStatus = 'IT IS DRAW'
    } else if (id === 'SCISSORS' && computerChosed === 'ROCK') {
      resultStatus = 'YOU LOSE'
      this.decreaseScore()
    } else {
      resultStatus = 'YOU WON'
      this.increaseScore()
    }

    this.setState(prevState => ({
      showSelectors: !prevState.showSelectors,
      showResult: !prevState.showResult,
      selectedChoice: id,
      computersChoice: choicesList[randomNumber].id,
      resultState: resultStatus,
    }))
  }

  onClickPlayAgain = () => {
    this.setState(prevState => ({
      showSelectors: !prevState.showSelectors,
      showResult: !prevState.showResult,
      selectedChoice: '',
      computersChoice: '',
    }))
  }

  renderSelectorContainer = () => {
    const {showSelectors} = this.state
    const {choicesList} = this.props
    if (showSelectors === true) {
      return (
        <SelectorsContainer>
          {choicesList.map(eachItem => (
            <ChoiceItem
              key={eachItem.id}
              choiceDetails={eachItem}
              onClickChoice={this.onClickChoice}
            />
          ))}
        </SelectorsContainer>
      )
    }
    return null
  }

  scoreUpdate = status => {
    if (status === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (status === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  renderResultContainer = () => {
    const {
      showResult,
      selectedChoice,
      computersChoice,
      resultState,
    } = this.state

    const {choicesList} = this.props
    const userSelectedChoice = choicesList.filter(
      eachItem => eachItem.id === selectedChoice,
    )
    const computerSelectedChoice = choicesList.filter(
      eachItem => eachItem.id === computersChoice,
    )

    if (showResult === true) {
      return (
        <ResultContainer>
          <SelectedContainer>
            <SelectedContainerItems>
              <Contestant>YOU</Contestant>
              <SelectedImage
                src={userSelectedChoice[0].imageUrl}
                alt="your choice"
              />
            </SelectedContainerItems>
            <SelectedContainerItems>
              <Contestant>OPPONENT</Contestant>
              <SelectedImage
                src={computerSelectedChoice[0].imageUrl}
                alt="opponent choice"
              />
            </SelectedContainerItems>
          </SelectedContainer>
          <ResultStatus>{resultState}</ResultStatus>
          <PlayAgainButton onClick={this.onClickPlayAgain} type="button">
            PLAY AGAIN
          </PlayAgainButton>
        </ResultContainer>
      )
    }
    return null
  }

  render() {
    const {score} = this.state

    return (
      <>
        <AppContainer>
          <ScoreStatusContainer>
            <SelectorNamesContainer>
              <SelectorName>
                ROCK <br />
                PAPER <br />
                SCISSORS
              </SelectorName>
            </SelectorNamesContainer>
            <ScoreContainer>
              <ScoreHeading>Score</ScoreHeading>
              <Score>{score}</Score>
            </ScoreContainer>
          </ScoreStatusContainer>
          {this.renderSelectorContainer()}
          {this.renderResultContainer()}
          <Popup
            modal
            trigger={<RulesButton>RULES</RulesButton>}
            className="popup-content"
          >
            {close => (
              <ModalContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <IoMdClose size={20} color="#231f20" />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </ModalContainer>
            )}
          </Popup>
        </AppContainer>
      </>
    )
  }
}

export default RockPaperScissors
