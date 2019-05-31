(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{563:function(n,t){n.exports='<h1 id="starter-templates"><span class="bd-content-title">Starter Templates</span></h1>\n<p class="bd-lead">There are several ways you can create your app, from basic client side HTML all the way up to\nusing a build system and compilers.</p>\n<p>In all cases, you should have familiarity with using <a href="https://vuejs.org">Vue</a>. A good resource for\nVue tutorials is <a href="https://laracasts.com/search?q=vue">Laracasts</a>.</p>\n<h2 id="basic-example"><span class="bd-content-title">Basic example<a class="anchorjs-link" href="#basic-example" aria-label="Anchor"></a></span></h2>\n<p>Get started quickly without the need for a build system, by using standard <code>&lt;script&gt;</code> and <code>&lt;link&gt;</code>\ntags to load the required JavaScript and CSS in your page.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- Required meta tags --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"utf-8"</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1, shrink-to-fit=no"</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">"content-type"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"text/html; charset=UTF-8"</span> /&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>My first BootstrapVue app<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Required Stylesheets --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">link</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">"text/css"</span>\n      <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>\n      <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"</span>\n    /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">link</span>\n      <span class="hljs-attr">type</span>=<span class="hljs-string">"text/css"</span>\n      <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span>\n      <span class="hljs-attr">href</span>=<span class="hljs-string">"https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"</span>\n    /&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Required scripts --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://unpkg.com/vue"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- Our application root element --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-container</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-jumbotron</span> <span class="hljs-attr">header</span>=<span class="hljs-string">"BootstrapVue"</span> <span class="hljs-attr">lead</span>=<span class="hljs-string">"Bootstrap 4 Components for Vue.js 2"</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>For more information visit our website<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://bootstrap-vue.js.org/"</span>&gt;</span>More Info<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-jumbotron</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-group</span>\n          <span class="hljs-attr">horizontal</span>\n          <span class="hljs-attr">:label-cols</span>=<span class="hljs-string">"4"</span>\n          <span class="hljs-attr">description</span>=<span class="hljs-string">"Let us know your name."</span>\n          <span class="hljs-attr">label</span>=<span class="hljs-string">"Enter your name"</span>\n        &gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">v-model.trim</span>=<span class="hljs-string">"name"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-form-group</span>&gt;</span>\n\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">"showAlert"</span>&gt;</span>Hello {{ name }}<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Start running your app --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n      <span class="hljs-built_in">window</span>.app = <span class="hljs-keyword">new</span> Vue({\n        <span class="hljs-attr">el</span>: <span class="hljs-string">\'#app\'</span>,\n        <span class="hljs-attr">data</span>: {\n          <span class="hljs-attr">name</span>: <span class="hljs-string">\'\'</span>\n        },\n        <span class="hljs-attr">computed</span>: {\n          showAlert() {\n            <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name.length &gt; <span class="hljs-number">4</span> ? <span class="hljs-literal">true</span> : <span class="hljs-literal">false</span>\n          }\n        }\n      })\n    </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></pre><h2 id="vue-cli-2"><span class="bd-content-title">Vue CLI 2<a class="anchorjs-link" href="#vue-cli-2" aria-label="Anchor"></a></span></h2>\n<h3 id="webpack-simple-example"><span class="bd-content-title"><code>webpack-simple</code> example<a class="anchorjs-link" href="#webpack-simple-example" aria-label="Anchor"></a></span></h3>\n<p>Starter template: <a href="https://github.com/bootstrap-vue/webpack-simple">https://github.com/bootstrap-vue/webpack-simple</a></p>\n<p>Note: you may need to adjust the template package.json file to use the latest BootstrapVue version</p>\n<p>Coming soon!</p>\n<h3 id="webpack-example"><span class="bd-content-title"><code>webpack</code> example<a class="anchorjs-link" href="#webpack-example" aria-label="Anchor"></a></span></h3>\n<p>Starter template: <a href="https://github.com/bootstrap-vue/webpack">https://github.com/bootstrap-vue/webpack</a></p>\n<p>Note: you may need to adjust the template package.json file to use the latest BootstrapVue version</p>\n<p>Coming soon!</p>\n<h2 id="vue-cli-3"><span class="bd-content-title">Vue CLI 3<a class="anchorjs-link" href="#vue-cli-3" aria-label="Anchor"></a></span></h2>\n<p>Vue CLI 3 is the newest way to create Vue apps.</p>\n<p>A Vue CLI 3 BootStrapVue plugin is available for setting up a basic app. refer to the\n<a href="/docs/#vue-cli-3-plugin">Getting Started</a> docs page for more details.</p>\n<h2 id="building-with-customized-bootstrap-v4-css"><span class="bd-content-title">Building with customized Bootstrap V4 CSS<a class="anchorjs-link" href="#building-with-customized-bootstrap-v4-css" aria-label="Anchor"></a></span></h2>\n<p>If you are using a build system, and would like to customize the Bootstrap V4 CSS, the following\nreferences will be handy starting points:</p>\n<ul>\n<li>Article on\n<a href="https://medium.com/@_Dreamstream/integrating-and-customising-bootstrap-4-in-vue-js-cbc29ba7688e">Integrating and Customising Bootstrap 4 in vue-js</a>\nhosted on medium.com</li>\n<li>Official Bootstrap <a href="https://getbootstrap.com/docs/4.3/getting-started/theming/">Theming Bootstrap</a>\nguide</li>\n</ul>\n<h2 id="individual-component-import"><span class="bd-content-title">Individual component import<a class="anchorjs-link" href="#individual-component-import" aria-label="Anchor"></a></span></h2>\n<p>There are a few methods that you can use to import individual components and directives.</p>\n<p>You will need <code>vue-loader</code> configured to handle the compiling any components that are internally\nsingle file <code>.vue</code> components.</p>\n<p>The BootstrapVue distribution now includes <code>ES</code> modules for all components and directives. These are\nlocated in the <code>bootstrap-vue/es/components/</code> and <code>bootstrap-vue/es/directives/</code> directories, when\nusing the NPM bundle. When building from the BootstrapVue repo source the directories will be\ncreated when you run <code>yarn build</code>.</p>\n<h3 id="importing-individual-components-and-directives-as-es-modules"><span class="bd-content-title">Importing individual components and directives as ES modules<a class="anchorjs-link" href="#importing-individual-components-and-directives-as-es-modules" aria-label="Anchor"></a></span></h3>\n<p>Components and directives appear in sub directories, grouped by functionality. As an example, you\ncan import <code>&lt;b-card&gt;</code> (plus it&#39;s sub components) and <code>&lt;b-table&gt;</code> as follows:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-comment">// Import the individual components</span>\n<span class="hljs-keyword">import</span> BCard <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components/card/card\'</span>\n<span class="hljs-keyword">import</span> BCardBody <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components/card/card-body\'</span>\n<span class="hljs-keyword">import</span> BCardFooter <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components/card/card-footer\'</span>\n<span class="hljs-keyword">import</span> BCardHeader <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components/card/card-header\'</span>\n<span class="hljs-keyword">import</span> BCardImg <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components/card/card-img\'</span>\n<span class="hljs-keyword">import</span> BTable <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components/table/table\'</span>\n\n<span class="hljs-comment">// Add components globally</span>\nVue.component(<span class="hljs-string">\'b-card\'</span>, BCard)\nVue.component(<span class="hljs-string">\'b-card-body\'</span>, BCardBody)\nVue.component(<span class="hljs-string">\'b-card-footer\'</span>, BCardFooter)\nVue.component(<span class="hljs-string">\'b-card-header\'</span>, BCardHeader)\nVue.component(<span class="hljs-string">\'b-card-img\'</span>, BCardImg)\nVue.component(<span class="hljs-string">\'b-table\'</span>, BTable)\n\n<span class="hljs-comment">// Or make available to your component or app</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    BCard,\n    BCardBody,\n    BCardFooter,\n    BCardHeader,\n    BCardImg,\n    BTable\n  }\n  <span class="hljs-comment">// ...</span>\n}</pre><h3 id="importing-component-groups-and-directives-as-vue-plugins"><span class="bd-content-title">Importing component groups and directives as Vue plugins<a class="anchorjs-link" href="#importing-component-groups-and-directives-as-vue-plugins" aria-label="Anchor"></a></span></h3>\n<p>A component group and/or directive can be imported as a Vue plugin by importing the component group\nor directive directory. Importing <code>&lt;b-card&gt;</code> (and related sub-components) and <code>&lt;b-table&gt;</code> can be\ndone with:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-comment">// Import the components as Vue plugins</span>\n<span class="hljs-keyword">import</span> { Card, Table } <span class="hljs-keyword">from</span> <span class="hljs-string">\'bootstrap-vue/es/components\'</span>\n\n<span class="hljs-comment">// Add the plugins to Vue</span>\nVue.use(Card)\nVue.use(Table)</pre><p>Now you can use the <code>&lt;b-card&gt;</code> (including the <code>&lt;b-card-*&gt;</code> sub-components) and <code>&lt;b-table&gt;</code>\ncomponents in your project templates.</p>\n<p>Note that some component plugins automatically import other directives and components (i.e. the\n<code>modal</code> plugin also imports the <code>v-b-modal</code> directive, and <code>nav</code> plugin automatically imports all\n<code>nav-*</code> sub-components and the dropdown sub-components). Refer to the component reference or\ndirective reference at the bottom of each documentation page for details.</p>\n'}}]);
//# sourceMappingURL=cfe21c2e7d6d2a596866.js.map