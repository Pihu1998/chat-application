# chat-application

**React application**

- Built a simple UI for the chat application where when the component mounts, a user is automatically created. You can chat by sending text messages to the application.

- The user on the other side whom you're chatting to would see updated messages and chat history everytime you message them, and vice versa.

- Messages have a timestamp attached below to them. It is generally the local time for the user at which the message has been sent.

- Chat updates on different browser windows and works fine on all browsers.

- Included some minor styling.


*Error Handling*

- Handled error when there would be no chat history. The application would display "Hi {username}! Send a message to see chat history" message to the user.


*Extra Detailing*

- Included a feature to automatically scroll down the page to bottom, whenever a new message is sent and the chat history is scrollable, so that we don't need to scroll down to see the updated message.


*Rooms of Improvement*

- Messages take 2-3 seconds to get updated to history each time you send one. Maybe that's because the whole chat history is fetched each time for every message. Could have just used the POST response data to append the latest message to the history, but was running out of time.

- Timestamp could have been displayed in a better way. For ex: "a sec ago" for a just sent message and "an hour ago" for a past one.

- Styling could have been much improved.

- Error handling for inputs should have been implemented. For ex: checking if the user sends an empty message, or message with just whitespaces. I tried to implement them, but ran out of time.


*Time Spent on the application*

This application took me almost 2 hours to complete.


*How to see application working*

- RUN: *npm start* inside the chat directory, to start react application.
- RUN: *npm start* inside ./koa-backend/src directory, to start the backend server.
