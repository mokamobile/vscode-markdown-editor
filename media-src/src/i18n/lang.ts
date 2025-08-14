/**
 * 国际化语言配置
 */

// 语言定义
export interface LanguageDefinition {
  save: string;
  copyMarkdown?: string;
  copyHtml?: string;
  resetConfig?: string;
  resetConfirm?: string;
  alignLeft?: string;
  alignCenter?: string; 
  alignRight?: string;
  insertRowAbove?: string;
  insertRowBelow?: string;
  insertColumnLeft?: string;
  insertColumnRight?: string;
  'delete-row'?: string;
  'delete-column'?: string;
  copyMarkdownSuccess?: string;
  copyMarkdownError?: string;
  copyHtmlSuccess?: string;
  copyHtmlError?: string;
  resetConfigSuccess?: string;
  resetConfigError?: string;
  cancel?: string;
  confirm?: string;
  readFileError?: string;
  [key: string]: string | undefined;
}

// 语言包定义
export interface Languages {
  en_US: LanguageDefinition;
  ja_JP: LanguageDefinition;
  ko_KR: LanguageDefinition;
  zh_CN: LanguageDefinition;
  ru_RU: LanguageDefinition;
  uk_UA: LanguageDefinition;
  [key: string]: LanguageDefinition;
}

// 语言配置
export const Langs: Languages = {
  en_US: {
    save: 'Save',
    copyMarkdown: 'Copy Markdown',
    copyHtml: 'Copy HTML',
    resetConfig: 'Reset config',
    resetConfirm: "Are you sure to reset the markdown-editor's config?",
    alignLeft: 'Align Left',
    alignCenter: 'Align Center', 
    alignRight: 'Align Right',
    insertRowAbove: 'Insert Row Above',
    insertRowBelow: 'Insert Row Below',
    insertColumnLeft: 'Insert Column Left',
    insertColumnRight: 'Insert Column Right',
    'delete-row': 'Delete Row',
    'delete-column': 'Delete Column',
    copyMarkdownSuccess: 'Copy Markdown successfully!',
    copyMarkdownError: 'Copy Markdown failed! {0}',
    copyHtmlSuccess: 'Copy HTML successfully!',
    copyHtmlError: 'Copy HTML failed! {0}',
    resetConfigSuccess: 'Reset config successfully!',
    resetConfigError: 'Reset config failed!',
    cancel: 'Cancel',
    confirm: 'Confirm',
    readFileError: 'Unable to read file',
  },
  ja_JP: {
    save: '保存する',
    cancel: 'キャンセル',
    confirm: '確認',
    readFileError: 'ファイルを読み込めません',
  },
  ko_KR: {
    save: '저장',
    cancel: '취소',
    confirm: '확인',
    readFileError: '파일을 읽을 수 없습니다',
  },
  zh_CN: {
    save: '保存',
    copyMarkdown: '复制 Markdown',
    copyHtml: '复制 HTML',
    resetConfig: '重置配置',
    resetConfirm: '确定要重置 markdown-editor 的配置么?',
    copyMarkdownSuccess: '复制 Markdown 成功!',
    copyMarkdownError: '复制 Markdown 失败! {0}',
    copyHtmlSuccess: '复制 HTML 成功!',
    copyHtmlError: '复制 HTML 失败! {0}',
    resetConfigSuccess: '重置配置成功!',
    resetConfigError: '重置配置失败!',
    cancel: '取消',
    confirm: '确认',
    readFileError: '无法读取文件',
  },
  ru_RU: {
    save: 'Сохранить',
    copyMarkdown: 'Копировать Markdown',
    copyHtml: 'Копировать HTML',
    resetConfig: 'Сбросить конфигурацию',
    resetConfirm: 'Вы уверены, что хотите сбросить конфигурацию markdown-editor?',
    alignLeft: 'Выровнять по левому краю',
    alignCenter: 'Выровнять по центру',
    alignRight: 'Выровнять по правому краю',
    insertRowAbove: 'Вставить строку выше',
    insertRowBelow: 'Вставить строку ниже',
    insertColumnLeft: 'Вставить столбец слева',
    insertColumnRight: 'Вставить столбец справа',
    'delete-row': 'Удалить строку',
    'delete-column': 'Удалить столбец',
    copyMarkdownSuccess: 'Markdown успешно скопирован!',
    copyMarkdownError: 'Не удалось скопировать Markdown! {0}',
    copyHtmlSuccess: 'HTML успешно скопирован!',
    copyHtmlError: 'Не удалось скопировать HTML! {0}',
    resetConfigSuccess: 'Конфигурация успешно сброшена!',
    resetConfigError: 'Не удалось сбросить конфигурацию!',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    readFileError: 'Невозможно прочитать файл',
  },
  uk_UA: {
    save: 'Зберегти',
    copyMarkdown: 'Копіювати Markdown',
    copyHtml: 'Копіювати HTML',
    resetConfig: 'Скинути конфігурацію',
    resetConfirm: 'Ви впевнені, що хочете скинути конфігурацію markdown-editor?',
    alignLeft: 'Вирівняти по лівому краю',
    alignCenter: 'Вирівняти по центру',
    alignRight: 'Вирівняти по правому краю',
    insertRowAbove: 'Вставити рядок вище',
    insertRowBelow: 'Вставити рядок нижче',
    insertColumnLeft: 'Вставити стовпець зліва',
    insertColumnRight: 'Вставити стовпеець справа',
    'delete-row': 'Видалити рядок',
    'delete-column': 'Видалити стовпець',
    copyMarkdownSuccess: 'Markdown успішно скопійовано!',
    copyMarkdownError: 'Не вдалося скопіювати Markdown! {0}',
    copyHtmlSuccess: 'HTML успішно скопійовано!',
    copyHtmlError: 'Не вдалося скопіювати HTML! {0}',
    resetConfigSuccess: 'Конфігурацію успішно скинуто!',
    resetConfigError: 'Не вдалося скинути конфігурацію!',
    cancel: 'Скасувати',
    confirm: 'Підтвердити',
    readFileError: 'Неможливо прочитати файл',
  },
};

// 获取当前语言
export const getCurrentLanguage = (): string => {
  let l: string = navigator.language.replace('-', '_');
  if (!Langs[l]) {
    l = 'en_US';
  }
  return l;
};

// 当前语言
export const lang = getCurrentLanguage();

/**
 * 国际化翻译函数
 * @param key 翻译键值
 * @param args 格式化参数
 * @returns 翻译后的文本
 */
export function t(key: string, ...args: any[]): string {
  let text = (Langs[lang] && Langs[lang][key]) || Langs.en_US[key] || key;
  if (args.length > 0) {
    text = text.replace(/\{(\d+)\}/g, (match, number) => {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  }
  return text;
}

/**
 * 更新热键提示
 * @param tip 热键提示
 * @returns 更新后的热键提示
 */
export function updateHotkeyTip(tip: string): string {
  return tip;
}
