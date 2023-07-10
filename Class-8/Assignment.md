Assignment 10:

1) Class Componet:

Ans: 

```jsx
class Profile extends React.Component {

constructor(props) {

super(props);

}

render() {

return(

<></>

)

}

}
```

**Constructor** : this is used to initialize the data.

**Super()** : the key word is used to refer to the imediate props.

**this**: the key-word is used to refer to this context

**render()** : the function which is mandatory to be written in the class component

2) Component life Cycle:

Ans:

- Constructor
- Render()
- component did mount
- component did update
- render()
- componet will unmount

3) Why do we use componentDidMount?

Ans:

 The componentDidMount will be called after render so this would be great place to call the API so we get some time to show the buffering screen then the data can be rendered

4)Why do we use componentWillUnmount? Show with example

Ans: 

The componentWillUnmount will called one’s u leave the page so here we can clear all the setTimeOut() and setInterval() so again once the user return to the page he will start from the first.

5)How do you create Nested Routes react-router-dom cofiguration

Ans: 

```jsx
const MyRouter = createBrowserRouter([ 
 {
	path:'/',
	element:<App/>
	errorElement: <ErrorElement/>
	children : [ 
   {
   path:'/',
	element:<Body/>
   },
  {
		path:'/about',
		element:<About/>
		children : [
   {
		path:'profile',
		element:<Profile/>
    }
   ]
  }
 ]
 }
	
])
```