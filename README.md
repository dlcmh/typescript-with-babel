## References

[It's 2020: let's build a node.js app with TypeScript](https://www.tomspencer.dev/blog/2020/05/22/its-2020-lets-build-a-node.js-app-with-typescript/)

[How to enable new JSX transform in React 17? - DEV](https://dev.to/wojtekmaj/how-to-enable-automatic-runtime-in-react-17-with-babel-preset-react-52l)

[microsoft/TypeScript-Babel-Starter: A sample setup using Babel CLI to build TypeScript code, and using TypeScript for type-checking](https://github.com/microsoft/TypeScript-Babel-Starter#set-up-your-build-tasks)
-> set `"compile": "tsc && babel src --out-dir dist --extensions \".ts,.tsx\""` in package.json

[ReactDOMServer `renderToStaticMarkup()` – React](https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup)


## Notes

Ensure Visual Studio Code uses the workspace's TypeScript version rather than VSCode's.

To do this:

- open any `.ts` file
- click on the version number next to `TypeScript` in the lower right hand portion of the screen
- click on `Select TypeScript Version...` and choose the desired version from the dropdown

## Installation

```
npm install
```

## Compiling the project

```
npm run compile
```

## Running

```shell
npm start
# Hello, World!
# <h1>I am a heading!</h1>
```
