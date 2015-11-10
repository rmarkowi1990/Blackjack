# unit-6SB-simon


##Introduction
We'll get started with Facebook's open-source front-end JavaScript framework, ReactJS. This week we'll see how React makes the DOM rich and dynamic.

##Summary
HTML is static. It doesn't move around or have programming logic. If we want our web apps to have these features, we can use JavaScript. JavaScript can programmatically generate HTML elements. For example:
```javascript
var p = document.createElement('p');
p.innerText = 'sup';
document.body.appendChild(p);
```
generates the following element:
```html
<body>
  <!-- DOM stuff -->
  <p>sup</p>
</body>
```

Using plain JavaScript can get labor-intensive and intractable for large applications. ReactJS decreases the complications of maintaining large websites using principles like object-orientation and modularity. Fortunately, the React API looks very similar to familiar JavaScript. React achieves the same net result with the following code:
```javascript
var p = React.createElement('p', null, 'sup');
ReactDOM.render(p, document.body);
```

React introduces the idea of "state". The state is a variable that allows the same tags to look different if they have different states. In React, the state is always an `object`. Your tags, or "components", can depend on this variable. Any changes to the state will trigger an update, or "re-render", of the component that depends on it. The state is convenient because it is one centralized variable from which all changes to the DOM will trickle down. For this challenge, we will use state to render different colors on a board and change them when a button is clicked.

##Learning Goals
- Generate the DOM structure using JavaScript
- Learn React methods
- Run a function when a button is clicked
- Change the DOM by updating the state

##How do I get started?
Your code will go in `main.js`. To open your page, type this command:
```
npm start
```
After running it, navigate to `http://localhost:8000` in your browser. 

##Challenges
Have a look at `main.js`. Notice how an `<h1>` tag is created with the `React.createElement` method. The first argument is the type of tag. The second is an object of HTML attributes and values. The remaining arguments are the children of this element. It is placed in the DOM with `ReactDOM.render`.

`React.createClass` lets us **define our own tags**, a.k.a. components. Notice the `Board` class we're creating. This method takes an object. `render` is a special property on this object: a method that returns what our component will look like when it's rendered. Let's use this to create a 4x4 board. 