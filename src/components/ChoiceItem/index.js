import {SelectorImage, SelectorItem, SelectorButton} from './styledComponents'

const ChoiceItem = props => {
  const {choiceDetails, onClickChoice} = props
  const {id, imageUrl} = choiceDetails
  const onClickImage = () => {
    onClickChoice(id)
  }

  let testId = ''
  switch (id) {
    case 'ROCK':
      testId = 'rockButton'
      break
    case 'PAPER':
      testId = 'paperButton'
      break
    default:
      testId = 'scissorsButton'
  }

  return (
    <SelectorItem>
      <SelectorButton type="button" onClick={onClickImage} data-testid={testId}>
        <SelectorImage src={imageUrl} alt={id} />
      </SelectorButton>
    </SelectorItem>
  )
}

export default ChoiceItem
