webpackJsonp([23],{dixn:function(s,a){s.exports="<h1 id=tabs>Tabs</h1> <blockquote> <p>Create tabbable panes of local content.</p> </blockquote> <h2 id=basic-usage>Basic usage</h2> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>b-tabs</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;first&quot;</span> <span class=hljs-attr>active</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>br</span>&gt;</span>I&apos;m the first fading tab\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;second&quot;</span> &gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>br</span>&gt;</span>I&apos;m the second tab content\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;disabled&quot;</span> <span class=hljs-attr>disabled</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>br</span>&gt;</span>Disabled tab!\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-tabs</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- basic.vue --&gt;</span>\n</pre> <h2 id=cards-integration>Cards Integration</h2> <p>Tabs support integrating with bootstrap cards. Just add the <code>card</code> property to <code>&lt;b-tabs&gt;</code>. Note that you should add <code>no-body</code> prop on <code>&lt;b-card&gt;</code> element in order to propertly decorate the card header and remove the extra padding introduced by <code>card-body</code>.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>b-card</span> <span class=hljs-attr>no-body</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-tabs</span> <span class=hljs-attr>card</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Tab 1&quot;</span> <span class=hljs-attr>active</span>&gt;</span>\n            Tab Contents\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Tab 2&quot;</span>&gt;</span>\n            Tab Contents 2\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-tabs</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-card</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- with-card.vue --&gt;</span>\n</pre> <h2 id=pills-variant>Pills variant</h2> <p>Tabs use the <code>tabs</code> styling by default. Just add <code>pills</code> property to <code>&lt;b-tabs&gt;</code> for the pill style variant.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>b-card</span> <span class=hljs-attr>no-body</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-tabs</span> <span class=hljs-attr>pills</span> <span class=hljs-attr>card</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Tab 1&quot;</span> <span class=hljs-attr>active</span>&gt;</span>\n            Tab Contents\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Tab 2&quot;</span>&gt;</span>\n            Tab Contents 2\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-tabs</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-card</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- tabs-pills.vue --&gt;</span>\n</pre> <h2 id=fade-animation>Fade animation</h2> <p>Fade is enabled by default when changing tabs. It can disabled with <code>no-fade</code> property.</p> <h2 id=add-tabs-without-content>Add Tabs without content</h2> <p>If you want to add extra tabs that do not have any content, you can put them in <code>tabs</code> slot:</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>b-tabs</span>&gt;</span>\n  <span class=hljs-comment>&lt;!-- Add your b-tab components here--&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>template</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>&quot;tabs&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-nav-item</span> <span class=hljs-attr>to</span>=<span class=hljs-string>&quot;#&quot;</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>&quot;onClick&quot;</span>&gt;</span>Another tab<span class=hljs-tag>&lt;/<span class=hljs-name>b-nav-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>b-tabs</span>&gt;</span>\n</pre> <h2 id=apply-custom-classes-to-the-generated-nav-tabs-or-pills>Apply custom classes to the generated nav-tabs or pills</h2> <p>The tab selectors are based on Boostrap V4&apos;s <code>nav</code> markup ( i.e. <code>ul.nav &gt; li.nav-item &gt; a.nav-link</code>). In some situations, you may want to add classes to the <code>&lt;li&gt;</code> (nav-item) and/or the <code>&lt;a&gt;</code> (nav-link) on a per tab basis. To do so, simply supply the classname to the <code>title-item-class</code> prop (for the <code>&lt;li&gt;</code> element) or <code>title-link-class</code> prop (for the <code>&lt;a&gt;</code> element). Value&apos;s can be passed as a string or array of strings.</p> <p>Note: THe <code>ative</code> class is automatically applied to the <code>&lt;a&gt;</code> element. You may need to accomodate your custom classes for this.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-card</span> <span class=hljs-attr>no-body</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-tabs</span> <span class=hljs-attr>card</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;tabIndex&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Tab 1&quot;</span> <span class=hljs-attr>:title-link-class</span>=<span class=hljs-string>&quot;linkClass(0)&quot;</span>&gt;</span>\n        Tab Contents 1\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Tab 2&quot;</span> <span class=hljs-attr>:title-link-class</span>=<span class=hljs-string>&quot;linkClass(1)&quot;</span>&gt;</span>\n        Tab Contents 2\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Tab 3&quot;</span> <span class=hljs-attr>:title-link-class</span>=<span class=hljs-string>&quot;linkClass(2)&quot;</span>&gt;</span>\n        Tab Contents 3\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-tabs</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>b-card</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  data () {\n    <span class=hljs-keyword>return</span> {\n      <span class=hljs-attr>tabIndex</span>: <span class=hljs-number>0</span>\n    }\n  },\n  <span class=hljs-attr>methods</span>: {\n    linkClass (idx) {\n      <span class=hljs-keyword>if</span> (<span class=hljs-keyword>this</span>.tabIndex === idx) {\n        <span class=hljs-keyword>return</span> [<span class=hljs-string>&apos;bg-primary&apos;</span>, <span class=hljs-string>&apos;text-light&apos;</span>]\n      } <span class=hljs-keyword>else</span> {\n        <span class=hljs-keyword>return</span> [<span class=hljs-string>&apos;bg-light&apos;</span>, <span class=hljs-string>&apos;text-info&apos;</span>]\n      }\n    }\n  }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- with-classes.vue --&gt;</span>\n</pre> <h2 id=advanced-examples>Advanced Examples</h2> <h3 id=external-controls>External controls</h3> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-comment>&lt;!-- Tabs with card integration --&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-card</span> <span class=hljs-attr>no-body</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-tabs</span> <span class=hljs-attr>small</span> <span class=hljs-attr>card</span> <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;tabIndex&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;General&quot;</span>&gt;</span>\n          I&apos;m the first fading tab\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Edit profile&quot;</span>&gt;</span>\n          I&apos;m the second tab\n          <span class=hljs-tag>&lt;<span class=hljs-name>b-card</span>&gt;</span>I&apos;m the card in tab<span class=hljs-tag>&lt;/<span class=hljs-name>b-card</span>&gt;</span>\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Premium Plan&quot;</span> <span class=hljs-attr>disabled</span>&gt;</span>\n          Sibzamini!\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>title</span>=<span class=hljs-string>&quot;Info&quot;</span>&gt;</span>\n          I&apos;m the last tab\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-tabs</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-card</span>&gt;</span>\n\n    <span class=hljs-comment>&lt;!-- Control buttons--&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;text-center&quot;</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-button-group</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mt-2&quot;</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-btn</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>&quot;tabIndex--&quot;</span>&gt;</span>Previous<span class=hljs-tag>&lt;/<span class=hljs-name>b-btn</span>&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-btn</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>&quot;tabIndex++&quot;</span>&gt;</span>Next<span class=hljs-tag>&lt;/<span class=hljs-name>b-btn</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-button-group</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>br</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>span</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;text-muted&quot;</span>&gt;</span>Current Tab: {{tabIndex}}<span class=hljs-tag>&lt;/<span class=hljs-name>span</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  data () {\n    <span class=hljs-keyword>return</span> {\n      <span class=hljs-attr>tabIndex</span>: <span class=hljs-number>0</span>\n    }\n  }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- tabs-controls.vue --&gt;</span>\n</pre> <h3 id=dynamic-tabs>Dynamic Tabs</h3> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-card</span> <span class=hljs-attr>no-body</span>&gt;</span>\n      <span class=hljs-tag>&lt;<span class=hljs-name>b-tabs</span> <span class=hljs-attr>card</span>&gt;</span>\n        <span class=hljs-comment>&lt;!-- Render Tabs --&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-tab</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>&quot;`Tab ${i}`&quot;</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>&quot;i in tabs&quot;</span> <span class=hljs-attr>:key</span>=<span class=hljs-string>&quot;i&quot;</span>&gt;</span>\n          Tab Contents {{i}}\n          <span class=hljs-tag>&lt;<span class=hljs-name>b-btn</span> <span class=hljs-attr>size</span>=<span class=hljs-string>&quot;sm&quot;</span> <span class=hljs-attr>variant</span>=<span class=hljs-string>&quot;danger&quot;</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;float-right&quot;</span> @<span class=hljs-attr>click</span>=<span class=hljs-string>&quot;()=&gt;closeTab(i)&quot;</span>&gt;</span>\n            Close tab\n          <span class=hljs-tag>&lt;/<span class=hljs-name>b-btn</span>&gt;</span>\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-tab</span>&gt;</span>\n\n        <span class=hljs-comment>&lt;!-- New Tab Button (Using tabs slot) --&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>b-nav-item</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>&quot;tabs&quot;</span> @<span class=hljs-attr>click.prevent</span>=<span class=hljs-string>&quot;newTab&quot;</span> <span class=hljs-attr>href</span>=<span class=hljs-string>&quot;#&quot;</span>&gt;</span>\n          +\n        <span class=hljs-tag>&lt;/<span class=hljs-name>b-nav-item</span>&gt;</span>\n\n        <span class=hljs-comment>&lt;!-- Render this if no tabs --&gt;</span>\n        <span class=hljs-tag>&lt;<span class=hljs-name>div</span> <span class=hljs-attr>slot</span>=<span class=hljs-string>&quot;empty&quot;</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;text-center text-muted&quot;</span>&gt;</span>\n          There are no open tabs\n          <span class=hljs-tag>&lt;<span class=hljs-name>br</span>&gt;</span> Open a new tab using + button.\n        <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n      <span class=hljs-tag>&lt;/<span class=hljs-name>b-tabs</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-card</span>&gt;</span>\n\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  data () {\n    <span class=hljs-keyword>return</span> {\n      <span class=hljs-attr>tabs</span>: [],\n      <span class=hljs-attr>tabCounter</span>: <span class=hljs-number>0</span>\n    }\n  },\n  <span class=hljs-attr>methods</span>: {\n    closeTab (x) {\n      <span class=hljs-keyword>for</span> (<span class=hljs-keyword>let</span> i = <span class=hljs-number>0</span>; i &lt; <span class=hljs-keyword>this</span>.tabs.length; i++) {\n        <span class=hljs-keyword>if</span> (<span class=hljs-keyword>this</span>.tabs[i] === x) {\n          <span class=hljs-keyword>this</span>.tabs.splice(i, <span class=hljs-number>1</span>)\n        }\n      }\n    },\n    newTab () {\n      <span class=hljs-keyword>this</span>.tabs.push(<span class=hljs-keyword>this</span>.tabCounter++)\n    }\n  }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- dynamic-tabs.vue --&gt;</span>\n</pre> <h2 id=component-reference>Component Reference</h2> "}});
//# sourceMappingURL=23.adcc083d7373d1b3d19d.js.map