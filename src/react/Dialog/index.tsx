import React, {ReactElement} from 'react';
import IconButton from '../IconButton';
import '../../css/font.css';
import '../../css/Dialog.css';
import Message from '../constant/Message';


type DialogProps = {
  header?: string | ReactElement;
  content?: string | ReactElement;
  footer?: string | ReactElement;
  isVisible?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
};

const Dialog = ({header = '', content = '', footer = '', isVisible = true, showCloseButton = true, onClose}: DialogProps) => {
  let hidden = '';
  if (isVisible === false) {
    hidden = 'hidden';
  }
  if (typeof header !== 'string' && !React.isValidElement(header)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  if (typeof footer !== 'string' && !React.isValidElement(footer)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  if (typeof content !== 'string' && !React.isValidElement(content)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  if (typeof showCloseButton !== 'boolean') {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  if (typeof isVisible !== 'boolean') {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  return (
    <div className={`kuc-dialog-container ${hidden}`}>
      <div className="kuc-dialog-wrapper">
        <div className="kuc-dialog-header">
          {
            (header) ? header : <span />
          }
          {
            (showCloseButton) ?
              (
                <span
                  className="kuc-dialog-close-button"
                >
                  <IconButton type="close" onClick={onClose} />
                </span>
              ) :
              (
                <span />
              )
          }
        </div>
        <div className="kuc-dialog-body">
          {
            content
          }
        </div>
        <div className="kuc-dialog-footer">
          {
            footer
          }
        </div>
      </div>
    </div>
  );
};

export default Dialog;
