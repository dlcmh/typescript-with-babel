import { renderToStaticMarkup } from 'react-dom/server';
import { Heading } from "./Heading";

const writeMessage = (message: string) => {
  console.log(message);
  console.log(renderToStaticMarkup(Heading()));
}

writeMessage('Hello, World!');
