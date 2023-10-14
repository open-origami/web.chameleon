# Chameleon for Developers

<p class="lead">Why software architects should be interested in Chameleon</p>

If you have read this far it is because you are a software developer and are interested in knowing what advantages Chameleon offers for your development experience when creating component-based solutions.

Chameleon is a framework for developing adaptive solutions based on components. To create adaptive solutions, we develop components in a conventional way. There is nothing new in the process of building components or in their structure or behavior. What we do, in addition, is to define independent adaptation logic in the form of artifacts called extensions that are contributed to a catalog of extensions. In this way, when we want to transform a component, we simply select the appropriate adaptive extension and apply it to the desired component.

Developing adaptive solutions based on components leads to creating better products and increasing the flexibility of architectures. But the development process is also considerably improved with the use of this approach.

### Productivity

The development of component-based architectures is always a gain in productivity. Having collections of components allows developers to focus on the logic of composition as it is assumed that each component already solves the problem for which it is responsible. Nevertheless, when we create adaptive architectures, the gain in productivity is double. Not only the components are pre-built solutions of proven success but also the adaptive extensions that are responsible for supporting typical patterns of composition through transformation.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Developers.01.png">
  <figcaption>
    Productivity. Adaptive extensions promote productivity since transformations are carried out quickly, safely and effectively.
  </figcaption>
</figure>

### Simplicity

Adapting components can become a very complex activity sometimes depending on the kind of transformation that is intended to be carried out. In addition, when we install a new extension, the transformations that are made on the component can clash with the original code in the component. Likewise, uninstalling an extension without taking into account other previously installed extensions can compromise the component integrity. Chameleon makes this work very simple. The developer only concentrates on the definition of the adaptation logic and lets the framework take care of the installation and uninstallation tasks.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Developers.02.png">
  <figcaption>
    Simplicity. The developer can focus on defining the adaptation logic that must be applied, leaving Chameleon to carry out the installation and uninstallation tasks.
  </figcaption>
</figure>

### Composition

Extensions not only are used to carry out adaptive transformation strategies that are applied repeatedly within the domain. Many times, they consist of partial features that can be contributed to a component to supply it some functionality. Chameleon allows these features to be incorporated into a component at design time declaratively. This not only constitutes an effective code reuse mechanism but it is also a natural way of injecting good practices into the development process. This way, products results more homogeneous solutions from the architectural point of view. According to this, for example, all components that implement HTML content containers will incorporate the Container feature whilst those define a new layout will include the Layout feature.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Developers.03.png">
  <figcaption>
    Composition. The developer can look at the extensions as a mechanism to classify the components in the catalog by their commonalities.
  </figcaption>
</figure>

### Evolution

The adaptive logic defined as extensions can also be applied to the components at runtime. If it is done on a particular component, the effect will be local. If it is done on the class that defines a type of component, its effect will affect all the instances created from the moment in which the transformation was applied. These capabilities allow you to create truly dynamic and adaptive products. For example, it is possible to develop a smart system that applies certain extensions on the running components when certain environmental conditions are met. As a result, a product with the ability to evolve and adapt to changes in the execution environment is obtained.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Developers.04.png">
  <figcaption>
    Evolution. It is possible to define adaptive logic that executes only when certain environmental conditions are met, which allows the creation of evolutionary products.
  </figcaption>
</figure>


<div class="see-also">
  <div class="controls">
    <a href="doc.html#Motivations:Architects" class="control previous"></a>
    <a href="doc.html#Architecture:Overview"  class="control next"></a>
  </div>
</div>
