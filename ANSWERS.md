- [ ] Why would you use class component over function components (removing hooks from the question)?
- I think if hooks aren't a factor, I would only be using class components because most react code in the workforce would be composed of class components. Hooks are too new for companies to start refactoring "legacy" code into functional components. Without hooks, functional components are not able to handle state the way class components can with lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.
- componentDidMount(): invoked immediately after a component is mounted. If you need to load data from a remote endpoint, this is a good place to do the network request.
- componentDidUpdate(): invoked immediately after updating occurs. This can be used to make changes to the DOM when the component updates. This is also a good place to do network requests as long as comparing current props to previous props.
- component.
- componentWillUnmount(): invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions created in componentDidMount(). Should not call setState() because the component will never be re-rendered.

- [ ] What is the purpose of a custom hook?
- a custom hook allows you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. You can build a custom hook that handles controlled inputs, manages event listeners, watches for key presses, etc.

- [ ] Why is it important to test our apps?
- Automated testing minimizes the risk of bugs finding their way into production code. It can make us think about the edge cases and encourage us to write more testable and reliable code.
