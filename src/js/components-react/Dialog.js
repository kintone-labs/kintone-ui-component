import React, {Component} from 'react';

export default class Dialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: props.isVisible
        }
    }
    static defaultProps = {
        isVisible: false
    };
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.isVisible !== this.props.isVisible) {
            this.setState({
                isVisible: this.props.isVisible
            })
        }
    }
    hide = () => {
        this.setState({
            isVisible: false
        })
        this.props.onClose && this.props.onClose()
    }
    render() {
        if (this.state.isVisible) {
            return(
                <div className='kuc-dialog-container'>
                    <div className='kuc-dialog-wrapper'>
                        <div className='kuc-dialog-header'>
                            {this.props.header}
                            {
                                (this.props.showCloseButton)?
                                (
                                    <span className='kuc-dialog-close-button' onClick={this.hide}>
                                        &times;
                                    </span>
                                ):(
                                    <span></span>
                                )
                            }
                        </div>
                        <div className='kuc-dialog-body'>
                            {this.props.content}
                        </div>
                        <div className='kuc-dialog-footer'>
                            {this.props.footer}
                        </div>
                    </div>
                </div>
            ) 
        }
        return <div></div>;
    }
}