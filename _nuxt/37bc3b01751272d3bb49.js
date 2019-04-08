(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{356:function(t,n){t.exports='<h1 id="tooltips"><span class="bd-content-title">Tooltips</span></h1>\n<p class="bd-lead">Easily add tooltips to elements or components via the <code>&lt;b-tooltip&gt;</code> component or\n<a href="/docs/directives/tooltip"><code>v-b-tooltip</code></a> directive (preferred method).</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center my-3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-tooltip.hover</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Tooltip content"</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-tooltip.vue --&gt;</span></pre><h2 id="overview"><span class="bd-content-title">Overview<a class="anchorjs-link" href="#overview" aria-label="Anchor"></a></span></h2>\n<p>Things to know when using tooltip component:</p>\n<ul>\n<li>Tooltips rely on the 3rd party library Popper.js for positioning. The library is bundled with\nBootstrapVue in the dist files!</li>\n<li>Tooltips with zero-length titles are never displayed.</li>\n<li>Triggering tooltips on hidden elements will not work.</li>\n<li>Specify <code>container</code> as <code>null</code> (default, appends to <code>&lt;body&gt;</code>) to avoid rendering problems in more\ncomplex components (like input groups, button groups, etc). You can use container to optionally\nspecify a different element to append the rendered tooltip to.</li>\n<li>Tooltips for <code>disabled</code> elements must be triggered on a wrapper element.</li>\n<li>When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use\nwhite-space: nowrap; on your <code>&lt;a&gt;</code>s, <code>&lt;b-link&gt;</code>s and <code>&lt;router-link&gt;</code>s to avoid this behavior.</li>\n<li>Tooltips must be hidden before their corresponding elements have been removed from the DOM.</li>\n</ul>\n<p>The <code>&lt;b-tooltip</code> component inserts a hidden (<code>display:none</code>) <code>&lt;div&gt;</code> intermediate container element\nat the point in the DOM where the <code>&lt;b-tooltip&gt;</code> component is placed. This may affect layout and/or\nstyling of components such as <code>&lt;b-button-group&gt;</code>, <code>&lt;b-button-toolbar&gt;</code>, and <code>&lt;b-input-group&gt;</code>. To\navoid these possible layout issues, place the <code>&lt;b-tooltip&gt;</code> component <strong>outside</strong> of these types of\ncomponents.</p>\n<p>The target element <strong>must</strong> exist in the document before <code>&lt;b-tooltip&gt;</code> is mounted. If the target\nelement is not found during mount, the tooltip will never open. Always place your <code>&lt;b-tooltip&gt;</code>\ncomponent lower in the DOM than your target element. This rule also applies if a callback is used as\ntarget element, since that callback is called only once on mount.</p>\n<p><strong>Note:</strong> <em>When using the default slot for the title, <code>&lt;b-tooltip&gt;</code> transfers the rendered DOM from\nthat slot into the tooltip&#39;s markup when shown, and returns the content back to the <code>&lt;b-tooltip&gt;</code>\ncomponent when hidden. This may cause some issues in rare circumstances, so please test your\nimplementation accordingly! The <code>title</code> prop does not have this behavior. For simple tooltips, we\nrecommend using the <code>v-b-tooltip</code> directive and enable the <code>html</code> modifier if needed.</em></p>\n<h2 id="positioning"><span class="bd-content-title">Positioning<a class="anchorjs-link" href="#positioning" aria-label="Anchor"></a></span></h2>\n<p>Twelve options are available for positioning: <code>top</code>, <code>topleft</code>, <code>topright</code>, <code>right</code>, <code>righttop</code>,\n<code>rightbottom</code>, <code>bottom</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>left</code>, <code>lefttop</code>, and <code>leftbottom</code> aligned.\nThe default position is <code>top</code>. Positioning is relative to the trigger element.</p>\n<div class="bd-example bd-example-tooltip-static">\n  <div class="tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">\n    <div class="arrow" style="left: 6px"></div>\n    <div class="tooltip-inner">Tooltip on the top</div>\n  </div>\n  <div class="tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">\n    <div class="arrow" style="right: 6px"></div>\n    <div class="tooltip-inner">Tooltip on the topleft</div>\n  </div>\n  <div class="tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">\n    <div class="arrow" style="left: 6px"></div>\n    <div class="tooltip-inner">Tooltip on the topright</div>\n  </div>\n  <div class="tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">\n    <div class="arrow" style="top: 4px"></div>\n    <div class="tooltip-inner">Tooltip on the right</div>\n  </div>\n  <div class="tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">\n    <div class="arrow" style="bottom: 4px"></div>\n    <div class="tooltip-inner">Tooltip on the righttop</div>\n  </div>\n  <div class="tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">\n    <div class="arrow" style="top: 4px"></div>\n    <div class="tooltip-inner">Tooltip on the rightbottom</div>\n  </div>\n  <div class="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">\n    <div class="arrow" style="left: 6px"></div>\n    <div class="tooltip-inner">Tooltip on the bottom</div>\n  </div>\n  <div class="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">\n    <div class="arrow" style="right: 6px"></div>\n    <div class="tooltip-inner">Tooltip on the bottomleft</div>\n  </div>\n  <div class="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">\n    <div class="arrow" style="left: 6px"></div>\n    <div class="tooltip-inner">Tooltip on the bottomright</div>\n  </div>\n  <div class="tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">\n    <div class="arrow" style="top: 4px"></div>\n    <div class="tooltip-inner">Tooltip on the left</div>\n  </div>\n  <div class="tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">\n    <div class="arrow" style="bottom: 4px"></div>\n    <div class="tooltip-inner">Tooltip on the lefttop</div>\n  </div>\n  <div class="tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">\n    <div class="arrow" style="top: 4px"></div>\n    <div class="tooltip-inner">Tooltip on the leftbottom</div>\n  </div>\n</div>\n\n<h2 id="triggers"><span class="bd-content-title">Triggers<a class="anchorjs-link" href="#triggers" aria-label="Anchor"></a></span></h2>\n<p>Tooltips can be triggered (opened/closed) via any combination of <code>click</code>, <code>hover</code> and <code>focus</code>. The\ndefault trigger is <code>hover focus</code>.</p>\n<p>If a tooltip has more than one trigger, then all triggers must be cleared before the tooltip will\nclose. I.e. if a tooltip has the trigger <code>focus click</code>, and it was opened by <code>focus</code>, and the user\nthen clicks the trigger element, they must click it again <strong>and</strong> move focus to close the tooltip.</p>\n<h2 id="b-tooltip-component-usage"><span class="bd-content-title"><code>&lt;b-tooltip&gt;</code> Component Usage<a class="anchorjs-link" href="#b-tooltip-component-usage" aria-label="Anchor"></a></span></h2>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"py-4"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"button-1"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span>&gt;</span>Live chat<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"py-4"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"button-2"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span>&gt;</span>Html chat<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">"4"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"py-4"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"button-3"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span>&gt;</span>Alternative chat<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Tooltip title specified via prop title --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tooltip</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"button-1"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Online!"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-tooltip</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- HTML title specified via default slot --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tooltip</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"button-2"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom"</span>&gt;</span>\n    Hello <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>World!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-tooltip</span>&gt;</span>\n\n  <span class="hljs-comment">&lt;!-- Tooltip for an element identified by ref --&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tooltip</span> <span class="hljs-attr">:target</span>=<span class="hljs-string">"() =&gt; $refs[\'button-3\']"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Alternative!"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-tooltip-component.vue --&gt;</span></pre><h3 id="component-options"><span class="bd-content-title">Component Options<a class="anchorjs-link" href="#component-options" aria-label="Anchor"></a></span></h3>\n<div class="table-responsive-sm"><table class="table b-table table-striped table-sm bv-docs-table">\n<thead class="thead-default">\n<tr>\n<th>Prop</th>\n<th>Default</th>\n<th>Description</th>\n<th>Supported values</th>\n</tr>\n</thead>\n<tbody><tr>\n<td><code>target</code></td>\n<td><code>null</code></td>\n<td>Element String ID, or a reference to an element or component, or a function returning either of them, that you want to trigger the tooltip. <strong>Required</strong></td>\n<td>Any valid, in-document unique element ID, element reference or component reference or a function returning any such ID / reference</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td><code>null</code></td>\n<td>Tooltip content (text only, no HTML). if HTML is required, place it in the default slot</td>\n<td>Plain text</td>\n</tr>\n<tr>\n<td><code>placement</code></td>\n<td><code>top</code></td>\n<td>Tooltip position, relative to the trigger element.</td>\n<td><code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, <code>auto</code>, <code>topleft</code>, <code>topright</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>lefttop</code>, <code>leftbottom</code>, <code>righttop</code>, <code>rightbottom</code></td>\n</tr>\n<tr>\n<td><code>triggers</code></td>\n<td><code>hover focus</code></td>\n<td>Space separated list of event(s), which will trigger open/close of tooltip</td>\n<td><code>hover</code>, <code>focus</code>, <code>click</code>. Note <code>blur</code> is a special use case to close tooltip on next click, usually used in conjunction with <code>click</code>.</td>\n</tr>\n<tr>\n<td><code>no-fade</code></td>\n<td><code>false</code></td>\n<td>Disable fade animation when set to <code>true</code></td>\n<td><code>true</code> or <code>false</code></td>\n</tr>\n<tr>\n<td><code>delay</code></td>\n<td><code>0</code></td>\n<td>Delay showing and hiding of tooltip by specified number of milliseconds. Can also be specified as an object in the form of <code>{ show: 100, hide: 400 }</code> allowing different show and hide delays</td>\n<td><code>0</code> and up, integers only.</td>\n</tr>\n<tr>\n<td><code>offset</code></td>\n<td><code>0</code></td>\n<td>Shift the center of the tooltip by specified number of pixels</td>\n<td>Any negative or positive integer</td>\n</tr>\n<tr>\n<td><code>container</code></td>\n<td><code>null</code></td>\n<td>Element string ID to append rendered tooltip into. If <code>null</code> or element not found, tooltip is appended to <code>&lt;body&gt;</code> (default)</td>\n<td>Any valid in-document unique element ID.</td>\n</tr>\n<tr>\n<td><code>boundary</code></td>\n<td><code>&#39;scrollParent&#39;</code></td>\n<td>The container that the tooltip will be constrained visually. The default should suffice in most cases, but you may need to change this if your target element is in a small container with overflow scroll</td>\n<td><code>&#39;scrollParent&#39;</code> (default), <code>&#39;viewport&#39;</code>, <code>&#39;window&#39;</code>, or a reference to an HTML element.</td>\n</tr>\n<tr>\n<td><code>boundaryPadding</code></td>\n<td><code>5</code></td>\n<td>Amount of pixel used to define a minimum distance between the boundaries and the tooltip. This makes sure the tooltip always has a little padding between the edges of its container.</td>\n<td>Any positive number</td>\n</tr>\n</tbody></table>\n</div><h3 id="programmatically-show-and-hide-tooltip"><span class="bd-content-title">Programmatically show and hide tooltip<a class="anchorjs-link" href="#programmatically-show-and-hide-tooltip" aria-label="Anchor"></a></span></h3>\n<p>You can manually control the visibility of a tooltip via the syncable Boolean <code>show</code> prop. Setting\nit to <code>true</code> will show the tooltip, while setting it to <code>false</code> will hide the tooltip.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tooltip-button-1"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>I have a tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mt-3"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"show = !show"</span>&gt;</span>Toggle Tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tooltip</span> <span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"show"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"tooltip-button-1"</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>&gt;</span>\n      Hello <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>World!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">data</span>: {\n      <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-tooltip-show-sync.vue --&gt;</span></pre><p>To make the tooltip shown on initial render, simply add the <code>show</code> prop on <code>&lt;b-tooltip&gt;</code>:</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-center"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tooltip-button-2"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-tooltip</span> <span class="hljs-attr">show</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"tooltip-button-2"</span>&gt;</span>I start open<span class="hljs-tag">&lt;/<span class="hljs-name">b-tooltip</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-tooltip-show-open.vue --&gt;</span></pre><p>Programmatic control can also be affected by submitting <code>&#39;open&#39;</code> and <code>&#39;close&#39;</code> events to the tooltip\nby reference.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex flex-column text-md-center"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tooltip-button-show-event"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>I have a tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"px-1"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"onOpen"</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"px-1"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"onClose"</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-tooltip</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"tooltip"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"tooltip-button-show-event"</span>&gt;</span>\n      Hello <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>World!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-tooltip</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-attr">methods</span>: {\n      onOpen() {\n        <span class="hljs-keyword">this</span>.$refs.tooltip.$emit(<span class="hljs-string">\'open\'</span>)\n      },\n      onClose() {\n        <span class="hljs-keyword">this</span>.$refs.tooltip.$emit(<span class="hljs-string">\'close\'</span>)\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-tooltip-show-ref-event.vue --&gt;</span></pre><p>You can also use <code>$root</code> events to trigger the showing and hiding of tooltip(s). See the <strong>Hiding\nand showing tooltips via $root events</strong> section below for details.</p>\n<h3 id="programmatically-disabling-tooltip"><span class="bd-content-title">Programmatically disabling tooltip<a class="anchorjs-link" href="#programmatically-disabling-tooltip" aria-label="Anchor"></a></span></h3>\n<p>You can disable tooltip via the syncable Boolean prop <code>disabled</code> (default is <code>false</code>) Setting it to\n<code>true</code> will disable the tooltip. If the tooltip is currently visible when disabled is set to\n<code>false</code>, the tooltip will remain visible until it is enabled or programmatically closed. If the\ntooltip is disabled/enabled via $root events (see below), your <code>disabled</code> value will be updated as\nlong as you have provided the <code>.sync</code> prop modifier.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex flex-column text-md-center"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"tooltip-button-disable"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>I have a tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"p-2"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"disabled = !disabled"</span>&gt;</span>\n        {{ disabled ? \'Enable\' : \'Disable\' }} Tooltip by prop\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"disableByRef"</span>&gt;</span>\n        {{ disabled ? \'Enable\' : \'Disable\' }} Tooltip by $ref event\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-tooltip</span> <span class="hljs-attr">:disabled.sync</span>=<span class="hljs-string">"disabled"</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"tooltip"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"tooltip-button-disable"</span>&gt;</span>\n        Hello <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>World!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-tooltip</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">false</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      disableByRef() {\n        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.disabled) {\n          <span class="hljs-keyword">this</span>.$refs.tooltip.$emit(<span class="hljs-string">\'enable\'</span>)\n        } <span class="hljs-keyword">else</span> {\n          <span class="hljs-keyword">this</span>.$refs.tooltip.$emit(<span class="hljs-string">\'disable\'</span>)\n        }\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-tooltip-disable.vue --&gt;</span></pre><p class="bd-lead"><strong>Note:</strong> <em>In the above example, since we are using the default tooltip triggers of <code>focus hover</code>,\nthe tooltip will close before it is disabled due to loosing focus (and hover) to the toggle\nbutton.</em></p>\n<p>You can also emit <code>$root</code> events to trigger disabling and enabling of tooltip(s). See the\n<strong>Disabling and enabling tooltips via $root events</strong> section below for details.</p>\n<p>You can also emit <code>$root</code> events to trigger disabling and enabling of popover(s). See the\n<strong>Disabling and enabling tooltips via $root events</strong> section below for details.</p>\n<h2 id="v-b-tooltip-directive-usage"><span class="bd-content-title"><code>v-b-tooltip</code> Directive Usage<a class="anchorjs-link" href="#v-b-tooltip-directive-usage" aria-label="Anchor"></a></span></h2>\n<p>The <code>v-b-tooltip</code> directive makes adding tooltips even easier, without additional placeholder\nmarkup:</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span> <span class="hljs-attr">fluid</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"py-4"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">v-b-tooltip</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Online!"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span>&gt;</span>Live chat<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">"6"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"py-4"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>\n        <span class="hljs-attr">v-b-tooltip.html</span>\n        <span class="hljs-attr">title</span>=<span class="hljs-string">"Hello &lt;strong&gt;World!&lt;/strong&gt;"</span>\n        <span class="hljs-attr">variant</span>=<span class="hljs-string">"outline-success"</span>\n      &gt;</span>\n        Html chat\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-tooltip-directive.vue --&gt;</span></pre><p>Refer to the <a href="/docs/directives/tooltip"><code>v-b-tooltip</code> documentation</a> for more information and\nfeatures of the directive format.</p>\n<h2 id="hiding-and-showing-tooltips-via-root-events"><span class="bd-content-title">Hiding and showing tooltips via $root events<a class="anchorjs-link" href="#hiding-and-showing-tooltips-via-root-events" aria-label="Anchor"></a></span></h2>\n<h2 id="global-root-instance-events"><span class="bd-content-title">&#39;Global&#39; $root instance events<a class="anchorjs-link" href="#global-root-instance-events" aria-label="Anchor"></a></span></h2>\n<p>Using <code>$root</code> instance it is possible to emit and listen events somewhere out of a component, where\n<code>&lt;b-collapse&gt;</code> is used. In short, <code>$root</code> behaves like a global event emitters and listener. Details\nabout <code>$root</code> instance can be found in\n<a href="https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-the-Root-Instance">the official Vue docs</a>.</p>\n<h3 id="hiding-and-showing-tooltips-via-root-events-1"><span class="bd-content-title">Hiding and showing tooltips via $root events<a class="anchorjs-link" href="#hiding-and-showing-tooltips-via-root-events-1" aria-label="Anchor"></a></span></h3>\n<p>You can close (hide) <strong>all open tooltips</strong> by emitting the <code>bv::hide::tooltip</code> event on $root:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">\'bv::hide::tooltip\'</span>)</pre><p>To close a <strong>specific tooltip</strong>, pass the trigger element&#39;s <code>id</code> as the argument:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">\'bv::show::tooltip\'</span>, <span class="hljs-string">\'my-trigger-button-id\'</span>)</pre><p>To open a <strong>specific tooltip</strong>, pass the trigger element&#39;s <code>id</code> as the argument when emitting the\n<code>bv::show::tooltip</code> $root event:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">\'bv::show::tooltip\'</span>, <span class="hljs-string">\'my-trigger-button-id\'</span>)</pre><p>To open all tooltips simultaneously, omit the <code>id</code> argument when emitting the <code>bv::show::tooltip</code>\nevent.</p>\n<p>These events work for both the component <strong>and</strong> directive versions of tooltip.</p>\n<p class="bd-lead"><strong>Note:</strong> <em>the <strong>trigger element</strong> must exist in the DOM and be in a visible state in order for\nthe tooltip to show.</em></p>\n<h2 id="disabling-and-enabling-tooltips-via-root-events"><span class="bd-content-title">Disabling and enabling tooltips via $root events<a class="anchorjs-link" href="#disabling-and-enabling-tooltips-via-root-events" aria-label="Anchor"></a></span></h2>\n<h3 id="disabling-and-enabling-tooltips-via-root-events-1"><span class="bd-content-title">Disabling and enabling tooltips via $root events<a class="anchorjs-link" href="#disabling-and-enabling-tooltips-via-root-events-1" aria-label="Anchor"></a></span></h3>\n<p>You can disable <strong>all open tooltips</strong> by emitting the <code>bv::disable::tooltip</code> event on $root:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">\'bv::disable::tooltip\'</span>)</pre><p>To disable a <strong>specific tooltip</strong>, pass the trigger element&#39;s <code>id</code> as the argument:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">\'bv::disable::tooltip\'</span>, <span class="hljs-string">\'my-trigger-button-id\'</span>)</pre><p>To enable a <strong>specific tooltip</strong>, pass the trigger element&#39;s <code>id</code> as the argument when emitting the\n<code>bv::enable::tooltip</code> $root event:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">\'bv::enable::tooltip\'</span>, <span class="hljs-string">\'my-trigger-button-id\'</span>)</pre><p>To enable all tooltips simultaneously, omit the <code>id</code> argument when emitting the\n<code>bv::enable::tooltip</code> event.</p>\n<p>These events work for both the component <strong>and</strong> directive versions of tooltip.</p>\n<p class="bd-lead"><strong>Note:</strong> <em>The <strong>trigger element</strong> must exist in the DOM in order for the tooltip to be enabled or\ndisabled.</em></p>\n<h3 id="listening-to-tooltip-changes-via-root-events"><span class="bd-content-title">Listening to tooltip changes via $root events<a class="anchorjs-link" href="#listening-to-tooltip-changes-via-root-events" aria-label="Anchor"></a></span></h3>\n<p>To listen to any tooltip opening, use:</p>\n<pre class="hljs js text-monospace p-2"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  mounted() {\n    <span class="hljs-keyword">this</span>.$root.$on(<span class="hljs-string">\'bv::tooltip::show\'</span>, bvEvent =&gt; {\n      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'bvEvent:\'</span>, bvEvent)\n    })\n  }\n}</pre><p>Refer to the <a href="/docs/components/tooltip#component-reference">Events</a> section of documentation for the\nfull list of events.</p>\n\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);
//# sourceMappingURL=37bc3b01751272d3bb49.js.map