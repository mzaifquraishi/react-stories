import React, { useEffect } from "react";

import Stories, { WithSeeMore } from "react-insta-stories";
import "./style.css";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="stories ">
          <Stories
            loop
            keyboardNavigation
            defaultInterval={8000}
            stories={stories2}
          />
        </div>
      </div>
    );
  }
}

const Story2 = ({ action, isPaused }) => {
  return (
    <div
      style={{ ...contentStyle, background: "Aquamarine", color: "#16161d" }}
    >
      <h1>You get the control of the story.</h1>
      <p>
        Render your custom JSX by passing just a{" "}
        <code style={{ fontStyle: "italic" }}>content</code> property inside
        your story object.
      </p>
      <p>
        You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
        input to your content function, that can be used to play or pause the
        story.
      </p>
      <h1>{isPaused ? "Paused" : "Playing"}</h1>
      <h4>v2 is out 🎉</h4>
      <p>React Native version coming soon.</p>
    </div>
  );
};

const stories2 = [
  {
    url: "https://picsum.photos/1080/1920",
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white"
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, contact me.
        </p>
      </div>
    )
  },
  {
    url: "https://picsum.photos/1080/1920",
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white"
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    )
  },
  {
    url: "https://picsum.photos/1080/1920",
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white"
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    )
  },

  {
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    type: "video"
  },
  {
    content: Story2
  }
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333"
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white"
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative"
};

export default App;
