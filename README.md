# ChatBox React Component

The ChatBox React Component is a customizable chat interface that can be easily integrated into your React applications. It provides a sleek and modern interface for users to interact with each other, making communication seamless and intuitive.

## Features

- **Customizable Positioning:** Choose where the ChatBox appears on the screen, whether it's at the bottom right, bottom left.
- **Greeting Message:** Welcome users with a customizable greeting message to set the tone for their chat experience.
- **Responsive Design:** The ChatBox adapts to different screen sizes, ensuring a consistent user experience across devices.
- **Easy Integration:** Simply import the ChatBox component into your React application and configure it with your desired settings.

## Installation

You can install the ChatBox React Component via npm:


## Usage

```jsx
import React from "react";
import style from "./app.module.css";
import ChatBox from "chatbox-react-component";

function App() {
  return (
    <div className={style.app}>
      <div className={style.chatBoxContainer}>
        <ChatBox
          position="bottom-right"
          greetingMessage="Hello! Welcome to our chat."
        />
      </div>
    </div>
  );
}

export default App;
