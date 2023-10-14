# Designing Adaptive Components

<p class="lead">The role of adaptation in component design</p>

The use of adaptive techniques can be very useful during component development. Frank, our component expert, can use adaptive extensions to incorporate partial behavioral facets to components at design time. Likewise, it can also add logic in the component body in order to install adaptive extensions at runtime working as dynamic transformations applied when certain environmental conditions are met.

Throughout this documentation, to refer to this way of extension we will use the term of inner adaptation, since its execution is prescribed by the developer according to the inner code of components. When this logic is unconditionally applied to all instances of the component, we will talk of static inner adaptation, whereas if the logic is conditionally applied only when certain environmental settings are met, we will use the term of dynamic inner adaptation.

<figure>
  <img src="../../resources/markdowns/figures/Development/Components.01.png">
  <figcaption>
    Designing Adaptive Components. The adaptation logic can be used during component design processes. Static adaptation allows modularizing the development of components while dynamic adaptation helps to cope with emerging change needs.
  </figcaption>
</figure>

So, we can say that there are two complementary approaches to create adaptation logic during component development. To clarify the differences in procedure and scope of each of them, we will go through the following sections to describe them in detail.

## Static Inner Adaptation

Component creation is a development activity that can benefit from the use of the adaptation capacities offered by Chameleon. In order to understand to what extent this is so, it is important to point out the challenges that component developers are constantly facing and the way in which adaptation techniques suppose a solution in this regard.

- *Modularity.* Component development activities aim to create sets of features working together to meet some goal. For the sake of organization and maintainability, it is typical in software development to break down the code of each feature into different modules that are then integrated into the body of the component. Chameleon foster this idea since feature development can be defined as adaptive extensions to be applied over the component code in a declarative way.

- *Reusability.* According to the aforementioned, each feature developed as an adaptive extension can be applied successfully  over different kinds of components. Hence, creating partial features as encapsulated adaptive extensions suppose a direct improvement on the reusability level.

- *Composition.* The creation of component architectures is a design exercise that must ensure effective composition among the elements making up the solution. At a design level, this means that components must follow to certain structural and behavioral constraints aiming to favor the composition. Other languages have formal mechanisms for defining such restrictions in a explicit form by using type based systems or interfaces. As Javascript is not a strong typing language the architectural constraints must be bear in mind implicitly by developers resulting in less robust solutions. Using Chameleon is a great win in this regard. Designers can define structural constrains as adaptive extensions to be applied over components. In this manner, the framework capabilities can be used as a design tool to shape the domain architecture.

The use of these three main concerns of adaptation in the design of components is illustrated in the following code. In essence, this example shows the structure of a component. Its functional purpose is not relevant for what we want to explain but imagine that it is the implementation of a Layout component in the form of a grid.

```Javascript
import { Component  } from 'origami.chameleon.js'
import { Layout     } from '...'
import { Observable } from '...'

@Component
  @Extends (Layout)
  @Extends (Observable)
class GridLayout {

  constructor () {}

  get rows ()  {}
  set rows (v) {}

  get columns ()  {}
  set columns (v) {}
}

```

The previous example revolves around the `@Extends` decoration. Using this decorator at class level, the component developer is able to prescribe adaptive features used to extend the component both functionally and structurally.

Particularly, the `GridLayout` class is contributed by the `Layout` and `Observable` extensions. They are reusable modules aiming to transform properly the component. Regardless of the particular details of adaptive semantics of each extension, it is clear that they transform the component in order to prepare it to work where artifact with a Layout and observable behavior were required.

In the example above, the aim is not to dynamically adapt the component to work in fresh architectural context. On the contrary, the purpose here is to prescribe that the `GridLayout` component is a `Layout` and `Observable` element and hence can participate in any collaboration where such capabilities are required. Since both features are defined in different modules they can be reused in other components and they can evolve independently over time. They are both first-class elements characterizing the domain.

Finally it is important you bear in mind one relevant aspect of static inner adaptation when developing a component. Extensions declared on the class by means of the use of the `@Entends` decorator will be always applied after the object's creation. In this manner, when you implement the class constructor, you should not invoke any feature contributed from an extension.

## Dynamic Inner Adaptation

The previous section focused on the advantages of working on an adaptive architecture at design phase. From the developer perspective, adaptive extensions provide a collection of transforming primitives valid within the domain to enhance your development processes.

As it has been discussed in the previous section, incorporating partial features on the component body at design time is a worthy strategy. The set of structural and functional constraints shaping component-based architectures can be enforced explicitly and in a declarative way by using the Chameleon capabilities.

However, the application of transforming logic can sometimes be carried out conditionally. Sometimes, a certain adaptive extension should only be applied over a component when certain environmental conditions are met in the execution context.

This fact imposes a new way of carrying out the installation of adaptive extensions on the body of a component. If the declarative approach described in the previous section, based on the use of the `@Extends` decoration, is appropriate for static adaptation, it is not suitable for the case of conditional application that we are considering. In this case, it is necessary to use the Chameleon imperative API that allows expressing the exact moment in which a certain adaptive extension must be installed on a component body.

To illustrate this kind of scenarios let us consider again the example on the previous section. Imagine that the `Observable` extension should be installed on the component only when the component rendering process it has finished. For the sake of simplicity, let's assume that that rendering logic is described in the `Layout` adaptive extension and it provides a `render` callback method to include termination logic.

```Javascript
import { Inspect    } from 'origami.chameleon.js'
import { Component  } from 'origami.chameleon.js'
import { Layout     } from '...'
import { Observable } from '...'

@Component
  @Extends (Layout)
class GridLayout {

  constructor () {}

  get rows ()  {}
  set rows (v) {}

  get columns ()  {}
  set columns (v) {}

  render () {
    Inspect (this)
      .extensions
      .install (Observable)
    ...
  }
}

```

First of all, the `Observable` extension has been dropped as a declarative static contribution. As it must be installed once `Layout` extension has finished, we add in the `render` callback method an imperative invocation of the Chameleon API to proceed to `Observable` installation. This is naive example in which certain transformation is carried out only when target component is ready for that.  

Other practical examples of dynamic inner extensions are adaptive processes that should be invoked at the construction phase by locating installation as a sentence within the class constructor. In other cases, the transformation must be applied only as a reactive response to certain events of component architectures. The install sentence, in these cases, is placed inside an event listener so that the installation occurs when such event is attended. And even to operate on an asynchronous context it is typical to include the installing sentence within a `timeout` manager or linked to a promise returned by a non-blocking operation.

Dynamic inner installation techniques are very powerful to induce on components a flexible and fluid adaptive behavior that adjusts to the environmental needs at each moment of execution. In addition to the installation method afore discussed there is one for uninstalling purposes within the Chameleon API. This method allows component developer to define dynamic strategies that allows to revert an adaptive transformation in order to come back the component to its previous state. This pair of capabilities, both install and uninstall methods, allows implementing architectures that show specific behaviors only during the period of time that is strictly necessary. For more details on this type of capabilities consult the documentation of the [Chameleon API](./api.html).


<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Overview" class="control previous"></a>
    <a href="doc.html#Development:Products" class="control next"></a>
  </div>
</div>
