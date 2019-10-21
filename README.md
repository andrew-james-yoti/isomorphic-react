What is the advantage of using isomorphic react apps?
`In Client-side rendering, your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it.

Server-side rendering, on the other hand, renders the React components on the server. The output is HTML content.

You can combine these two to create an isomorphic app.`
- apparently, web crawlers can crawl server rendered js pages but cannot crawl hosted js pages.

Using express-cli to generate project
Babel so ES6 can be used for React Dev
You need to install webpack to bundle the client
Using ejs for templating engine

TODO: Install correct versions of babel, correct the .babelrc file because react is not compiling in the client







babel-cli@6.11.x babel-core@6.13.x  \
  babel-preset-es2015@6.13.x babel-preset-react@6.11
  
  
  
 checkout [Code splitting and server-side rendering](https://reacttraining.com/react-router/web/guides/code-splitting/code-splitting-and-server-side-rendering)
 