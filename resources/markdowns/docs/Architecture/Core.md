# The Core Layer

<p class="lead">Starting at the beginning</p>

The set of features provided by the first layer of the Chameleon architecture make up all the adaptation primitives that the framework uses natively. Strictly speaking, there is nothing in this API that cannot be done directly through the use of language capabilities. All that is included here is sugary syntax to make the adaptive logic writing process more comfortable and productive.

Features on this layer have not been conceived to be directly used by developers. Instead, any kind of adaptive activity must be carried out by features in the other layers. The set of capabilities presented here is intended to be used internally by the framework.

Given that Chameleon is oriented to support the component architectures on the Web platform, the set of API capabilities on this layer are arranged in 4 groups of functionality. Each of these functionality groups are related with different parts of the component's contracts susceptible to be transformed.

<table>
  <tr>
    <th>Section</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Type</td>
    <td>Primitives to operate with the JS parts of the component</td>
  </tr>
  <tr>
    <td>Dom</td>
    <td>Primitives to operate the DOM parts of the component</td>
  </tr>
  <tr>
    <td>Reactive</td>
    <td>Primitives to operate with events & observers</td>
  </tr>
  <tr>
    <td>Style</td>
    <td>Primitives to operate with CSS styling</td>
  </tr>
</table>

The previous table summarize the scope and general purposes of each functionality group within this layer. Nevertheless, remember that this description is included only for the shake of completeness.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Architecture:Overview" class="control previous"></a>
    <a href="doc.html#Architecture:Metadata" class="control next"></a>
  </div>
</div>
