import React, {Component} from 'react';
import QuestionItemToggle from '../QuestionItemToggle';


class FaqListAcc extends Component {

    state = {
        openArticleKey: null
    };
    render() {
         const {questions} = this.props;
        return (
            <ul className="delivery-faq__list">

                {questions.map((question, i) =>
                    <li className={ (this.state.openArticleKey ===i)? "delivery-faq__list-item" :  "delivery-faq__list-item--hide"}  key={i} onClick={this.handleClick.bind(this,i)}>
                    <QuestionItemToggle question={question} isOpen={this.state.openArticleKey ===i} />
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