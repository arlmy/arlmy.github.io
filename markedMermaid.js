// markedMermaid.js
const markedMermaid = (options) => {
  return {
    extensions: [
      {
        name: 'mermaid',
        level: 'block',
        start(src) {
          return src.match(/^```mermaid/)?.index;
        },
        tokenizer(src, tokens) {
          const rule = /^```mermaid([\s\S]*?)```/;
          const match = rule.exec(src);
          if (match) {
            return {
              type: 'mermaid',
              raw: match[0],
              text: match[1].trim(),
            };
          }
        },
        renderer(token) {
          return `<div class="mermaid">${token.text}</div>`;
        },
      },
    ],
  };
};