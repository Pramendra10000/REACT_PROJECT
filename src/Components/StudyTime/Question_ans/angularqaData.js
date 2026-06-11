
export const data = {
  "Core Angular Fundamentals": [
    {
      q: "What is Angular?",
      a: `<p><strong>Angular</strong> is a platform and framework for building client-side single-page applications (SPAs) using <strong>TypeScript</strong>. It provides a component-based architecture, a powerful template syntax, dependency injection, routing, forms, HTTP client, and tooling (Angular CLI) to build, test, and deploy applications.</p>
          <p><strong>Key points to cover in an interview answer:</strong></p>
          <ul>
            <li>Component-based architecture (UI composed of reusable components).</li>
            <li>Written in TypeScript; leverages modern ES features and static typing.</li>
            <li>Includes built-in features: routing, forms, HTTPClient, DI, pipes, directives.</li>
            <li>Tooling: Angular CLI, AOT compilation, Ivy renderer for smaller bundles and faster rendering.</li>
          </ul>
          <p><strong>One-line summary:</strong> Angular is a TypeScript-based framework for building scalable, maintainable SPAs with a complete toolchain and strong conventions.</p>`
    },
    {
      q: "What are Components in Angular?",
      a: `<p><strong>Components</strong> are the primary building blocks of an Angular application. Each component encapsulates a template (HTML), styles (CSS/SCSS), and logic (TypeScript class).</p>
          <p><strong>Essential parts:</strong></p>
          <ul>
            <li><code>@Component</code> decorator with <code>selector</code>, <code>templateUrl</code>/<code>template</code>, and <code>styleUrls</code>.</li>
            <li>Component class with properties and methods that the template binds to.</li>
            <li>Input/Output properties for parent-child communication (<code>@Input()</code>, <code>@Output()</code>).</li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre><code>import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  template: \`
    &lt;div&gt;
      &lt;h3&gt;{{name}}&lt;/h3&gt;
      &lt;button (click)="select()"&gt;Select&lt;/button&gt;
    &lt;/div&gt;
  \`
})
export class UserCardComponent {
  @Input() name!: string;
  @Output() selected = new EventEmitter&lt;void&gt;();
  select() { this.selected.emit(); }
}</code></pre>
          <p><strong>Interview tip:</strong> Explain component communication patterns (Input/Output, services, state stores) and lifecycle hooks used within components.</p>`
    },
    {
      q: "What is a Module in Angular and why use NgModule?",
      a: `<p>An <strong>NgModule</strong> is a logical boundary in an Angular app that groups related components, directives, pipes, and services. Every Angular app has at least one module: <code>AppModule</code>.</p>
          <p><strong>NgModule responsibilities:</strong></p>
          <ul>
            <li><code>declarations</code>: components, directives, pipes that belong to the module.</li>
            <li><code>imports</code>: other modules whose exported classes are needed.</li>
            <li><code>exports</code>: subset of declarations to make available to other modules.</li>
            <li><code>providers</code>: services available in this module's injector (if provided here).</li>
            <li><code>bootstrap</code>: root component(s) to bootstrap for the application.</li>
          </ul>
          <p><strong>Why modules?</strong> They enable lazy loading, encapsulation, and better organization for large apps.</p>
          <p><strong>Example:</strong></p>
          <pre><code>@NgModule({
  declarations: [UserCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserCardComponent]
})
export class SharedModule {}</code></pre>`
    },
    {
      q: "Explain Data Binding in Angular and its types.",
      a: `<p>Data binding connects the component class and the template. Angular supports several binding forms:</p>
          <ul>
            <li><strong>Interpolation</strong> (one-way from component to view): <code>{{ value }}</code></li>
            <li><strong>Property binding</strong> (one-way): <code>[disabled]="isDisabled"</code></li>
            <li><strong>Event binding</strong> (view to component): <code>(click)="onClick()"</code></li>
            <li><strong>Two-way binding</strong> (two-way): <code>[(ngModel)]="modelValue"</code> (requires FormsModule)</li>
          </ul>
          <p><strong>Interview tip:</strong> Mention change detection implications and prefer explicit event/property bindings or reactive forms for complex scenarios.</p>`
    },
    {
      q: "What are Directives and their types?",
      a: `<p><strong>Directives</strong> are classes that add behavior to elements in the DOM. There are three types:</p>
          <ul>
            <li><strong>Components</strong> (a directive with a template).</li>
            <li><strong>Structural directives</strong> (change DOM layout): <code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code>.</li>
            <li><strong>Attribute directives</strong> (change appearance/behavior): <code>ngClass</code>, <code>ngStyle</code>, or custom directives that manipulate host element.</li>
          </ul>
          <p><strong>Example of a simple attribute directive:</strong></p>
          <pre><code>@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}</code></pre>
          <p><strong>Interview tip:</strong> Explain when to use a directive vs component and mention Renderer2 for safe DOM manipulation.</p>`
    },
    {
      q: "What is Dependency Injection (DI) in Angular?",
      a: `<p><strong>Dependency Injection</strong> is a design pattern where a class receives its dependencies from an external source rather than creating them. Angular has a hierarchical DI system.</p>
          <p><strong>Key concepts:</strong></p>
          <ul>
            <li><code>@Injectable()</code> marks a service as available for DI.</li>
            <li>Providers can be registered at root, module, or component level.</li>
            <li>Hierarchical injectors allow different instances in different parts of the app.</li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre><code>@Injectable({ providedIn: 'root' })
export class ApiService { /* ... */ }

@Component({...})
export class MyComponent {
  constructor(private api: ApiService) {}
}</code></pre>
          <p><strong>Interview tip:</strong> Discuss provider scopes, useFactory, useClass, useExisting, and useValue provider patterns.</p>`
    },
    {
      q: "Explain Lifecycle Hooks in Angular and common use cases.",
      a: `<p>Lifecycle hooks are methods a component or directive can implement to tap into key moments of its lifecycle.</p>
          <p><strong>Common hooks and uses:</strong></p>
          <ul>
            <li><code>ngOnChanges(changes)</code> — called when input properties change; useful for reacting to input updates.</li>
            <li><code>ngOnInit()</code> — called once after first <code>ngOnChanges</code>; ideal for initialization and fetching data.</li>
            <li><code>ngDoCheck()</code> — custom change detection; use sparingly for advanced scenarios.</li>
            <li><code>ngAfterViewInit()</code> — after component's view (and child views) initialized; use for ViewChild DOM access.</li>
            <li><code>ngAfterContentInit()</code> — after content projected into component is initialized.</li>
            <li><code>ngOnDestroy()</code> — cleanup: unsubscribe from observables, detach event listeners.</li>
          </ul>
          <p><strong>Interview tip:</strong> Emphasize unsubscribing in <code>ngOnDestroy</code> and prefer the <code>async</code> pipe or takeUntil pattern to avoid memory leaks.</p>`
    },
    {
      q: "Template-driven vs Reactive Forms: differences and when to use each.",
      a: `<p><strong>Template-driven forms</strong> are declarative and rely on directives in the template (<code>ngModel</code>). They are simpler for small forms.</p>
          <p><strong>Reactive forms</strong> are model-driven, created in the component class using <code>FormControl</code>, <code>FormGroup</code>, and <code>FormArray</code>. They provide more predictable, testable, and scalable form handling.</p>
          <p><strong>Comparison:</strong></p>
          <ul>
            <li><strong>Template-driven</strong>: less code in TS, easier for simple forms, validation via directives.</li>
            <li><strong>Reactive</strong>: explicit form model, easier to unit test, better for complex validation and dynamic forms.</li>
          </ul>
          <p><strong>Example (Reactive):</strong></p>
          <pre><code>this.form = new FormGroup({
  name: new FormControl('', Validators.required),
  emails: new FormArray([ new FormControl('') ])
});</code></pre>`
    },
    {
      q: "What is Routing in Angular and how to implement lazy loading?",
      a: `<p>Angular Router maps URLs to components and supports nested routes, route guards, resolvers, and lazy loading.</p>
          <p><strong>Lazy loading</strong> defers loading of feature modules until the route is activated, improving initial load time.</p>
          <p><strong>Example route with lazy loading:</strong></p>
          <pre><code>const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren: () =&gt; import('./admin/admin.module').then(m =&gt; m.AdminModule) }
];</code></pre>
          <p><strong>Interview tip:</strong> Mention preloading strategies, route resolvers for data fetching, and how to protect routes with guards.</p>`
    },
    {
      q: "What is Angular CLI and why is it useful?",
      a: `<p><strong>Angular CLI</strong> is the official command-line tool to scaffold, build, test, and deploy Angular applications. It enforces best practices and integrates with the Angular toolchain.</p>
          <p><strong>Common commands:</strong></p>
          <ul>
            <li><code>ng new</code> — create a new project.</li>
            <li><code>ng generate component|service|module</code> — scaffold code.</li>
            <li><code>ng serve</code> — run dev server with live reload.</li>
            <li><code>ng build --prod</code> — build optimized production bundle (AOT, tree-shaking).</li>
            <li><code>ng test</code>, <code>ng e2e</code> — run unit and end-to-end tests.</li>
          </ul>
          <p><strong>Interview tip:</strong> Explain how CLI integrates with builders, schematics, and how to customize builds with angular.json.</p>`
    }
  ],

  "Angular Patterns & Architecture": [
    {
      q: "What is Change Detection in Angular and how does it work?",
      a: `<p>Change detection is the mechanism Angular uses to update the DOM when component state changes. Angular runs change detection to compare component model values and update the view accordingly.</p>
          <p><strong>Key concepts:</strong></p>
          <ul>
            <li><code>Zone.js</code> patches async APIs and triggers change detection after async tasks.</li>
            <li>Default strategy: Angular checks every component from root to leaves on each change detection cycle.</li>
            <li>OnPush strategy: component is checked only when its @Input reference changes or an event originates from it; improves performance.</li>
          </ul>
          <p><strong>Example of OnPush:</strong></p>
          <pre><code>@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  ...
})
export class MyComponent { /* ... */ }</code></pre>
          <p><strong>Interview tip:</strong> Explain immutability, using observables with async pipe, and when to use manual change detection (<code>ChangeDetectorRef</code>).</p>`
    },
    {
      q: "Explain Angular Zones and their role.",
      a: `<p><strong>Zone.js</strong> creates an execution context (zone) that intercepts async operations (setTimeout, promises, XHR, etc.). Angular uses Zone.js to know when to run change detection automatically after async tasks complete.</p>
          <p><strong>Important points:</strong></p>
          <ul>
            <li>Zones reduce the need to manually call change detection for most async operations.</li>
            <li>You can run code outside Angular's zone using <code>NgZone.runOutsideAngular()</code> to avoid triggering change detection for high-frequency events (e.g., scroll, mousemove).</li>
            <li>Use <code>NgZone.run()</code> to re-enter Angular zone when you need to update the UI.</li>
          </ul>
          <p><strong>Interview tip:</strong> Discuss performance scenarios where running outside the zone helps and how to re-enter the zone safely.</p>`
    },
    {
      q: "Difference between ViewChild and ContentChild and when to use them.",
      a: `<p><strong>ViewChild</strong> queries elements/components declared inside the component's own template. <strong>ContentChild</strong> queries projected content (content passed from parent via &lt;ng-content&gt;).</p>
          <p><strong>Use cases:</strong></p>
          <ul>
            <li>Use <code>@ViewChild()</code> to access a child component, directive, or DOM element defined in the same template.</li>
            <li>Use <code>@ContentChild()</code> to access elements projected into the component by its consumer.</li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre><code>@Component({ selector: 'child', template: '...' }) export class Child {}
@Component({
  selector: 'parent',
  template: '&lt;child #c&gt;&lt;/child&gt; &lt;ng-content&gt;&lt;/ng-content&gt;'
})
export class Parent {
  @ViewChild('c') child!: Child;
  @ContentChild(SomeDirective) projected!: SomeDirective;
}</code></pre>
          <p><strong>Interview tip:</strong> Mention lifecycle timing: <code>ngAfterViewInit</code> for ViewChild and <code>ngAfterContentInit</code> for ContentChild.</p>`
    },
    {
      q: "What are Route Guards and types available in Angular?",
      a: `<p>Route guards control navigation to and from routes. They implement guard interfaces and return boolean/UrlTree/Observable/Promise to allow or block navigation.</p>
          <p><strong>Guard types:</strong></p>
          <ul>
            <li><code>CanActivate</code> — controls route activation.</li>
            <li><code>CanActivateChild</code> — controls child route activation.</li>
            <li><code>CanDeactivate</code> — prevents leaving a route (e.g., unsaved changes).</li>
            <li><code>CanLoad</code> — prevents lazy-loaded modules from loading.</li>
            <li><code>Resolve</code> — pre-fetch data before route activation.</li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre><code>export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}</code></pre>
          <p><strong>Interview tip:</strong> Explain differences between <code>CanLoad</code> and <code>CanActivate</code> for lazy-loaded modules and how to handle async checks.</p>`
    },
    {
      q: "AOT vs JIT compilation: differences and benefits.",
      a: `<p><strong>JIT (Just-in-Time)</strong> compiles templates in the browser at runtime. <strong>AOT (Ahead-of-Time)</strong> compiles templates during build time into efficient JavaScript.</p>
          <p><strong>Benefits of AOT:</strong></p>
          <ul>
            <li>Faster application startup (no runtime compilation).</li>
            <li>Smaller payloads due to template compilation removed from runtime.</li>
            <li>Earlier detection of template errors during build.</li>
          </ul>
          <p><strong>When to use:</strong> Use AOT for production builds; JIT is useful for development and rapid prototyping.</p>`
    },
    {
      q: "What is Angular Universal and why use Server-Side Rendering (SSR)?",
      a: `<p><strong>Angular Universal</strong> enables server-side rendering (SSR) of Angular applications. The server renders the initial HTML and sends it to the client, improving perceived performance and SEO.</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Faster first meaningful paint and better SEO for content-heavy pages.</li>
            <li>Improved social sharing (meta tags rendered on server).</li>
          </ul>
          <p><strong>Considerations:</strong> Handle platform-specific APIs (window, document) carefully using <code>isPlatformBrowser</code>/<code>isPlatformServer</code> or dependency injection tokens.</p>`
    },
    {
      q: "What is the Ivy renderer and its advantages?",
      a: `<p><strong>Ivy</strong> is Angular's modern rendering engine and compilation pipeline. It produces smaller bundles, faster compilation, and improved debugging.</p>
          <p><strong>Advantages:</strong></p>
          <ul>
            <li>Smaller bundle sizes via better tree-shaking.</li>
            <li>Faster incremental builds and improved type checking.</li>
            <li>Better runtime performance and improved debugging stack traces.</li>
            <li>Enables new features like partial compilation and improved compatibility for libraries.</li>
          </ul>`
    },
    {
      q: "How to load components dynamically at runtime?",
      a: `<p>Dynamic component loading allows creating components programmatically (useful for modals, dynamic forms, plugin systems).</p>
          <p><strong>Approach (Ivy):</strong></p>
          <pre><code>const ref = this.viewContainerRef.createComponent(MyDynamicComponent);
ref.instance.someInput = value;</code></pre>
          <p><strong>Older approach (ComponentFactoryResolver):</strong></p>
          <pre><code>const factory = this.resolver.resolveComponentFactory(MyDynamicComponent);
const ref = this.container.createComponent(factory);</code></pre>
          <p><strong>Interview tip:</strong> Mention cleanup (destroying component refs) and passing inputs/outputs to dynamically created components.</p>`
    },
    {
      q: "What is Tree Shaking and how does Angular support it?",
      a: `<p><strong>Tree shaking</strong> is the process of removing unused code from the final bundle. Angular supports tree shaking through ES modules, the Ivy compiler, and build optimizers.</p>
          <p><strong>How to maximize:</strong></p>
          <ul>
            <li>Use ES module imports (avoid side-effectful imports).</li>
            <li>Prefer lazy loading for feature modules.</li>
            <li>Use AOT and production build flags (<code>ng build --prod</code>).</li>
          </ul>`
    },
    {
      q: "What are Angular Elements and when to use them?",
      a: `<p><strong>Angular Elements</strong> allow packaging Angular components as standard Web Components (custom elements) that can be used in non-Angular environments.</p>
          <p><strong>Use cases:</strong> Integrating Angular components into legacy apps, micro-frontends, or other frameworks.</p>
          <p><strong>Example:</strong></p>
          <pre><code>const el = createCustomElement(MyComponent, { injector });
customElements.define('my-element', el);</code></pre>
          <p><strong>Interview tip:</strong> Discuss bundle size considerations and strategies to minimize payload when using elements.</p>`
    }
  ],

  "APIs & Advanced Integrations": [
    {
      q: "Promises vs Observables: differences and when to use each.",
      a: `<p><strong>Promises</strong> represent a single future value and are eager (execute immediately). <strong>Observables</strong> (RxJS) can emit multiple values over time, are lazy (execute on subscribe), and support operators for transformation, filtering, and composition.</p>
          <p><strong>When to use:</strong></p>
          <ul>
            <li>Use Promises for single async results (simple one-off calls).</li>
            <li>Use Observables for streams, multiple values, cancellation, and complex async flows (HTTP streams, websockets, user events).</li>
          </ul>
          <p><strong>Interview tip:</strong> Mention operators (map, switchMap, mergeMap), cancellation via <code>unsubscribe</code> or <code>takeUntil</code>, and the <code>async</code> pipe for templates.</p>`
    },
    {
      q: "What is NgRx and why use it for state management?",
      a: `<p><strong>NgRx</strong> is a reactive state management library for Angular inspired by Redux. It uses a unidirectional data flow with actions, reducers, selectors, and effects.</p>
          <p><strong>Core concepts:</strong></p>
          <ul>
            <li><strong>Store</strong>: single source of truth for application state.</li>
            <li><strong>Actions</strong>: describe state changes.</li>
            <li><strong>Reducers</strong>: pure functions that update state based on actions.</li>
            <li><strong>Selectors</strong>: query slices of state efficiently.</li>
            <li><strong>Effects</strong>: handle side effects like HTTP calls and dispatch further actions.</li>
          </ul>
          <p><strong>When to use:</strong> Large apps with complex state and many components needing shared state; otherwise simpler patterns or services may suffice.</p>`
    },
    {
      q: "State management patterns in Angular (local vs global state).",
      a: `<p>State can be managed at different scopes:</p>
          <ul>
            <li><strong>Local component state</strong>: simple UI state kept in component class.</li>
            <li><strong>Shared service state</strong>: services with BehaviorSubject/ReplaySubject to share state between components.</li>
            <li><strong>Global state stores</strong>: NgRx, Akita, or other libraries for large-scale predictable state management.</li>
          </ul>
          <p><strong>Interview tip:</strong> Explain trade-offs: complexity vs predictability, testability, and debugging (time-travel debugging with NgRx devtools).</p>`
    },
    {
      q: "Explain Angular HTTPClient and Interceptors.",
      a: `<p><strong>HttpClient</strong> is Angular's modern HTTP API built on Observables. It simplifies HTTP requests and response handling with typed responses and interceptors.</p>
          <p><strong>Interceptors</strong> allow you to inspect/transform requests or responses globally (e.g., add auth headers, handle errors, log requests).</p>
          <p><strong>Example interceptor:</strong></p>
          <pre><code>@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req, next) {
    const cloned = req.clone({ setHeaders: { Authorization: 'Bearer ' + token }});
    return next.handle(cloned);
  }
}</code></pre>
          <p><strong>Interview tip:</strong> Mention ordering of interceptors and how to handle token refresh flows safely.</p>`
    },
    {
      q: "Difference between Subject and BehaviorSubject and use cases.",
      a: `<p><strong>Subject</strong> is a multicast observable that does not hold a current value. Subscribers only receive values emitted after they subscribe. <strong>BehaviorSubject</strong> holds the latest value and emits it immediately to new subscribers.</p>
          <p><strong>Use cases:</strong></p>
          <ul>
            <li>Use <code>Subject</code> for event buses where initial value is not needed.</li>
            <li>Use <code>BehaviorSubject</code> for state that has a current value (e.g., current user, settings).</li>
          </ul>
          <p><strong>Interview tip:</strong> Also mention <code>ReplaySubject</code> (replays a specified number of past values) and <code>AsyncSubject</code> (emits last value on completion).</p>`
    },
    {
      q: "How to optimize Angular application performance?",
      a: `<p>Performance optimization techniques:</p>
          <ul>
            <li>Use <code>ChangeDetectionStrategy.OnPush</code> and immutable data patterns.</li>
            <li>Use <strong>lazy loading</strong> for feature modules and route-level code splitting.</li>
            <li>Use <strong>AOT</strong> compilation and production builds to enable tree shaking and minification.</li>
            <li>Use <code>trackBy</code> with <code>*ngFor</code> to avoid unnecessary DOM re-creation.</li>
            <li>Debounce high-frequency events and run heavy work outside Angular zone when appropriate.</li>
            <li>Optimize bundle size: remove unused libraries, use smaller alternatives, and enable differential loading if needed.</li>
            <li>Use server-side rendering (Angular Universal) for faster first paint and SEO.</li>
          </ul>
          <p><strong>Interview tip:</strong> Provide concrete examples from your experience and metrics (bundle size reduction, time-to-interactive improvements).</p>`
    },
    {
      q: "How to handle API errors gracefully in Angular?",
      a: `<p>Best practices for API error handling:</p>
          <ul>
            <li>Use <code>HttpInterceptor</code> to centralize error handling and map server errors to user-friendly messages.</li>
            <li>Return typed error objects and handle different HTTP status codes appropriately (401, 403, 404, 500).</li>
            <li>Implement retry strategies with RxJS operators (<code>retry</code>, <code>retryWhen</code>) for transient errors.</li>
            <li>Use <code>catchError</code> to recover or rethrow errors and show fallback UI.</li>
            <li>Show contextual UI feedback (toasts, inline messages) and avoid exposing raw server messages to users.</li>
          </ul>
          <p><strong>Example:</strong></p>
          <pre><code>this.http.get('/api/data').pipe(
  retry(2),
  catchError(err =&gt; {
    // log and return fallback
    return of(fallbackData);
  })
);</code></pre>`
    },
    {
      q: "How to secure Angular applications (XSS, CSRF, authentication)?",
      a: `<p>Security best practices:</p>
          <ul>
            <li><strong>XSS:</strong> Angular templates auto-escape values. Avoid using <code>[innerHTML]</code> with untrusted content; sanitize if necessary using <code>DomSanitizer</code>.</li>
            <li><strong>CSRF:</strong> Use server-side protections (CSRF tokens) or same-site cookies; for token-based auth, include tokens in Authorization header rather than cookies.</li>
            <li><strong>Authentication/Authorization:</strong> Use secure token storage (prefer HttpOnly cookies for refresh tokens), implement short-lived access tokens, and refresh flows via secure endpoints.</li>
            <li>Validate and authorize on the server; client-side checks are only for UX.</li>
            <li>Keep dependencies up to date and run security scans.</li>
          </ul>
          <p><strong>Interview tip:</strong> Discuss trade-offs of storing tokens in localStorage vs cookies and how to mitigate risks (XSS prevention, Content Security Policy).</p>`
    },
    {
      q: "What are Micro-Frontends and how to implement them with Angular?",
      a: `<p><strong>Micro-frontends</strong> split a large frontend into smaller, independently deployable applications (micro-apps). Each micro-app can be developed and deployed separately and then composed into a shell application.</p>
          <p><strong>Implementation approaches:</strong></p>
          <ul>
            <li>Use module federation (Webpack 5) to share modules and load remote bundles at runtime.</li>
            <li>Use Web Components (Angular Elements) to embed Angular components in other frameworks.</li>
            <li>Use iframe-based isolation for strict separation (trade-offs: integration complexity).</li>
          </ul>
          <p><strong>Interview tip:</strong> Discuss shared dependencies, versioning, routing coordination, and strategies to minimize bundle duplication (shared libraries via module federation).</p>`
    },
    {
      q: "Testing strategies in Angular: unit tests, integration, and e2e.",
      a: `<p>Angular testing pyramid:</p>
          <ul>
            <li><strong>Unit tests</strong> (Jasmine/Karma or Jest): test components, services, pipes in isolation using TestBed and shallow rendering.</li>
            <li><strong>Integration tests</strong>: test interactions between multiple components/services and modules.</li>
            <li><strong>End-to-end (E2E)</strong> tests (Playwright, Cypress, or Protractor historically): test user flows in a real browser environment.</li>
          </ul>
          <p><strong>Best practices:</strong></p>
          <ul>
            <li>Mock HTTP calls with <code>HttpTestingController</code>.</li>
            <li>Use dependency injection to replace real services with fakes/mocks.</li>
            <li>Keep unit tests fast and deterministic; reserve E2E for critical user journeys.</li>
          </ul>
          <p><strong>Interview tip:</strong> Provide examples of test coverage metrics and how tests prevented regressions in your projects.</p>`
    }
  ]
};
