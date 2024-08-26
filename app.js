const parent = React.createElement("div", {id : "parent"},[ 
React.createElement("div", {id : "child1"},[
 React.createElement("h1", {id : "heading1"}, "I am an H1 Tag"),
 React.createElement("h2", {id : "heading2"}, "I am an H2 Tag"),
] 
), 
React.createElement("div", {id : "child2"},[
  React.createElement("h1", {id : "heading3"}, "I am an H1 Tag"),
  React.createElement("h2", {id : "heading4"}, "I am an H2 Tag"),
 ] 
 )
]);

// const heading = React.createElement(
//   "h1", 
//   {id : "heading", xyz : "abc"}, 
//   "Hello World From React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);