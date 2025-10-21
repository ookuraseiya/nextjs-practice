import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';

export const formatDate = (date: string) => {
  const jstDate = new Date(date);
  return format(jstDate, 'yyyy/MM/dd', { locale: ja });
};

export const formatRichText = (richText: string) => {
  const $ = load(richText, null, false);
  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, {
        language: lang?.replace(/^language-/, '') || '',
      });
    } catch (e) {
      return hljs.highlightAuto(text);
    }
  };
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);
  });
  return $.html();
};
