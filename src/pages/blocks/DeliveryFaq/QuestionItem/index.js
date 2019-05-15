import React, {Component} from 'react';

class QuestionItem extends Component {
constructor(props){

    super(props);
    this.state = {
        isOpen: false
    };


    console.log('инициализация.мне установили состояния,ты можешь через props установить состояние');
}



    componentWillMount(){
        console.log('6.инициализация. строюсь виртуально, ты можешь пока подтянуть данные');
    }


    componentDidMount(){
        console.log('6.инициализация. строюсь на странице и построился, ты можешь узнать мою ширину и высоту');
        console.log('====================')
    }

    componentWillUpdate(){
        console.log('1.обновление. компонент будет перестаиваться,получил нужные props и/или состояния. ты можешь отобразить что то.');
    }

    shouldComponentUpdate(nextProps,nextState){

        return this.state.isOpen !== nextState.isOpen;



    }

    componentDidUpdate(){
        console.log('1.обновление .новые props и состояние уже мне присвоены. ты можешь узнать мою новую ширину и высоту');
        console.log('====================')
    }

    render() {
        console.log('инициализация.или обновление.рендер');
        const {question} = this.props;
        return (

            <>
            <li className={(this.state.isOpen) ? "delivery-faq__list-item" : "delivery-faq__list-item--hide"} onClick={this.handleClick}>
                {question.title}

                {(this.state.isOpen)?<p className="delivery-faq__content"> {question.content}</p> : null}

            </li>


            </>
        )

    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen

        });
    };




}



export default QuestionItem;