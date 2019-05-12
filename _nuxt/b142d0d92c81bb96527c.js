(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{516:function(n,l){n.exports='<h1 id="alerts"><span class="bd-content-title">Alerts</span></h1>\n<p class="bd-lead">Provide contextual feedback messages for typical user actions with the handful of available and\nflexible alert messages.</p>\n<p>Alerts are available for any length of text, as well as an optional dismiss button (and optional\nauto-dismissing).</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span>&gt;</span>Default Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">show</span>&gt;</span>Success Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"showDismissibleAlert"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">dismissible</span>&gt;</span>\n      Dismissible Alert!\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span>\n      <span class="hljs-attr">:show</span>=<span class="hljs-string">"dismissCountDown"</span>\n      <span class="hljs-attr">dismissible</span>\n      <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>\n      @<span class="hljs-attr">dismissed</span>=<span class="hljs-string">"dismissCountDown=0"</span>\n      @<span class="hljs-attr">dismiss-count-down</span>=<span class="hljs-string">"countDownChanged"</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>This alert will dismiss after {{ dismissCountDown }} seconds...<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-progress</span>\n        <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>\n        <span class="hljs-attr">:max</span>=<span class="hljs-string">"dismissSecs"</span>\n        <span class="hljs-attr">:value</span>=<span class="hljs-string">"dismissCountDown"</span>\n        <span class="hljs-attr">height</span>=<span class="hljs-string">"4px"</span>\n      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-progress</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"showAlert"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>\n      Show alert with count-down timer\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"showDismissibleAlert=true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>\n      Show dismissible alert ({{ showDismissibleAlert ? \'visible\' : \'hidden\' }})\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">dismissSecs</span>: <span class="hljs-number">10</span>,\n        <span class="hljs-attr">dismissCountDown</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">showDismissibleAlert</span>: <span class="hljs-literal">false</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      countDownChanged(dismissCountDown) {\n        <span class="hljs-keyword">this</span>.dismissCountDown = dismissCountDown\n      },\n      showAlert() {\n        <span class="hljs-keyword">this</span>.dismissCountDown = <span class="hljs-keyword">this</span>.dismissSecs\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-alert.vue --&gt;</span></pre><h2 id="visible-state"><span class="bd-content-title">Visible state<a class="anchorjs-link" href="#visible-state" aria-label="Anchor"></a></span></h2>\n<p>Use the <code>show</code> prop to control the visibility state of the alert. By default alerts are <strong>not</strong>\nshown. Set the prop <code>show</code> to explicitly display them.</p>\n<p>The <code>show</code> prop accepts boolean <code>true</code> or <code>false</code> to show and hide the alert respectively. It can\nalso be set to a positive integer (representing seconds) to create a self dismissing alert. See the\n<a href="#auto-dismissing-alerts">Auto Dismissing Alerts</a> section below for details.</p>\n<h3 id="v-model-support"><span class="bd-content-title"><code>v-model</code> support<a class="anchorjs-link" href="#v-model-support" aria-label="Anchor"></a></span></h3>\n<p>You can use the <code>v-model</code> directive to create two-way data bindings on the <code>show</code> prop as in\n<code>v-model=&quot;showDismissibleAlert&quot;</code> above. Useful when you use dismissible because when user closes the\nalert, your variable will be updated. Do not use the <code>show</code> prop when using <code>v-model</code>.</p>\n<h2 id="contextual-variants"><span class="bd-content-title">Contextual variants<a class="anchorjs-link" href="#contextual-variants" aria-label="Anchor"></a></span></h2>\n<p>For proper styling of <code>&lt;b-alert&gt;</code>, use one of the four required contextual variants by setting the\n<code>variant</code> prop to one of the following: <code>info</code>, <code>success</code>, <code>warning</code> or <code>danger</code>. The default is\n<code>info</code>.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span>Primary Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"secondary"</span>&gt;</span>Secondary Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>Success Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span>Danger Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>&gt;</span>Warning Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span>Info Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span>Light Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"dark"</span>&gt;</span>Dark Alert<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-alert-variants.vue --&gt;</span></pre><h3 id="conveying-meaning-to-assistive-technologies"><span class="bd-content-title">Conveying meaning to assistive technologies<a class="anchorjs-link" href="#conveying-meaning-to-assistive-technologies" aria-label="Anchor"></a></span></h3>\n<p>Using color variants to add meaning only provides a visual indication, which will not be conveyed to\nusers of assistive technologies – such as screen readers. Ensure that information denoted by the\ncolor is either obvious from the content itself (e.g. the visible text), or is included through\nalternative means, such as additional text hidden with the <code>.sr-only</code> class.</p>\n<h2 id="additional-content-inside-alerts"><span class="bd-content-title">Additional content inside alerts<a class="anchorjs-link" href="#additional-content-inside-alerts" aria-label="Anchor"></a></span></h2>\n<p><code>&lt;b-alerts&gt;</code> can also contain additional HTML elements like headings and paragraphs, which will be\nstyled with the appropriate color matching the variant.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-heading"</span>&gt;</span>Well done!<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n      Aww yeah, you successfully read this important alert message. This example text is going to\n      run a bit longer so that you can see how spacing within an alert works with this kind of\n      content.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mb-0"</span>&gt;</span>\n      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.\n    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-alert-content.vue --&gt;</span></pre><h3 id="color-of-links-within-alerts"><span class="bd-content-title">Color of links within alerts<a class="anchorjs-link" href="#color-of-links-within-alerts" aria-label="Anchor"></a></span></h3>\n<p>Use the <code>.alert-link</code> utility CSS class to quickly provide matching colored links within any alert.\nUse on <code>&lt;a&gt;</code> or <code>&lt;b-link&gt;</code>.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"primary"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Primary Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"secondary"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Secondary Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Success Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Danger Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Warning Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Info Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"light"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Light Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"dark"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"alert-link"</span>&gt;</span>Dark Alert<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-alert-links.vue --&gt;</span></pre><h2 id="dismissible-alerts"><span class="bd-content-title">Dismissible alerts<a class="anchorjs-link" href="#dismissible-alerts" aria-label="Anchor"></a></span></h2>\n<p>Using the <code>dismissible</code> prop it&#39;s possible to dismiss any <code>&lt;b-alert&gt;</code> inline. This will add a close\n<code>X</code> button. Use the <code>dismiss-label</code> prop to change the hidden label text associated with the dismiss\nbutton.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">dismissible</span>&gt;</span>\n    Dismissible Alert! Click the close button over there <span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span>&amp;rArr;<span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-alert-dismiss.vue --&gt;</span></pre><h3 id="auto-dismissing-alerts"><span class="bd-content-title">Auto dismissing alerts<a class="anchorjs-link" href="#auto-dismissing-alerts" aria-label="Anchor"></a></span></h3>\n<p>To create a <code>&lt;b-alert&gt;</code> that dismisses automatically after a period of time, set the <code>show</code> prop (or\nthe <code>v-model</code>) to the number of seconds you would like the <code>&lt;b-alert&gt;</code> to remain visible for. Only\ninteger number of seconds are supported.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span>\n      <span class="hljs-attr">:show</span>=<span class="hljs-string">"dismissCountDown"</span>\n      <span class="hljs-attr">dismissible</span>\n      <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>\n      @<span class="hljs-attr">dismissed</span>=<span class="hljs-string">"dismissCountDown=0"</span>\n      @<span class="hljs-attr">dismiss-count-down</span>=<span class="hljs-string">"countDownChanged"</span>\n    &gt;</span>\n      This alert will dismiss after {{ dismissCountDown }} seconds...\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"showAlert"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>\n      Show alert with count-down timer\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">dismissSecs</span>: <span class="hljs-number">5</span>,\n        <span class="hljs-attr">dismissCountDown</span>: <span class="hljs-number">0</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      countDownChanged(dismissCountDown) {\n        <span class="hljs-keyword">this</span>.dismissCountDown = dismissCountDown\n      },\n      showAlert() {\n        <span class="hljs-keyword">this</span>.dismissCountDown = <span class="hljs-keyword">this</span>.dismissSecs\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-alert-auto-dismissing.vue --&gt;</span></pre><h2 id="fading-alerts"><span class="bd-content-title">Fading alerts<a class="anchorjs-link" href="#fading-alerts" aria-label="Anchor"></a></span></h2>\n<p>Use the <code>fade</code> prop to enable animation. By default alerts are not animated.</p>\n<pre class="hljs html text-monospace p-2"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span> <span class="hljs-attr">show</span> <span class="hljs-attr">dismissible</span> <span class="hljs-attr">fade</span>&gt;</span>Dismissible Alert!<span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span>\n      <span class="hljs-attr">variant</span>=<span class="hljs-string">"danger"</span>\n      <span class="hljs-attr">dismissible</span>\n      <span class="hljs-attr">fade</span>\n      <span class="hljs-attr">:show</span>=<span class="hljs-string">"showDismissibleAlert"</span>\n      @<span class="hljs-attr">dismissed</span>=<span class="hljs-string">"showDismissibleAlert=false"</span>\n    &gt;</span>\n      Dismissible Alert!\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-alert</span>\n      <span class="hljs-attr">:show</span>=<span class="hljs-string">"dismissCountDown"</span>\n      <span class="hljs-attr">dismissible</span>\n      <span class="hljs-attr">fade</span>\n      <span class="hljs-attr">variant</span>=<span class="hljs-string">"warning"</span>\n      @<span class="hljs-attr">dismiss-count-down</span>=<span class="hljs-string">"countDownChanged"</span>\n    &gt;</span>\n      This alert will dismiss after {{ dismissCountDown }} seconds...\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-alert</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"showAlert"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>\n      Show alert with count-down timer\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"showDismissibleAlert=true"</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"m-1"</span>&gt;</span>\n      Show dismissible alert ({{ showDismissibleAlert ? \'visible\' : \'hidden\' }})\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    data() {\n      <span class="hljs-keyword">return</span> {\n        <span class="hljs-attr">dismissSecs</span>: <span class="hljs-number">5</span>,\n        <span class="hljs-attr">dismissCountDown</span>: <span class="hljs-number">0</span>,\n        <span class="hljs-attr">showDismissibleAlert</span>: <span class="hljs-literal">false</span>\n      }\n    },\n    <span class="hljs-attr">methods</span>: {\n      countDownChanged(dismissCountDown) {\n        <span class="hljs-keyword">this</span>.dismissCountDown = dismissCountDown\n      },\n      showAlert() {\n        <span class="hljs-keyword">this</span>.dismissCountDown = <span class="hljs-keyword">this</span>.dismissSecs\n      }\n    }\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- b-alert-fade.vue --&gt;</span></pre>\x3c!-- Component reference added automatically from component package.json --\x3e\n'}}]);
//# sourceMappingURL=b142d0d92c81bb96527c.js.map