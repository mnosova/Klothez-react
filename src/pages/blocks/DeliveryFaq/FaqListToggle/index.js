import React, {Component} from 'react';
import QuestionItemToggle from '../QuestionItemToggle';
import PropTypes from 'prop-types';


class FaqListToggle extends Component {

    state = {
        openArticleKey: null
    };

    render() {
        const {questions} = this.props;
        return (
            <ul className="delivery-faq__list">
                    {questions.map((question, i) =>
                        <li className={(this.state.openArticleKey === i) ? "delivery-faq__list-item" : "delivery-faq__list-item--hide"}
                            key={i} onClick={this.handleClick.bind(this, i)}>
                            {question.title}
                            {(this.state.openArticleKey === i) ? <QuestionItemToggle question={question}/> : null}
                        </li>
                    )}
            </ul>

        )
    }


    handleClick = (i) => {
        this.setState({
            openArticleKey: i

        })
    };

    static propTypes = {
        questions: PropTypes.array
    };
}

export default FaqListToggle;