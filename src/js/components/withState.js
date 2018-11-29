import {Component} from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent => {
    return class Wrapper extends Component {
        static propTypes = {
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.array,
                PropTypes.object
            ])
        }

        constructor(props) {
            super(props);
            this.state = {...props};
        }

        componentWillReceiveProps({value}) {
            this.setState({value});
        }

        render() {
            return <WrappedComponent {...this.state} ref={c => (this.inner = c)} />;
        }
    };
};
