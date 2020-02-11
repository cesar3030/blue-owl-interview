import axios from 'axios';

const _formatQuote = ({ id, content, title }) => ({
  id,
  text: (content && _removeHtmlTag(content.rendered)) || 'No Text',
  author: (title && title.rendered) || 'Unknown'
});

const _removeHtmlTag = html => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.innerText;
};

export const fetchQuotes = async () => {
  try {
    const { data } = await axios.get(
      'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand'
    );
    return data.map(_formatQuote);
  } catch {
    throw new Error('Could not fetch quotes');
  }
};
