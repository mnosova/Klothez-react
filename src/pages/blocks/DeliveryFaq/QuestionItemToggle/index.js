import React, {Component} from 'react';
import PropTypes from 'prop-types'
class QuestionItem extends Component {

    componentWillReceiveProps(nextProps){
         console.log('');
     if (nextProps.isOpen !== this.props.isOpen)  console.log('1 или 2.обновление. родительсике props поменялись, ты можешь изменить мое состояние здесь,основываясь на новые props');
        else  console.log('5 или 4. noupdate')
    }

    componentWillUpdate(){
        console.log('1.обновление. компонент будет перестаиваться,получил нужные props и/или состояния. ты можешь отобразить что то.');
    }

    shouldComponentUpdate(nextProps,nextState){

    return this.props.isOpen !== nextProps.isOpen;




    }

    componentDidUpdate(){
        console.log('1 или 2.обновление .новые props и состояние уже мне присвоены. ты можешь узнать мою новую ширину и высоту');
        console.log('====================')
    }
    // componentWillUnmount(){
    //  console.log('');
    //
    // }

    render() {
        const {question,isOpen} = this.props;

        return (

            <>

                {question.title}

                {(isOpen)?<p className="delivery-faq__content"> {question.content}</p> : null}


            </>

        )


    }
propTypes = {
    question: PropTypes.object,
    isOpen: PropTypes.bool

}
}


export default QuestionItem;