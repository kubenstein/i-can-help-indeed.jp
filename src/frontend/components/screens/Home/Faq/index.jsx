import React, { useState } from "react";
import Button from "@/components/Button";

import "./styles.scss";

const faq = [
  {
    q: "What exactly is this page?",
    a: "This page is a pro-active demo I made to start our relationship in a good way.",
  },
  {
    q: "Who are you?",
    a:
      "My name is Jakub Niewczas and I’m a Tokyo-based Senior Software Engineer with nearly decade of professional work experience. I have been helping companies all around the world building and growing their platforms as both frontend and backend Engineer.\n\nCurrently I’m a lead frontend engineer at virtusize.jp, where me and my team develop our tens of millions req/week apps. Our apps integrate with major big fashion companies such as  Kate Spate, Balenciaga, United Arrows, Marui etc..\n\nPreviously I was a frontend core engineer at govoyagin.com (part of Rakuten) developing the platform, including successfully rewriting whole it’s frontend to React.",
  },
  {
    q: "Did you make it all by yourself?",
    a:
      "Yes, this demo is just a brief preview of my skills and value I can bring to your team. Due to my nearly decade of experience working with big apps, there is much more I can offer both in tech and not-tech space of web dev.",
  },
  {
    q: "Where can I find the source code?",
    a: "To clone the repo type:\n\ngit clone https://www.i-can-help-indeed.jp/git/ i-can-help-indeed",
    clickableAnswer: true,
  },
  {
    q: "Do you want to join our engineering team then?",
    a: "Yes.",
  },
];

const Faq = () => {
  const [opened, setOpened] = useState([]);

  const toggle = (id) => {
    if (opened.indexOf(id) > -1) {
      setOpened(opened.filter((v) => v !== id));
    } else {
      setOpened(opened.concat(id));
    }
  };

  return (
    <div className="innerSection">
      <h3 className="title">Frequently Asked Questions</h3>

      <ul styleName="list">
        {faq.map((pair) => (
          <Button
            onClick={() => toggle(pair.q)}
            tag="li"
            styleName={`item ${opened.indexOf(pair.q) > -1 ? "open" : ""}`}
            key={pair.q}
          >
            <span styleName="question">{pair.q}</span>
            <Button tag="span" styleName="answer" onClick={(e) => pair.clickableAnswer && e.stopPropagation()}>
              {pair.a}
            </Button>
          </Button>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
