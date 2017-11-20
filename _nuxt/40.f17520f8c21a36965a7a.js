webpackJsonp([40],{qvLQ:function(s,a){s.exports="<h1 id=form-textarea>Form textarea</h1> <blockquote> <p>Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states.</p> </blockquote> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>div</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;textarea1&quot;</span>\n                     <span class=hljs-attr>v-model</span>=<span class=hljs-string>&quot;text&quot;</span>\n                     <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter something&quot;</span>\n                     <span class=hljs-attr>:rows</span>=<span class=hljs-string>&quot;3&quot;</span>\n                     <span class=hljs-attr>:max-rows</span>=<span class=hljs-string>&quot;6&quot;</span>&gt;</span>\n    <span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>pre</span> <span class=hljs-attr>class</span>=<span class=hljs-string>&quot;mt-3&quot;</span>&gt;</span>{{ text }}<span class=hljs-tag>&lt;/<span class=hljs-name>pre</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>div</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  data () {\n    <span class=hljs-keyword>return</span> {\n      <span class=hljs-attr>text</span>: <span class=hljs-string>&apos;&apos;</span>\n    }\n  }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-textarea-1.vue --&gt;</span>\n</pre> <h2 id=displayed-rows>Displayed rows</h2> <p><code>&lt;b-form-textarea&gt;</code> automaticlly adjusts its height (text rows) to fit the content, even as the user enters text. For a textarea with no content, the number of rows starts at <code>1</code>.</p> <p>To set the initial minimum height (in rows), set the <code>rows</code> prop to the desired number of lines. If no value is provided to <code>rows</code>, then it will default to <code>1</code>.</p> <p>To limit the maximum rows that the text area will grow to (before showing a scrollbar), set the <code>max-rows</code> prop to the maximum number of lines of text.</p> <p>To keep the text-area at a set height, set both <code>rows</code> and <code>max-rows</code> to the same value.</p> <p><strong>Note:</strong> auto rows will only work when the user explicitly enters newlines in the textarea.</p> <h3 id=disable-resize>Disable resize</h3> <p>Note that some web browsers will allow the user to re-size the hight of the textarea. To disable this, set the <code>no-resize</code> prop to <code>true</code>.</p> <h2 id=contextual-states>Contextual states</h2> <p>Bootstrap includes validation styles for <code>valid</code> and <code>invalid</code> states on most form controls.</p> <p>Generally speaking, you&#x2019;ll want to use a particular state for specific types of feedback:</p> <ul> <li><code>&apos;invalid&apos;</code> (or <code>false</code>) is great for when there&#x2019;s a blocking or required field. A user must fill in this field properly to submit the form.</li> <li><code>&apos;valid&apos;</code> (or <code>true</code>) is ideal for situations when you have per-field validation throughout a form and want to encourage a user through the rest of the fields.</li> <li><code>null</code> Displays no validation state</li> </ul> <p>To apply one of the contextual state icons on <code>&lt;b-form-textarea&gt;</code>, set the <code>state</code> prop to:</p> <ul> <li><code>&apos;invalid&apos;</code> or <code>false</code> to apply invalid styling)</li> <li><code>&apos;valid&apos;</code> or <code>true</code> to apply valid highlighting,</li> <li><code>null</code> for no validation contextual state</li> </ul> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;textarea2&quot;</span>\n                   <span class=hljs-attr>state</span>=<span class=hljs-string>&quot;invalid&quot;</span>\n                   <span class=hljs-attr>v-model.trim</span>=<span class=hljs-string>&quot;text&quot;</span>\n                   <span class=hljs-attr>placeholder</span>=<span class=hljs-string>&quot;Enter something&quot;</span>\n                   <span class=hljs-attr>:rows</span>=<span class=hljs-string>&quot;3&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  data () {\n    <span class=hljs-keyword>return</span> {\n      <span class=hljs-attr>text</span>: <span class=hljs-string>&apos;&apos;</span>\n    }\n  }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-textarea-state.vue --&gt;</span>\n</pre> <h3 id=conveying-contextual-state-to-assistive-technologies-and-colorblind-users>Conveying contextual state to assistive technologies and colorblind users</h3> <p>Using these contextual states to denote the state of a form control only provides a visual, color-based indication, which will not be conveyed to users of assistive technologies - such as screen readers - or to colorblind users.</p> <p>Ensure that an alternative indication of state is also provided. For instance, you could include a hint about state in the form control&apos;s <code>&lt;label&gt;</code> text itself, or by providing an additional help text block.</p> <h3 id=aria-aria-invalid-attribute>ARIA <code>aria-invalid</code> attribute</h3> <p>When <code>&lt;b-form-textarea&gt;</code> has an invalid contextual state (i.e. <code>&apos;invalid&apos;</code> or <code>false</code>) you may also want to set the prop <code>aria-invalid</code> to <code>true</code>, or one of hte supported values:</p> <ul> <li><code>false</code>: No errors detected (default)</li> <li><code>true</code> or <code>&apos;true&apos;</code>: The value has failed validation.</li> <li><code>&apos;grammar&apos;</code>: A grammatical error has been detected.</li> <li><code>&apos;spelling&apos;</code> A spelling error has been detected.</li> </ul> <p>If the <code>state</code> prop is set to <code>false</code> (or <code>&apos;invalid&apos;</code>), and the <code>aria-invalid</code> prop is not explicity set, <code>&lt;b-form-textarea&gt;</code> will automatically set the <code>aria-invalid</code> attribute to <code>&apos;true&apos;</code>.</p> <h2 id=readonly-plain-text>Readonly plain text</h2> <p>If you want to have <code>&lt;b-form-textarea readonly&gt;</code> elements in your form styled as plain text, set the <code>plaintext</code> prop (no need to set <code>readonly</code>) to remove the default form field styling and preserve the correct margin and padding and height.</p> <pre class=hljs><span class=hljs-tag>&lt;<span class=hljs-name>template</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>b-form-textarea</span> <span class=hljs-attr>id</span>=<span class=hljs-string>&quot;textarea3&quot;</span> <span class=hljs-attr>plaintext</span> <span class=hljs-attr>:value</span>=<span class=hljs-string>&quot;text&quot;</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>b-form-textarea</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>template</span>&gt;</span>\n\n<span class=hljs-tag>&lt;<span class=hljs-name>script</span>&gt;</span><span class=javascript>\n<span class=hljs-keyword>export</span> <span class=hljs-keyword>default</span> {\n  data () {\n    <span class=hljs-keyword>return</span> {\n      <span class=hljs-attr>text</span>: <span class=hljs-string>&apos;This is some text.\\nIt is read only and doesn\\&apos;t look like an input.&apos;</span>\n    }\n  }\n}\n</span><span class=hljs-tag>&lt;/<span class=hljs-name>script</span>&gt;</span>\n\n<span class=hljs-comment>&lt;!-- form-textarea-plaintext.vue --&gt;</span>\n</pre> <h2 id=component-alias>Component alias</h2> <p>You can use <code>&lt;b-form-textarea&gt;</code> by it&apos;s shorter alias <code>&lt;b-textarea&gt;</code>.</p> <h2 id=component-reference>Component reference</h2> "}});
//# sourceMappingURL=40.f17520f8c21a36965a7a.js.map