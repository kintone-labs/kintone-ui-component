const Message = {
  common: {
    SELECTTION_DUPLICATE_VALUE: 'The selection has duplicate value',
    INVALID_ARGUMENT: 'Error: invalid function arguments'
  },
  control: {
    INVALID_EVENT: 'Invalid event, this function accept only '
  },
  radioBtn: {
    MISSING_NAME: 'Missing name for radio buttons'
  },
  attachment: {
    en: {
      DROPPABLE_TEXT: 'Drop files here.',
      UPLOAD_BUTTON_TEXT: 'Browse',
      FILE_CONSTRAINT: '(Maximum: 1 GB)',
      EXCEED_LIMIT_1: 'The file size of "',
      EXCEED_LIMIT_2: '" exceeds the limit.'
    },
    ja: {
      DROPPABLE_TEXT: 'ここにファイルをドロップします。',
      UPLOAD_BUTTON_TEXT: '参照',
      FILE_CONSTRAINT: '(最大1 GB)',
      EXCEED_LIMIT_1: '「',
      EXCEED_LIMIT_2: '」のファイルサイズが制限を超えています。'
    },
    zh: {
      DROPPABLE_TEXT: '拖动文件到此。',
      UPLOAD_BUTTON_TEXT: '选择文件',
      FILE_CONSTRAINT: '(最大1 GB)',
      EXCEED_LIMIT_1: '“',
      EXCEED_LIMIT_2: '”的文件大小超出限制。'
    }
  }
};

export default Message;
