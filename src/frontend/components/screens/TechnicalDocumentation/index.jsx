/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Code from "@/components/Code";

import "./styles.scss";

import flowInfra from "@/assets/images/flowInfra.png";
import ssl from "@/assets/images/ssl.png";
import git from "@/assets/images/git.png";
import sketch from "@/assets/images/sketch.jpg";
import demoGif from "@/assets/images/demo.gif";
import demoImg from "@/assets/images/demo.jpg";

const TechnicalDocumentationScreen = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div styleName="wrapper">
      <Header fixed />
      <div styleName="content">
        <div className="innerSection">
          <h2>Details how I built https://i-can-help-indeed.jp</h2>
          <p>Hello Indeed team,</p>
          <p>
            <br />
            <i>i-can-help-indeed.jp</i> is a connect-pipes-puzzle type of game, wrapped in a gently Visual Novel story.
            It briefly previews frontend/algorithmic/creativity potential I can bring to the Indeed table. From the
            idea, code and assets, through algorithms, up to devops, everything was made by me to start our relationship
            in a good way.
            <br />
            <br />
            During my first interview with Keziah for UX Frontend position at Indeed, a board game as a recruitment
            assignment was mentioned a few times. I instantly thought it would be very fun and interesting project,
            exercising both frontend skills and creativity. So I built the game right away..
            <br />
            <br />
            Since the position is heavily about product localisation, not only content but whole UI/UX, I asked myself
            what are iconic Japanese-only, game related products... So I came up with an idea of making a visual novel
            game about Keziah, Ivan and myself..
            <br />
            <br />
            If you want to know the story, well,{" "}
            <a target="_blank" href="/#/story">
              why don&apos;t you just play the game in the story mode?
            </a>
          </p>
          <h2>Demo</h2>
          <p>
            <img src={demoGif} alt="demo" style={{ height: 500 }} />
            <br />
            <img src={demoImg} alt="demo" style={{ height: 500 }} />
          </p>
          <h2>The app</h2>
          <p>
            The app is a frontend JS app covering some of important aspects of building durable, scalable and
            maintainable web portals. In opposite to my other projects this one is not a full stack app nor but it
            mainly focuses on the game, game-ish feeling and emotions.
          </p>
          <h3>Frontend</h3>
          <p>
            Frontend is a React app, built using modern JS tooling, industrial practices, big-scale-projects mentality,
            habits and experience.
          </p>
          <p>Overall frontend architecture consists of multiple layers with a single flow of data.</p>
          <h4>Layers are:</h4>
          <ul>
            <li>
              <p>
                Routing - routing layer is done via <code>react-router</code>, rendering right components under right
                urls. This layer also handles redirections to main page for unauthorised users via <code>AuthWall</code>
                component.
              </p>
            </li>
            <li>
              <p>
                Components - components are React components consisting of main component, styling and redux binding.
                Data flow only one direction, accessed via getters and modified by dispatching actions.
              </p>
            </li>
            <li>
              <p>
                Data store - <code>redux</code> slices are responsible for storing all app data. As a vuejs dev,
                especially enjoying data store layer there - vuex, I ported vuex mentality to redux. Each redux slice
                follows same structure of getters, actions and mutations. Such a segregation greatly improved code
                scalability and readability.
                <br />
                <small>
                  Note: I found there is no real need for redux in this project as the GameEngine is framwork-agnostic
                  lib while rest of the app doesn&apos;t really share much data, so using Redux is mostly just to show
                  off fluency with data stores.
                </small>
              </p>
            </li>
            <li>
              <p>
                GameEngine - an independent, framework-agnostic, pure JS code powering the game. It exposes data/actions
                only api that is later on connected to GameUI react component. More the Game Engine later on in this
                document.
              </p>
            </li>
          </ul>
          <h4>Tools</h4>
          <p>
            The app is bundled using <code>webpack</code>. <code>babel</code> is used to transpile from modern JS.{" "}
            <code>postcss</code> for auto-prefixing with <code>scss</code> as a css preprocessor. Code is linted and
            auto-formatted by <code>prettier</code>, <code>eslint</code>. <code>stylelint</code> is used for faster css
            development.
          </p>
          <p>
            Everything was configured by me. <strong>I know how all those major frontend tools work</strong>.
          </p>
          <h4>Responsiveness</h4>
          <p>
            The app is fully responsive, mostly by using fluid layout but there are some components, like game ui, that
            change their layout using css media queries.
          </p>
          <h2>The GameEngine</h2>
          <p>
            The GameEngine is a framework-agnostic, pure JS library. It is an evented, immutable system that accepts
            events and exposes its current state. The engine is responsible for storing a state and dispatching events
            to eventHandlers. EventHandlers are pure functions.
          </p>
          <Code>
            {`dispatch(eventName, payload) {
  setTimeout(() => {
    const eventHandler = eventHandlers[eventName];
    if (eventHandler) {
      this.state = eventHandlers[eventName](this, payload);
      this.updateListener(this.getState());
    }
  }, 0);
}`}
          </Code>
          <p>
            Each game tile defines its flow of water by providing <code>flowOutputFor</code> hash. Each tile also
            defines from which direction the stream of water already came in.
            <br />
            Based on those information we can extremely easily recursively build whole chain of pipes. Here is actual
            code of water flowing EventHandler:
          </p>
          <Code>
            {`const flowWater = (x, y, from, currentBoard) => {
  const board = deepCopy(currentBoard);

  if (outOfBoard(x, y, board) || notConnected(x, y, from, board)) return { board, status: statuses.failed };

  if (board[y][x].filledFrom[from]) {
    const direction = board[y][x].flowOutputFor[from];
    if (direction === "N") return flowWater(x, y - 1, "S", board);
    if (direction === "E") return flowWater(x + 1, y, "W", board);
    if (direction === "S") return flowWater(x, y + 1, "N", board);
    if (direction === "W") return flowWater(x - 1, y, "E", board);
  } else {
    board[y][x].filledFrom[from] = true;
  }

  if (reachedFinish(x, y, board)) return { board, status: statuses.won };

  return { board, status: statuses.running };
};`}
          </Code>

          <h2>Idea</h2>
          <p>
            During my first interview with Keziah for UX Frontend position at Indeed, a board game as a recruitment
            assignment was mentioned a few times. I instantly thought it would be very fun and interesting project,
            exercising both frontend skills and creativity. So I built the game right away..
            <br />
            <br />
            Since the position is heavily about product localisation, not only content but whole UI/UX, I asked myself
            what are iconic Japanese-only, game related products... So I came up with an idea of making a visual novel
            game about Keziah, Ivan and myself..
          </p>
          <h4>Early ideas and UI sketches</h4>
          <p>
            <img src={sketch} alt="data flow" />
          </p>
          <h2>Devops</h2>
          <p>
            The app is hosted on Heroku.
            <br />I bought
            <code>.jp</code> domain from Onamae and configured its nameservers to point at <code>Cloudflare</code>. The
            reason is Onamae&apos;s UX is very confusing and seems unreliable. On the other hand Cloudflare is expertly
            professional, powerful and intuitive. Whole traffic is proxied through Cloudflare for full SSL encryption,
            CDN support and basic redirections.
          </p>
          <p>
            Note on latency: Heroku hosts it&apos;s apps in US region, that’s why each request takes around +400ms more
            when accessed from Japan.
          </p>
          <p>
            <img src={flowInfra} alt="infa" />
          </p>
          <br />
          <p>
            <img src={ssl} alt="ssl" />
          </p>
          <h2>Git repository</h2>
          <p>
            I’m very strict about keeping git history clean. Each feature was coded on a feature branch and merged to
            master after a brief self-codereview. Besides a few very first commits setting project up,{" "}
            <code>master</code> branch consists only merge commits.
          </p>
          <p>
            <img src={git} alt="data flow" />
          </p>
          <h2>Development</h2>

          <Code language="bash">
            {`nvm use
yarn run dev`}
          </Code>

          <br />
          <br />
          <h1>Looking forward to connecting with you Indeed team!</h1>
          <br />
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalDocumentationScreen;