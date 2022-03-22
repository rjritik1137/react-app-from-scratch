# How to create a react env from scratch

### Create a package.json file

<pre>npm init -y</pre>

### Install React

<pre>npm i react react-dom</pre>

### Install webpack and webpack plugins

<pre>npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin</pre>

### Install babel and loaders

<pre>npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader node-sass sass-loader style-loader</pre>

-   Create .babelrc and webpack.config.js then add the required configuration to bundle the project

### Install prettier

<pre>npm i -D prettier</pre>

-   open workspace setting
-   enable format on save
-   Set prettier as default formatter
-   enable prettier require config
-   create an empty .prettierrc file at root of dir

### Install linters

<pre>npm i -D eslint eslint-config-prettier eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y</pre>

-   create .eslintrc.json file, and add the configuration
