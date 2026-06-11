export const data = {
  "Core React Fundamentals": [
    {
      q: "What is React and why use it?",
      a: `<p><strong>React</strong> is a JavaScript library for building user interfaces using a component-based model. It focuses on rendering UI declaratively from state and props and uses a virtual DOM to efficiently update the real DOM.</p>
          <p><strong>Key points to cover in an interview answer:</strong></p>
          <ul>
            <li>Component-driven architecture for reusable UI pieces.</li>
            <li>Declarative rendering: describe UI as a function of state.</li>
            <li>Virtual DOM and reconciliation for efficient updates.</li>
            <li>Strong ecosystem: React Router, state libraries (Redux, Zustand), testing tools (Jest, React Testing Library).</li>
            <li>Works well with TypeScript for type safety and large apps.</li>
          </ul>
          <p><strong>One-line summary:</strong> React is a fast, flexible UI library that makes building complex, interactive UIs easier by composing components and managing state predictably.</p>`
    },
    {
      q: "What is JSX and how does it work?",
      a: `<p><strong>JSX</strong> is a syntax extension that looks like HTML inside JavaScript. Under the hood JSX is compiled to <code>React.createElement</code> calls (or equivalent) which produce React elements (plain objects) describing the UI.</p>
          <p><strong>Important details:</strong></p>
          <ul>
            <li>JSX expressions can embed JavaScript using <code>{}</code>.</li>
            <li>Attributes use camelCase (e.g., <code>className</code>, <code>onClick</code>).</li>
            <li>JSX is optional but recommended for readability and tooling.</li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre><code>const el = &lt;button onClick={() =&gt; alert('hi')}&gt;Click&lt;/button&gt;;</code></pre>
          <p><strong>Interview tip:</strong> Explain how JSX compiles and why keys are required for lists (<code>key</code> helps reconciliation).</p>`
    },
    {
      q: "Functional components vs Class components",
      a: `<p>React supports both functional and class components. Modern React favors functional components with hooks.</p>
          <p><strong>Differences:</strong></p>
          <ul>
            <li><strong>Class components</strong> extend <code>React.Component</code>, use lifecycle methods (componentDidMount, etc.), and manage state via <code>this.state</code>.</li>
            <li><strong>Functional components</strong> are plain functions that return JSX and use hooks (useState, useEffect) for state and side effects.</li>
          </ul>
          <p><strong>Why prefer functional components:</strong> simpler syntax, easier to test, hooks enable powerful composition, and better performance optimizations (React can optimize hooks-based components more easily).</p>
          <p><strong>Interview tip:</strong> Show a small example converting a class to a functional component with hooks.</p>`
    },
    {
      q: "Props vs State: differences and best practices",
      a: `<p><strong>Props</strong> are read-only inputs passed from parent to child. <strong>State</strong> is local, mutable data managed inside a component (or via external stores).</p>
          <p><strong>Best practices:</strong></p>
          <ul>
            <li>Keep state minimal and derive UI from props/state.</li>
            <li>Lift state up to the nearest common ancestor when multiple children need it.</li>
            <li>Prefer immutable updates to state to help reconciliation and avoid bugs.</li>
          </ul>
          <p><strong>Interview tip:</strong> Explain controlled vs uncontrolled components in forms as a props/state example.</p>`
    },
    {
      q: "React component lifecycle (hooks equivalents)",
      a: `<p>With functional components, lifecycle behavior is expressed via hooks:</p>
          <ul>
            <li><code>useEffect(() =&gt; {...}, [])</code> — runs once after mount (like <code>componentDidMount</code>).</li>
            <li><code>useEffect(() =&gt; {...})</code> — runs after every render (like <code>componentDidUpdate</code>).</li>
            <li>Cleanup function returned from <code>useEffect</code> runs on unmount (like <code>componentWillUnmount</code>).</li>
            <li><code>useLayoutEffect</code> runs synchronously after DOM mutations (use for measuring DOM).</li>
          </ul>
          <p><strong>Interview tip:</strong> Discuss dependency arrays and common pitfalls (missing deps, stale closures) and how to avoid them.</p>`
    },
    {
      q: "Event handling and synthetic events in React",
      a: `<p>React uses a cross-browser wrapper called <strong>SyntheticEvent</strong> which normalizes events across browsers. Event handlers are passed as props (e.g., <code>onClick</code>).</p>
          <p><strong>Key points:</strong></p>
          <ul>
            <li>Use camelCase event names (<code>onChange</code>, <code>onSubmit</code>).</li>
            <li>Prevent default with <code>e.preventDefault()</code> inside handler.</li>
            <li>Be mindful of binding in class components or use arrow functions to preserve <code>this</code>.</li>
          </ul>
          <p><strong>Interview tip:</strong> Explain event delegation in React and how to stop propagation when needed.</p>`
    },
    {
      q: "Controlled vs Uncontrolled components (forms)",
      a: `<p><strong>Controlled components</strong> keep form input values in React state and update via <code>onChange</code>. <strong>Uncontrolled components</strong> use refs to read values from the DOM.</p>
          <p><strong>When to use:</strong></p>
          <ul>
            <li>Use controlled forms for validation, dynamic fields, and predictable state.</li>
            <li>Use uncontrolled for simple forms or when integrating non-React libraries for performance reasons.</li>
          </ul>
          <p><strong>Interview tip:</strong> Show a small controlled input example and mention libraries like Formik or React Hook Form for complex forms.</p>`
    },
    {
      q: "Keys in lists and reconciliation",
      a: `<p>Keys help React identify which items changed, were added, or removed. Use stable, unique keys (IDs). Avoid using array index as key when list order can change.</p>
          <p><strong>Why keys matter:</strong> Proper keys minimize DOM operations and prevent bugs (e.g., input losing focus when list reorders).</p>
          <p><strong>Interview tip:</strong> Explain a bug scenario caused by wrong keys and how to fix it.</p>`
    },
    {
      q: "Refs and when to use them",
      a: `<p><strong>Refs</strong> provide a way to access DOM nodes or component instances directly via <code>useRef</code> (functional) or <code>createRef</code> (class).</p>
          <p><strong>Use cases:</strong></p>
          <ul>
            <li>Managing focus, text selection, or media playback.</li>
            <li>Integrating with third-party DOM libraries.</li>
            <li>Storing mutable values that don't trigger re-renders.</li>
          </ul>
          <p><strong>Interview tip:</strong> Emphasize avoiding refs for state that affects rendering; prefer state/hooks instead.</p>`
    },
    {
      q: "How to structure a React project (folders, modules)",
      a: `<p>Common project structure patterns:</p>
          <ul>
            <li><strong>Feature-based</strong>: group files by feature (e.g., /auth, /dashboard) — scales well for large apps.</li>
            <li><strong>Component-based</strong>: group by reusable components (e.g., /components/Button).</li>
            <li>Keep separation for <code>api</code>, <code>hooks</code>, <code>utils</code>, <code>styles</code>, and <code>tests</code>.</li>
          </ul>
          <p><strong>Interview tip:</strong> Explain trade-offs and show how you organize for maintainability, testing, and lazy-loading.</p>`
    }
  ],

  "React Patterns & Architecture": [
    {
      q: "What are React Hooks and why were they introduced?",
      a: `<p><strong>Hooks</strong> are functions that let you use state and other React features in functional components (e.g., <code>useState</code>, <code>useEffect</code>, <code>useContext</code>).</p>
          <p><strong>Why introduced:</strong> to enable stateful logic reuse, avoid complex class patterns (HOCs, render props), and simplify component composition.</p>
          <p><strong>Interview tip:</strong> Mention rules of hooks (call at top level, only in React functions) and how custom hooks encapsulate logic.</p>`
    },
    {
      q: "useEffect: common patterns and pitfalls",
      a: `<p><strong>useEffect</strong> runs side effects after render. Common patterns include data fetching, subscriptions, and DOM updates.</p>
          <p><strong>Pitfalls:</strong></p>
          <ul>
            <li>Missing dependency array causing stale closures or infinite loops.</li>
            <li>Overusing effects for logic that could be derived from props/state.</li>
            <li>Not cleaning up subscriptions leading to memory leaks.</li>
          </ul>
          <p><strong>Interview tip:</strong> Show correct dependency usage and the <code>useCallback</code>/<code>useMemo</code> role in stabilizing dependencies.</p>`
    },
    {
      q: "useMemo and useCallback: when and why to use them",
      a: `<p><strong>useMemo</strong> memoizes expensive computed values; <strong>useCallback</strong> memoizes function references. They help avoid unnecessary re-computations or re-renders when passed as props.</p>
          <p><strong>Important:</strong> Use them when there is a measurable performance issue; premature optimization can add complexity.</p>
          <p><strong>Interview tip:</strong> Provide an example where memoizing a callback prevents child re-renders.</p>`
    },
    {
      q: "Context API: use cases and pitfalls",
      a: `<p><strong>Context</strong> provides a way to pass data through the component tree without prop drilling. Use for theming, auth state, or locale.</p>
          <p><strong>Pitfalls:</strong> Frequent updates to context value can cause many re-renders; split contexts or memoize values to mitigate.</p>
          <p><strong>Interview tip:</strong> Compare Context vs global stores (Redux) and when each is appropriate.</p>`
    },
    {
      q: "Higher-Order Components (HOC) and Render Props patterns",
      a: `<p>Both are patterns for reusing component logic:</p>
          <ul>
            <li><strong>HOC</strong>: a function that takes a component and returns an enhanced component.</li>
            <li><strong>Render props</strong>: a component accepts a function prop to render content with shared logic.</li>
          </ul>
          <p><strong>Modern alternative:</strong> Hooks and custom hooks often replace HOCs and render props for cleaner composition.</p>
          <p><strong>Interview tip:</strong> Show a small HOC example and explain why hooks are preferred now.</p>`
    },
    {
      q: "Code splitting and lazy loading (React.lazy & Suspense)",
      a: `<p>Code splitting reduces initial bundle size by loading code on demand. Use <code>React.lazy()</code> to lazy-load components and wrap them with <code>&lt;Suspense fallback=&quot;...&quot;&gt;</code> to show a loading state.</p>
          <p><strong>Example:</strong></p>
          <pre><code>const LazyComp = React.lazy(() =&gt; import('./Heavy'));
&lt;Suspense fallback=&lt;Spinner /&gt;&gt;&lt;LazyComp /&gt;&lt;/Suspense&gt;</code></pre>
          <p><strong>Interview tip:</strong> Discuss server-side rendering implications and alternatives (loadable-components, dynamic imports with SSR support).</p>`
    },
    {
      q: "Error boundaries: what they are and how to use them",
      a: `<p><strong>Error boundaries</strong> are React components (class-based) that catch JavaScript errors in their child component tree and render a fallback UI instead of crashing the whole app.</p>
          <p><strong>Important:</strong> Error boundaries catch render, lifecycle, and constructor errors in children but not errors inside event handlers.</p>
          <p><strong>Example:</strong></p>
          <pre><code>class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err, info) { /* log */ }
  render() { return this.state.hasError ? &lt;Fallback /&gt; : this.props.children; }
}</code></pre>`
    },
    {
      q: "Portals and when to use them",
      a: `<p><strong>Portals</strong> let you render children into a DOM node outside the parent component hierarchy (useful for modals, tooltips, and overlays).</p>
          <p><strong>Example:</strong></p>
          <pre><code>ReactDOM.createPortal(&lt;Modal /&gt;, document.getElementById('modal-root'));</code></pre>
          <p><strong>Interview tip:</strong> Mention accessibility concerns (focus management, aria-hidden) when using portals.</p>`
    },
    {
      q: "Component composition vs inheritance",
      a: `<p>React favors <strong>composition</strong> over inheritance. Compose components by passing children, props, or render functions rather than extending classes.</p>
          <p><strong>Why composition:</strong> simpler, more flexible, and aligns with React's declarative model.</p>
          <p><strong>Interview tip:</strong> Give an example of composing a List with Item components and a render prop for customization.</p>`
    },
    {
      q: "Custom hooks: how to create and test them",
      a: `<p><strong>Custom hooks</strong> are functions that reuse stateful logic (start with 'use'). They can call other hooks and return values or functions.</p>
          <p><strong>Example:</strong></p>
          <pre><code>function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() =&gt; { fetch(url).then(r =&gt; r.json()).then(setData); }, [url]);
  return data;
}</code></pre>
          <p><strong>Testing:</strong> use utilities like <code>@testing-library/react-hooks</code> or render a test component that uses the hook and assert behavior.</p>`
    }
  ],

  "APIs & Advanced Integrations": [
    {
      q: "State management options: Context, Redux, MobX, Zustand",
      a: `<p>Options for managing state beyond local component state:</p>
          <ul>
            <li><strong>Context</strong>: built-in, good for low-frequency global values (theme, locale).</li>
            <li><strong>Redux</strong>: predictable single store with actions/reducers; good for large apps needing strict patterns and devtools.</li>
            <li><strong>MobX</strong>: observable-based, more implicit reactivity and less boilerplate.</li>
            <li><strong>Zustand</strong>: minimal, hook-based store with simple API and good performance.</li>
          </ul>
          <p><strong>Interview tip:</strong> Explain trade-offs: boilerplate vs predictability, learning curve, and when to choose each.</p>`
    },
    {
      q: "Data fetching strategies: fetch, axios, SWR, React Query",
      a: `<p>Data fetching can be done with native <code>fetch</code> or libraries like <code>axios</code>. For caching, background revalidation, and optimistic updates use libraries like <strong>SWR</strong> or <strong>React Query</strong>.</p>
          <p><strong>Benefits of React Query / SWR:</strong> caching, deduping requests, retries, pagination helpers, and built-in loading/error states.</p>
          <p><strong>Interview tip:</strong> Describe how to implement optimistic updates and cache invalidation with React Query.</p>`
    },
    {
      q: "Optimistic updates and handling server latency",
      a: `<p><strong>Optimistic updates</strong> update the UI immediately before the server confirms the change, then reconcile on success/failure.</p>
          <p><strong>Key considerations:</strong></p>
          <ul>
            <li>Rollback strategy on failure.</li>
            <li>Idempotency and conflict resolution on server.</li>
            <li>Use libraries (React Query) that provide helpers for optimistic updates.</li>
          </ul>
          <p><strong>Interview tip:</strong> Provide an example flow for creating a new item optimistically and rolling back on error.</p>`
    },
    {
      q: "Server-Side Rendering (SSR) and frameworks (Next.js)",
      a: `<p><strong>SSR</strong> renders React on the server and sends HTML to the client for faster first paint and SEO. Next.js is a popular framework that provides SSR, static generation (SSG), and incremental static regeneration (ISR).</p>
          <p><strong>Key concepts:</strong> getServerSideProps, getStaticProps, hydration, and handling client-only APIs.</p>
          <p><strong>Interview tip:</strong> Discuss trade-offs between SSR, SSG, and client-side rendering (CSR) and how to handle data fetching and authentication in SSR.</p>`
    },
    {
      q: "Hydration and common SSR pitfalls",
      a: `<p><strong>Hydration</strong> is the process where React attaches event listeners to server-rendered HTML and makes it interactive. Mismatches between server and client render cause warnings and broken UI.</p>
          <p><strong>Pitfalls & fixes:</strong></p>
          <ul>
            <li>Using non-deterministic code (random IDs, Date.now) on server and client — ensure deterministic output or run client-only code inside <code>useEffect</code>.</li>
            <li>Accessing browser-only APIs on server — guard with checks or platform-specific code.</li>
          </ul>`
    },
    {
      q: "Performance profiling and optimization techniques",
      a: `<p>Performance techniques:</p>
          <ul>
            <li>Use React Profiler to find slow components.</li>
            <li>Memoize expensive computations (<code>useMemo</code>) and callbacks (<code>useCallback</code>).</li>
            <li>Use <code>React.memo</code> to avoid re-rendering pure components.</li>
            <li>Code-split routes and heavy components with lazy/Suspense.</li>
            <li>Virtualize long lists with react-window or react-virtualized.</li>
            <li>Reduce bundle size: remove unused libs, use tree-shaking, and analyze bundles with webpack-bundle-analyzer.</li>
          </ul>
          <p><strong>Interview tip:</strong> Provide before/after metrics (TTI, bundle size) from a real optimization you performed.</p>`
    },
    {
      q: "Security considerations in React apps (XSS, CSRF, auth)",
      a: `<p>Security best practices:</p>
          <ul>
            <li><strong>XSS:</strong> React escapes values by default in JSX. Avoid dangerouslySetInnerHTML with untrusted content; sanitize when necessary.</li>
            <li><strong>CSRF:</strong> Use server-side protections (CSRF tokens) or same-site cookies; for token-based auth prefer Authorization headers for API calls.</li>
            <li><strong>Authentication:</strong> Use secure storage for tokens (consider HttpOnly cookies for refresh tokens), implement short-lived access tokens, and refresh flows.</li>
            <li>Validate and authorize on the server; client checks are only for UX.</li>
          </ul>
          <p><strong>Interview tip:</strong> Discuss trade-offs of storing tokens in localStorage vs cookies and mitigation strategies.</p>`
    },
    {
      q: "Testing React apps: unit, integration, and E2E",
      a: `<p>Testing strategies:</p>
          <ul>
            <li><strong>Unit tests</strong> (Jest): test pure functions, reducers, and small components.</li>
            <li><strong>Integration tests</strong> (React Testing Library): test component interactions and DOM behavior.</li>
            <li><strong>E2E tests</strong> (Cypress, Playwright): test full user flows in a browser.</li>
          </ul>
          <p><strong>Best practices:</strong> mock network calls with MSW (Mock Service Worker), prefer testing behavior over implementation details, and keep tests fast and deterministic.</p>`
    },
    {
      q: "TypeScript with React: benefits and common patterns",
      a: `<p>TypeScript adds static typing, improving developer experience and catching errors early. Common patterns:</p>
          <ul>
            <li>Type props with interfaces or <code>React.FC&lt;Props&gt;</code> (note: prefer explicit typing over relying on React.FC for children).</li>
            <li>Type refs with <code>React.RefObject&lt;HTMLInputElement&gt;</code> or generics for forwardRef.</li>
            <li>Use discriminated unions for complex prop shapes and exhaustive checks in reducers.</li>
          </ul>
          <p><strong>Interview tip:</strong> Show a typed component example and explain how types improve refactoring safety.</p>`
    },
    {
      q: "Micro-frontends and integration strategies with React",
      a: `<p>Micro-frontends split a large frontend into independently deployable apps. Integration strategies:</p>
          <ul>
            <li>Module Federation (Webpack 5) to load remote components at runtime and share dependencies.</li>
            <li>Web Components to embed apps across frameworks.</li>
            <li>Shell + remote apps approach with coordinated routing and shared auth.</li>
          </ul>
          <p><strong>Interview tip:</strong> Discuss shared dependency versioning, bundle duplication mitigation, and runtime performance trade-offs.</p>`
    },
    {
      q: "Progressive Web Apps (PWA) and service workers in React",
      a: `<p>PWA features: offline support, installability, and background sync. Use service workers (Workbox or CRA's service worker) to cache assets and API responses.</p>
          <p><strong>Considerations:</strong> cache invalidation strategies, update UX when new service worker is available, and secure contexts (HTTPS).</p>
          <p><strong>Interview tip:</strong> Explain how to implement offline-first caching for critical routes and data.</p>`
    }
  ]
};
