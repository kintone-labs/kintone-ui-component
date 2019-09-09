export default {
  '@global': {
    '.kuc-notify': {
      'user-select': 'none',
      top: '30px',
      left: '50%',
      transform: 'translate(-50%)',
      'min-height': '70px',
      'max-height': '150px',
      'min-width': '170px',
      'max-width': '500px',
      position: 'fixed',
      overflow: 'auto',
      'z-index': '2000'
    },
    '.kuc-notify.bg-danger': {
      background: '#e74c3c'
    },
    '.kuc-notify.bg-success': {
      background: '#91C36C'
    },
    '.kuc-notify.bg-infor': {
      background: '#3897d9'
    },
    '.kuc-notify .kuc-notify-title': {
      'font-family': 'HelveticaNeueW02-45Ligh,Arial,\'Hiragino Kaku Gothic ProN\',Meiryo,sans-serif',
      padding: '16px 56px 16px 24px',
      'text-shadow': '1px -1px 0 rgba(0,0,0,.5)',
      'font-size': '16px',
      'line-height': '1.5',
      color: 'white',
      'min-width': '80px'
    },
    '.kuc-notify .kuc-close-button': {
      right: '10px',
      top: '15px',
      position: 'absolute',
      cursor: 'pointer',
      width: '30px'
    },
    '.kuc-notify .kuc-icon-btn:disabled, .kuc-notify .kuc-icon-btn:disabled:hover': {
      color: 'rgba(255, 255, 255, 0.5)',
      border: 'rgba(255, 255, 255, 0.5)',
      'background-color': 'rgba(255, 255, 255, 0.5)'
    }
  }
};
