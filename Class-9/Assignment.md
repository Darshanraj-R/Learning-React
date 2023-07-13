1)  When and why do we need `lazy()`?

Ans:

- We need React.lazy() when some of the components are not loaded as the user enter the application
- The component which can be loaded on click/based on the user's preference
- Lazy loading, Dynamic loading, code Splitting

**why lazy**

- The bundlers like the parcel, vite, and web pack bundle all the js file into single file if the we are building a big scalable application which may contain 100’s of componets this might can crash the page so it better to load the files when it is required.

```jsx
const About = React.lazy(()=>{ import('./components/about');

```

2) • What is `suspense`?

Ans: when we use lazy() the component is loaded onclick of the user which takes some time to be loaded, but the browser tries to load the page even before the page is fectuched, So wraping the componet withe Suspence may help to the page late.

```jsx
const About = React.lazy(()=>{ import('./components/about');

const myRouter = createBrowserRouter([
		path:'/',
	  element:<Body/>,
			children : [{
	      path:'/about',
				element:<Suspense><About/></Sespense>
}]
])
```

3) When `do we and why do we need suspense`?

Ans: 

It takes some time for the component to be loaded and redered in that the browser engine should wait for the component to be loaded and renderd 

- it is used when
    - big web-application
    - very component as there own items to be loaded
    

4) `Advantages and Disadvantages` of using this `code splitting pattern`?

Advantages:

- faster rendering
- load on demand
- separation of concern

Disadvantages

- components increase
- runtime overhead
- Mulitple js pages to loaded on  the browser which takes time
