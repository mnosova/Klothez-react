import React, {Component} from 'react';
import './style.scss';
import QuestionItemAcc from '../QuestionItemToggle';


class FaqListAcc extends Component {

    state = {
        openArticleKey: null
    };
    render() {
         const {questions} = this.props;
        return (
            <ul className="delivery-faq__list">

                {questions.map((question, i) =>
                    <li className={ "delivery-faq__list-item" }  key={i} onClick={this.handleClick.bind(this,i)}>
                    <QuestionItemAcc question={question} isOpen={this.state.openArticleKey ===i} />
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
}

export default FaqListAcc;