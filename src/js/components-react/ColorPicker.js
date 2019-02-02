import React from 'react'
import reactCSS from 'reactcss'

import { CustomPicker } from 'react-color'
import { EditableInput, Hue, Saturation } from 'react-color/lib/components/common'
import ColorPickerFields from './ColorPickerFields'

export class ColorPicker extends React.Component {

    constructor(props) {
        super()
    
        this.state = {
          currentColor: props.hex,
          displayColorPicker: false,
        }
    }
    
    _handleClick = () => {
        this.setState({ displayColorPicker: true })  
    };

    _handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    _handleCancel = () => {
        this.setState({ displayColorPicker: false })
    };

    render() {
        const styles = reactCSS({
            'default': {
                body: {
                    padding: '5px 5px 0px',
                    display: 'flex'
                  },             
                hue: {
                    position: 'relative',
                    height: '150px',
                    width: '18px',
                    marginLeft: '10px',
                    border: '2px solid #B3B3B3',
                    borderBottom: '2px solid #F0F0F0'
                },
                input: {
                    height: 45,
                    width: 80,
                    border: `1px solid e3e7e8`,
                    paddingLeft: 10,
                    marginBottom: 10
                },
                saturation: {
                    width: '152px',
                    height: '152px',
                    position: 'relative',
                    border: '2px solid #B3B3B3',
                    borderBottom: '2px solid #F0F0F0',
                    overflow: 'hidden'
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
          });

        return (
            <div >
                <div onClick={ this._handleClick } >
                    <EditableInput
                        style={{ input: styles.input }}
                        value={this.props.hex}
                        onChange={this.props.onChange} 
                    />
                </div>

                { this.state.displayColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={this._handleClose}/>
                    <div className='kuc-pop-outer'>
                        <div style={styles.body}>
                            <div style={styles.saturation}>
                                <Saturation hsl={this.props.hsl} hsv={this.props.hsv} onChange={this.props.onChange}/>
                            </div>

                            <div style={styles.hue}>
                                <Hue hsl={this.props.hsl} onChange={this.props.onChange} direction='vertical'/>
                            </div>
                            <div>
                                <ColorPickerFields rgb={this.props.rgb} hsv={this.props.hsv} hex={this.props.hex} onChange={this.props.onChange} />
                            </div>
                        </div>
                        <div className="kuc-pop-bottom">
                            <button className="kuc-btn-ok" onClick={this._handleClose} >OK</button>
                            <button className="kuc-btn-cancel" onClick={this._handleCancel} >Cancel</button>
                        </div>  
                    </div>               
                </div> : null } 
            </div>
        )
    }
}

export default CustomPicker(ColorPicker)
