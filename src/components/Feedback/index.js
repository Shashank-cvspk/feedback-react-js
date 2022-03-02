// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  isSelected = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackSummary = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-summary-container">
        <img src={loveEmojiUrl} alt="loveEmoji" className="image" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="feedback-summary">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  onClickForm = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul className="List">
          {emojis.map(each => (
            <li key={each.id} className="list-items" onClick={this.isSelected}>
              <img src={each.imageUrl} alt={each.name} className="image" />
              <p>{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="app-container">
        <div className="container">
          {isFeedbackSelected
            ? this.renderFeedbackSummary()
            : this.onClickForm()}
        </div>
      </div>
    )
  }
}

export default Feedback
