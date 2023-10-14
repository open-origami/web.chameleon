# Chameleon for Architects

<p class="lead">Why software architects should be interested in Chameleon</p>

If you have read this far, it is because you are a software architect and you are interested in knowing what advantages Chameleon offers for the design of component-based architectures. Throughout this section, we will give you some ideas on why you should use Chameleon.

Chameleon is a framework for developing adaptive architectures based on components. Adaptive architectures are those capable of making dynamic changes in their internal structure and external behavior to meet the requirements demanded by the execution context.

Even though the classic architectures based on substitution have worked well for many years and are still valid today, the truth is that they confer an important degree of architectural rigidity that avoids the reuse of the artifacts. Adaptive architectures, on the other hand, lead to a much higher level of reuse. In such cases, the demands for variation do not depend on the architecture. On the contrary, the components are responsible for adapting dynamically to each architectural context of use by means of the application of hot transformations.

Chameleon has been designed to simplify the construction processes of adaptive solutions of this nature and offers a set of capabilities to carry out the development of this kind of architecture.

### Adaptation

Chameleon is, above all, a solution to create adaptive architectures. Through the capabilities provided by this framework, developers can plastically adapt the components within their catalogs so that they work correctly in a context of use different from those for which they were initially designed. In this sense, Chameleon's capabilities group the main adaptation techniques within component-oriented development and place them in the hands of developers in a simple and direct way.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Architects.01.png">
  <figcaption>
    Adaptation. Components are dynamically adapted to fit properly within each new architectural context of use.
  </figcaption>
</figure>

### Encapsulation

In component-oriented architectures, first-class citizens are components. A component is a coarse-grained abstraction that encapsulates a collection of services to be consumed by other components. In adaptive architectures, the extension logic potentially contributed to other components is also suitable for encapsulation as a reusable artifact. Chameleon promotes a design of adaptive architectures focused on these two types of encapsulations.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Architects.02.png">
  <figcaption>
    Encapsulation. The extensions are reusable artifacts that can be installed on the components to apply adaptive transformations.
  </figcaption>
</figure>

### Reusability

In classic architectures based on substitution when the components do not fit properly to work in different contexts of use, they must be discarded or reconstructed. In adaptive architectures, on the contrary, the components have the capacity to adapt to different architectural configurations and, therefore, their reuse increases.

In addition, the ways in which the components are adapted typically are well known and follow repeated strategies. Therefore, the extension logic defined to carry out the adaptation is also a reusable element in itself.

 <figure>
   <img src="../../resources/markdowns/figures/Introduction/Architects.03.png">
   <figcaption>
     Reusability. By applying adaptive strategies, components increase their reusability, being able to fit to different architectural contexts.
   </figcaption>
 </figure>

### Reversibility

The application of adaptive logic in a component involves a transformation both in its internal structure and in external behavior. In highly flexible adaptive architectures, it may be interesting to dynamically apply the extension logic at a given time, but also be able to reverse it to restore the component to its original state. This is typical of scenarios in which an adaptation to a component must be applied to operate in a particular context of use only for a period of time.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Architects.04.png">
  <figcaption>
    Reversibility. The installation of adaptive extensions can be reversed to return the component to its original state.
  </figcaption>
</figure>


<div class="see-also">
  <div class="controls">
    <a href="doc.html#Motivations:Business"   class="control previous"></a>
    <a href="doc.html#Motivations:Developers" class="control next"></a>
  </div>
</div>
