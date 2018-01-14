webpackJsonp([37],{"8bDH":function(s,a){s.exports='<h1 id="input-groups">Input Groups</h1>\n<blockquote>\n<p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.</p>\n</blockquote>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">left</span>=<span class="hljs-string">&quot;$&quot;</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;.00&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">left</span>=<span class="hljs-string">&quot;$&quot;</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;.00&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-comment">&lt;!-- Add-ons --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">strong</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-danger&quot;</span>&gt;</span>!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n      Username\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Main form input --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n\n    <span class="hljs-comment">&lt;!-- Attach Right button Group via slot --&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Dropdown&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">right</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-groups-1.vue --&gt;</span>\n</pre>\n<h2 id="usage">Usage</h2>\n<p>You can attach left or right Addons via props or named slots</p>\n<h3 id="via-left-and-right-props-">Via <code>left</code> and <code>right</code> props:</h3>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">left</span>=<span class="hljs-string">&quot;$&quot;</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;.00&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-addons-props.vue --&gt;</span>\n</pre>\n<h3 id="via-named-slots-">Via named slots:</h3>\n<p>if you want better control over addons, you can use <code>right</code> and <code>left</code> slots instead:</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">left</span>=<span class="hljs-string">&quot;Username&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Dropdown&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action A<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action B<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-addons-slots.vue --&gt;</span>\n</pre>\n<h3 id="direct-placement-of-sub-components-">Direct placement of sub components:</h3>\n<p>Use the <code>&lt;b-input-group-addon&gt;</code> to add arbitrary addons wherever you like, and use\nthe <code>&lt;b-input-group-button&gt;</code> component to group buttons in your input group. Single\nbuttons must always be wrapped in a <code>&lt;b-input-group-button&gt;</code> for proper styling</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0.00&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">b-form-input</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>.00<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-btn</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Buy Now<span class="hljs-tag">&lt;/<span class="hljs-name">b-btn</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-addons-placement.vue --&gt;</span>\n</pre>\n<h2 id="checkbox-and-radio-addons">Checkbox and radio addons</h2>\n<p>Place any native checkbox or radio within an input group&#x2019;s addon instead of text.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Checkbox for following text input&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Text input with checkbox&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Radio button for following text input&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Text input with radio button&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-checks-radios.vue --&gt;</span>\n</pre>\n<p><strong>Note:</strong> you must use native radio and checkbox inputs, as <code>&lt;b-form-radio&gt;</code> and\n<code>&lt;b-form-checkbox&gt;</code> include additional markup not required in input groups.</p>\n<h2 id="multiple-addons">Multiple addons</h2>\n<p>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Checkbox for following text input&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Text input with checkbox&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>0.00<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Text input multiple addons&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-multiple.vue --&gt;</span>\n</pre>\n<h2 id="button-addons">Button addons</h2>\n<p>Buttons in input groups must wrapped in a <code>&lt;b-input-group-button&gt;</code> for proper alignment\nand sizing. This is required due to default browser styles that cannot be overridden.\nMultiple buttons can be placed inside a single <code>&lt;b-input-group-button&gt;</code>.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">b-container</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Go!<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Search for...&quot;</span> /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Search for...&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Go!<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-row</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Love It<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Product&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Hate It<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-col</span> <span class="hljs-attr">lg</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Product&quot;</span> /&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Add<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Remove<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-row</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">b-container</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-buttons.vue --&gt;</span>\n</pre>\n<h2 id="addons-with-dropdowns">Addons with dropdowns</h2>\n<p>Dropdowns, like buttons, must be placed inside a <code>&lt;b-input-group-button&gt;</code></p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Produt&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Dropdown&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action A<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action B<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-dropdowns.vue --&gt;</span>\n</pre>\n<h2 id="control-sizing">Control sizing</h2>\n<p>Set height using the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large respectively. There\nis no need to set size on the individual inputs or buttons. Note however, you will be\nrequired to also set the size on dropdowns.</p>\n<p>To control width, place the input inside standard Bootstrap grid column.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Dropdown&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action A<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">b-dropdown-item</span>&gt;</span>Action B<span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown-item</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">b-dropdown</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-addon</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-addon</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-form-input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">b-input-group-button</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">b-button</span>&gt;</span>Button<span class="hljs-tag">&lt;/<span class="hljs-name">b-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">b-input-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- input-group-size.vue --&gt;</span>\n</pre>\n<h2 id="contextual-states">Contextual states</h2>\n<p>Bootstrap V4.beta currently <strong>does not</strong> support contextual state (i.e. valid or invalid) on\ninput groups.</p>\n<h2 id="related-sub-components">Related sub-components</h2>\n<ul>\n<li><code>&lt;b-input-group-addon&gt;</code></li>\n<li><code>&lt;b-input-group-button&gt;</code></li>\n</ul>\n<h2 id="component-aliases">Component aliases</h2>\n<ul>\n<li><code>&lt;b-input-group-button&gt;</code> can also be used by the shorthand alias <code>&lt;b-input-group-btn&gt;</code></li>\n</ul>\n<h2 id="component-reference">Component Reference</h2>\n'}});
//# sourceMappingURL=components20.0ef648a0d0f0c019d8ed.js.map