import React from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import style from "react-syntax-highlighter/dist/esm/styles/prism/base16-ateliersulphurpool.light";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("bash", bash);

const Code = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language} style={style}>
      {children}
    </SyntaxHighlighter>
  );
};

Code.propTypes = {
  children: PropTypes.node,
  language: PropTypes.string,
};

Code.defaultProps = {
  children: "",
  language: "javascript",
};

export default Code;
