import React, {ReactElement} from 'react';
import IconButton from '../IconButton';
import '../../css/Dialog.css';

type DialogProps = {
  header: string | ReactElement;
  content: string | ReactElement;
  footer: string | ReactElement;
  isVisible: boolean;
  showCloseButton: boolean;
  onClose: () => void;
};

const Dialog = ({header, content, footer, isVisible = true, showCloseButton = true, onClose}: DialogProps) => {
  let hidden = '';
  if (isVisible === false) {
    hidden = 'hidden';
  }
  return (
    <div className={`kuc-dialog-container ${hidden}`}>
      <div className="kuc-dialog-wrapper">
        <div className="kuc-dialog-header">
          {
            header
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