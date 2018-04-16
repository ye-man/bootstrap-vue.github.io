(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{333:function(s,t){s.exports='<h1 id="tooltips">Tooltips</h1>\n<blockquote>\n<p>Documentation and examples for adding custom Bootstrap-Vue tooltips, using Bootstrap V4 CSS for\nstyling and animations. Tooltips can be triggered by hovering, focusing, or clicking an element</p>\n</blockquote>\n<p>Use the <code>v-b-tooltip</code> directive on any element or component where you would like a tooltip\nto appear.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center my-3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tooltip content&quot;</span>&gt;</span>Hover Me<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tooltip-example-sample.vue --&gt;</span>\n</pre>\n<h2 id="overview">Overview</h2>\n<p>Things to know when using tooltips:</p>\n<ul>\n<li>Tooltips rely on the 3rd party library Popper.js for positioning. The library is bundled wit Bootstrap-Vue!</li>\n<li>Tooltips with zero-length titles are never displayed.</li>\n<li>Specify container: &apos;body&apos; (default) to avoid rendering problems in more complex components (like input groups, button groups, etc).</li>\n<li>Triggering tooltips on hidden elements will not work.</li>\n<li>Tooltips for <code>disabled</code> elements must be triggered on a wrapper element.</li>\n<li>When triggered from hyperlinks that span multiple lines, tooltips will be centered. Use white-space: nowrap; on your <code>&lt;a&gt;</code>s, <code>&lt;b-link&gt;</code>s and <code>&lt;router-link&gt;</code>s to avoid this behavior.</li>\n<li>Tooltips must be hidden before their corresponding elements have been removed from the DOM.</li>\n</ul>\n<h2 id="positioning">Positioning</h2>\n<p>Twelve options are available for positioning: <code>top</code>, <code>topleft</code>, <code>topright</code>, <code>right</code>, <code>righttop</code>,\n<code>rightbottom</code>, <code>bottom</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>left</code>, <code>lefttop</code>, and <code>leftbottom</code> aligned.\nThe default position is <code>top</code>. Positioning is relative to the trigger element.</p>\n<div class="bd-example bd-example-tooltip-static">\n  <div class="tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">\n    <div class="arrow"></div>\n    <div class="tooltip-inner">\n      Tooltip on the top\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">\n    <div class="arrow" style="left:93%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the topleft\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-top bs-tooltip-top-docs" role="tooltip">\n    <div class="arrow" style="left:5%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the topright\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">\n    <div class="arrow"></div>\n    <div class="tooltip-inner">\n      Tooltip on the right\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">\n    <div class="arrow" style="top:60%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the righttop\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-right bs-tooltip-right-docs" role="tooltip">\n    <div class="arrow" style="top:26%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the rightbottom\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">\n    <div class="arrow"></div>\n    <div class="tooltip-inner">\n      Tooltip on the bottom\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">\n    <div class="arrow" style="left:93%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the bottomleft\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs" role="tooltip">\n    <div class="arrow" style="left:5%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the bottomright\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">\n    <div class="arrow"></div>\n    <div class="tooltip-inner">\n      Tooltip on the left\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">\n    <div class="arrow" style="top:60%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the lefttop\n    </div>\n  </div>\n  <div class="tooltip bs-tooltip-left bs-tooltip-left-docs" role="tooltip">\n    <div class="arrow" style="top:26%"></div>\n    <div class="tooltip-inner">\n      Tooltip on the leftbottom\n    </div>\n  </div>\n</div>\n\n<p><strong>Live example</strong></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover.top</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Top<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover.right</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover.left</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover.bottom</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tooltip-positioning.vue --&gt;</span>\n</pre>\n<h2 id="triggers">Triggers</h2>\n<p>Tooltips can be triggered (opened/closed) via any combination of <code>click</code>, <code>hover</code> and\n<code>focus</code>. The default trigger is <code>hover focus</code>.</p>\n<p>If a tooltip has more than one trigger, then all triggers must be cleared before the\ntooltip will close. I.e. if a tooltip has the trigger <code>focus click</code>, and it was opened by\n<code>focus</code>, and the user then clicks the trigger element, they must click it again <strong>and</strong>\nmove focus to close the tooltip.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-container</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Hover + Focus<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Hover<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.click</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Click<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.focus</span>=<span class="hljs-string">&quot;&apos;ToolTip!&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline-success&quot;</span>&gt;</span>Focus<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tooltip-triggers.vue --&gt;</span>\n</pre>\n<h3 id="dismiss-on-next-click">Dismiss on next click</h3>\n<p>Use both <code>click</code> and <code>blur</code> if you would like a tooltip that opens only on click of\nthe element, but will close when anything else in the document is clicked or\nreceives focus.</p>\n<p>Note that your elment <strong>must</strong> be in the document tab sequence for this to work. If\nyour element is not tabable, add the <code>tabindex=&quot;0&quot;</code> attribute to the element.</p>\n<h2 id="title-content">Title content</h2>\n<p>There are seveal options for providing the title of a tooltip.</p>\n<p>By default, tooltip will ue the <code>title</code> attribute of the element as the\ntooltip content. The title can also be passed as an object to <code>v-b-tooltip</code> in the form of</p>\n<pre class="hljs">{\n   <span class="hljs-attr">title</span>: <span class="hljs-string">&apos;This is the title&apos;</span>,\n}\n</pre>\n<p>If your title content has basic HTML markup, then you will also need to set the <code>html</code>\nproperty to true, or use the diretive modifier <code>html</code></p>\n<pre class="hljs"><span class="hljs-comment">// Object format with HTML:</span>\n{\n   <span class="hljs-attr">title</span>: <span class="hljs-string">&apos;This is the &lt;string&gt;title&lt;/strong&gt;&apos;</span>,\n   <span class="hljs-attr">html</span>: <span class="hljs-literal">true</span>\n}\n</pre>\n<p>Title can also be a function reference, which is called each time the tooltip is opened.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-container</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-center&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tip from title attribute&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover</span>=<span class="hljs-string">&quot;&apos;String Tip&apos;&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>String<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover.html</span>=<span class="hljs-string">&quot;tipData&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Data<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">md</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;py-3&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">v-b-tooltip.hover.html</span>=<span class="hljs-string">&quot;tipMethod&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Method<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  data () {\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">tipData</span>: <span class="hljs-string">&apos;Tooltip &lt;em&gt;Message&lt;/em&gt;&apos;</span>\n    }\n  },\n  <span class="hljs-attr">methods</span>: {\n    tipMethod () {\n      <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;&lt;strong&gt;&apos;</span> + <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>() + <span class="hljs-string">&apos;&lt;/string&gt;&apos;</span>\n    }\n  }\n}\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- tooltip-content.vue --&gt;</span>\n</pre>\n<h2 id="directive-syntax-and-usage">Directive syntax and usage</h2>\n<pre class="hljs">v-b-tooltip:<span class="hljs-string">[container]</span>.<span class="hljs-string">[mod1]</span>.<span class="hljs-string">[mod2]</span>.<span class="hljs-string">[...]</span>.<span class="hljs-string">[modN]</span>=<span class="hljs-string">&quot;&lt;value&gt;&quot;</span>\n</pre><p>Where [container] can be (optional)</p>\n<ul>\n<li>An element ID (minus the #) to place the tooltip markup in</li>\n<li>If not provided, tooltips are appended to the <code>body</code>. If the trigger element is inside a modal, the tooltip will be appended to the modal&apos;s container</li>\n</ul>\n<p>Where [modX] can be (all optional):</p>\n<ul>\n<li>Positioning: <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, <code>auto</code>, <code>topleft</code>, <code>topright</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>lefttop</code>, <code>leftbottom</code>, <code>righttop</code>, or <code>rightbottom</code> (last one found wins, defaults to <code>top</code>)</li>\n<li>Event trigger: <code>click</code>, <code>hover</code>, <code>focus</code>, <code>blur</code> (if none specified, defaults to <code>focus</code> and <code>hover</code>. <code>blur</code> is a close handler only, and if specified by itself, will be converted to <code>focus</code>)</li>\n<li><code>nofade</code> to turn off animation</li>\n<li><code>html</code> to enable rendering raw HTML. by default HTML is escaped and converted to text</li>\n<li>A delay value in the format of <code>d###</code> (where <code>###</code> is in ms, defaults to 0);</li>\n<li>An offset value in pixels in the format of <code>o###</code> (where <code>###</code> is the number of pixels, defaults to 0. Negative values allowed)</li>\n<li>A boundary setting of <code>window</code> or <code>viewport</code>.  The element to constrain the visual placement of the tooltip. If not specified, the boundary defaults to the trigger element&apos;s scroll parent (in most cases this will suffice).</li>\n</ul>\n<p>Where <code>&lt;value&gt;</code> can be (optional):</p>\n<ul>\n<li>A string containing the title of the tooltip</li>\n<li>A function reference to generate the title of the tooltip (receives one arg which is a reference to the DOM element triggering the tooltip)</li>\n<li>An object containing more complex configuration of tooltip, See below for accepted object properties:</li>\n</ul>\n<p><strong>Options configuration object properties:</strong></p>\n<table class="table b-table table-sm table-striped">\n<thead class="thead-default">\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>animation</code></td>\n<td>boolean</td>\n<td><code>true</code></td>\n<td>Apply a CSS fade transition to the tooltip</td>\n</tr>\n<tr>\n<td><code>container</code></td>\n<td>string or Element or <code>false</code></td>\n<td><code>false</code></td>\n<td>Appends the tooltip to a specific element. Example: <code>container: &apos;body&apos;</code>. This option is particularly useful in that it allows you to position the tooltip in the flow of the document near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize. When set to <code>false</code> the tooltip will be appended to <code>body</code>, or if the trigger element is inside a modal it will append to the modal&apos;s container.</td>\n</tr>\n<tr>\n<td><code>delay</code></td>\n<td>Number or Object</td>\n<td><code>0</code></td>\n<td>Delay showing and hiding the tooltip (ms). If a number is supplied, delay is applied to both hide/show. Object structure is: <code>delay: { &quot;show&quot;: 500, &quot;hide&quot;: 100 }</code></td>\n</tr>\n<tr>\n<td><code>html</code></td>\n<td>Boolean</td>\n<td><code>false</code></td>\n<td>Allow HTML in the tooltip. If true, HTML tags in the tooltip&apos;s title will be rendered in the tooltip. If false, the titkle will be inserted as plain text. Use text if you&apos;re worried about XSS attacks.</td>\n</tr>\n<tr>\n<td><code>placement</code></td>\n<td>String or Function</td>\n<td><code>&apos;top&apos;</code></td>\n<td>How to position the tooltip - <code>auto</code>, <code>top</code>, <code>bottom</code>, <code>left</code>, <code>right</code>, <code>topleft</code>, <code>topright</code>, <code>bottomleft</code>, <code>bottomright</code>, <code>lefttop</code>, <code>leftbottom</code>, <code>righttop</code>, or <code>rightbottom</code>. When <code>auto</code> is specified, it will dynamically reorient the tooltip.</td>\n</tr>\n<tr>\n<td><code>template</code></td>\n<td>String</td>\n<td><code>&apos;&lt;div class=&quot;tooltip&quot; role=&quot;tooltip&quot;&gt; &lt;div class=&quot;arrow&quot;&gt;&lt;/div&gt; &lt;div class=&quot;tooltip-inner&quot;&gt;&lt;/div&gt; &lt;/div&gt;&apos;</code></td>\n<td>Base HTML to use when creating the tooltip. The tooltip&apos;s title will be injected into the <code>.tooltip-inner</code>, while <code>.arrow</code> will become the tooltip&apos;s arrow. The outermost wrapper element should have the <code>.tooltip</code> class.</td>\n</tr>\n<tr>\n<td><code>title</code></td>\n<td>String or Element or function</td>\n<td><code>&apos;&apos;</code></td>\n<td>Default title value if title attribute isn&apos;t present. If a function is given, it must return a string.</td>\n</tr>\n<tr>\n<td><code>trigger</code></td>\n<td>String</td>\n<td><code>&apos;hover focus&apos;</code></td>\n<td>How tooltip is triggered: <code>click</code>, <code>hover</code>, <code>focus</code>. You may pass multiple triggers; separate them with a space.</td>\n</tr>\n<tr>\n<td><code>offset</code></td>\n<td>Number or String</td>\n<td><code>0</code></td>\n<td>Offset of the tooltip relative to its target. For more information refer to Popper.js&apos;s offset docs.</td>\n</tr>\n<tr>\n<td><code>fallbackPlacement</code></td>\n<td>String or Array</td>\n<td><code>&apos;flip&apos;</code></td>\n<td>Allow to specify which position Popper will use on fallback. For more information refer to Popper.js&apos;s behavior docs</td>\n</tr>\n<tr>\n<td><code>boundary</code></td>\n<td>String or HTMLElement reference</td>\n<td><code>&apos;scrollParent&apos;</code></td>\n<td>The container that the tooltip will be constrained visually. The default should suffice in most cases, but you may need to chagne this if your target element is in a small container with overflow scroll. Supported values: <code>&apos;scrollParent&apos;</code> (default), <code>&apos;viewport&apos;</code>, <code>&apos;window&apos;</code>, or a reference to an HTML element.</td>\n</tr>\n</tbody>\n</table>\n<h3 id="usage">Usage</h3>\n<p><strong>Simplest usage:</strong></p>\n<pre class="hljs"><span class="hljs-attr">v-b-tooltip</span>=<span class="hljs-string">&quot;&apos;This is a Tooltip!&apos;&quot;</span>\n</pre><p>or use the element&apos;s <code>title</code> attribute for the tooltip content:</p>\n<pre class="hljs">v-<span class="hljs-keyword">b-tooltip </span>title=<span class="hljs-string">&quot;This is a title Tooltip&quot;</span>\n</pre><p><strong>Placement examples:</strong></p>\n<pre class="hljs">v-b-tooltip<span class="hljs-selector-class">.bottom</span>\nv-b-tooltip<span class="hljs-selector-class">.right</span>\n</pre><p><strong>Trigger examples:</strong></p>\n<pre class="hljs">v-b-tooltip<span class="hljs-selector-class">.hover</span>  =&gt; Hover only\nv-b-tooltip<span class="hljs-selector-class">.click</span>  =&gt; Click only\nv-b-tooltip<span class="hljs-selector-class">.hover</span><span class="hljs-selector-class">.focus</span> =&gt; Both hover and focus\n</pre><p><strong>Combo:</strong></p>\n<pre class="hljs">v-b-tooltip.hover.<span class="hljs-built_in">bottom</span>  =&gt; <span class="hljs-keyword">Show</span> on hover and place <span class="hljs-built_in">at</span> <span class="hljs-built_in">bottom</span>\nv-b-tooltip.<span class="hljs-built_in">bottom</span>.hover  =&gt; Same <span class="hljs-built_in">as</span> above\n</pre><p><strong>Object:</strong></p>\n<pre class="hljs"><span class="hljs-attr">v-b-tooltip</span>=<span class="hljs-string">&quot;{title: &apos;Title&apos;, placement: &apos;bottom&apos;}&quot;</span>\n</pre><h2 id="hiding-and-showing-tooltips-via-root-events">Hiding and showing tooltips via $root events</h2>\n<p>You can close (hide) <strong>all open tooltips</strong> by emitting the <code>bv::hide::tooltip</code> event on $root:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::hide::tooltip&apos;</span>);\n</pre>\n<p>To close a <strong>specific tooltip</strong>, pass the trigger element&apos;s <code>id</code> as the first argument:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::show::tooltip&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To open a <strong>specific tooltip</strong>, pass the trigger element&apos;s <code>id</code> as the first argument when\nemitting the <code>bv::show::tooltip</code> $root event:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::show::tooltip&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To open all popovers simultaneously, omit the <code>id</code> argument when emitting the\n<code>bv::show::tooltip</code> event.</p>\n<p>These events work for both the component <strong>and</strong> directive versions of tooltip.</p>\n<p>Note the <strong>trigger element</strong> must exist in the DOM and be in a visible state in order\nfor the tooltip to show.</p>\n<h2 id="disabling-and-enabling-tooltips-via-root-events">Disabling and enabling tooltips via $root events</h2>\n<p>You can disable <strong>all open tooltips</strong> by emitting the <code>bv::disable::tooltip</code> event on $root:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::disable::tooltip&apos;</span>);\n</pre>\n<p>To disable a <strong>specific tooltip</strong>, pass the trigger element&apos;s <code>id</code> as the first argument:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::disable::tooltip&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To enable a <strong>specific tooltip</strong>, pass the trigger element&apos;s <code>id</code> as the first argument when\nemitting the <code>bv::enable::tooltip</code> $root event:</p>\n<pre class="hljs"><span class="hljs-keyword">this</span>.$root.$emit(<span class="hljs-string">&apos;bv::enable::tooltip&apos;</span>, <span class="hljs-string">&apos;my-trigger-button-id&apos;</span>);\n</pre>\n<p>To enable all popovers simultaneously, omit the <code>id</code> argument when emitting the\n<code>bv::enable::tooltip</code> event.</p>\n<p>These events work for both the component <strong>and</strong> directive versions of tooltip.</p>\n<p>Note the <strong>trigger element</strong> must exist in the DOM in order for the\ntooltip to be enabled or disabled.</p>\n<h2 id="see-also">See also</h2>\n<ul>\n<li><a href="/docs/directives/popover"><code>v-b-popover</code> directive</a></li>\n<li><a href="/docs/components/tooltip"><code>&lt;b-tooltip&gt;</code> component</a></li>\n<li><a href="/docs/components/popover"><code>&lt;b-popover&gt;</code> component</a></li>\n</ul>\n<h2 id="directive-reference">Directive reference</h2>\n'}}]);