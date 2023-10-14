# Designing Adaptive Extensions

<p class="lead">The role of extensions in adaptive architectures</p>

In the previous sections, we discussed the advantages of adaptive architectures from both component designer and product designer point of view. The use of adaptive extensions is a worthy contribution for the development process. For component designers, extensions represent adaptation primitives identified within a domain assisting in code modularization. For product developers, the same extensions are useful to transform at execution time each component so that it fits properly to each architectural context.

However, beyond understanding how adaptive extensions are used in particular situations it is important to know how they work under the hood, what is their internal structure and how they can be created. That is exactly the expertise of Diana, our extensions developer.

When Diana creates an adaptive extension, she is actually doing two activities in one. The first one is to define the adaptive logic, which describes which transforming task should occur after the installation. The second one, on the contrary, revolves around the installation logic. That is, the particular way in which the adaptive extension must be intertwined with the code in the component body.

These two activities lead to two ways in which adaptive extensions can be constructed. Extensions can be constructed as self-contained artifacts that combine the adaptive and installing logic. But they can also be created by placing each of these two logics in separate artifacts. According to this latter approach, the artifact containing the adaptive logic can be thought as a specification of transforming to be carried out whilst the artifact containing the installing logic is responsible to interprets the specification and proceed to the installation.

<figure>
  <img src="../../resources/markdowns/figures/Development/Extensions.01.png">
  <figcaption>
    Designing Adaptive Extensions. It is possible to create adaptive extensions as self-contained artifacts that incorporate, indistinguishably, the logic of adaptation and deployment. Alternatively, adaptation models can be defined to maintain canonical installing strategies and let transforming logic to live in separated artifacts thought as specifications that must be interpreted by the model.
  </figcaption>
</figure>

Of these two approaches the first one seems more straightforward but, in practice, is less comfortable for extension developers. The second one, on the other hand, is more compact and reusable. It is more reusable because the installation logic is shared by all extensions following the same model. It is more compact because extensions just need to include the specification of adaptive logic whilst the installing logic lives in the model.

## Regular Extensions

An adaptive extension is an artifact to transform the internal code of a target component in such manner that it presents a new structure and behavior. This is done aiming to enable the component to operate in a different architectural context.

As we saw in the previous sections, the way adaptive extensions are contributed to a component is through an installation process. To carry out this process Chameleon offers both a declarative approach for static cases and an imperative one to face dynamic requirements. But at this point, these differences are non-relevant syntax details

Adaptive extensions are artifacts implementing two complementary methods, one for the installation and another for the uninstallation. These methods are not intended to be invoked directly by the user. These are methods that the extension designer prepares so that Chameleon can properly undertake installation and uninstallation activities in the proper and timely way.

To understand the process of creating extensions, take the following code as an example. In the snippet bellow, it is defined the `Enumerable` extension. This extension is responsible to add 5 new methods related to collections' management. Although the detail of the inner implementation is not relevant for our purposes in this example, we are referring to the classic `map-reduce` schemas applied to the array of keys of the receiver component.

```JavaScript
import { Extension } from 'origami.chameleon.js'

@Extension
class Enumerable {

  constructor (core) { this.core  = core }

  install () {
    this.core.map    = function () { ... }
    this.core.reduce = function () { ... }
    this.core.filter = function () { ... }
    this.core.every  = function () { ... }
    this.core.some   = function () { ... }
  }

  uninstall () {
    delete this.core.map
    delete this.core.reduce
    delete this.core.filter
    delete this.core.every
    delete this.core.some
  }

}
```

As you can see, the extension is defined as a class annotated with the `@Extension` decorator. This mark allows Chameleon to indicate that the specification corresponds an adaptive extension. Internally, the extension includes a constructor and two unique methods for installing and uninstalling purposes. The constructor receives the target component as a parameter. The internal logic of the extension constructors typically consists of capturing such reference in the extension's body so that it can be used later on when Chameleon invokes the installation and uninstallation methods.

One important thing to remember is that Chameleon maintains different instances for each extension installed over each extended component. This allows the extension developer to store the state of the installing and uninstalling logic during the component lifespan.

The previous example is a well-done adaptive extension. Nevertheless, the transforming and installing logic are strongly interwoven. Paying attention to the install method, for instance, it can be notice that installing logic consist of create new keys within the component body whilst the adaptive logic lives in the code of each function added as a value for each key. The particular semantics of adaptation that this extension provides is represented by these functions. However, the way in which these functions are contributed to the component body is by means of direct assignment sentences.

Other installing strategies of the same adaptation logic could have been possible. For example, it is a good idea not include new elements directly on component body but within an object bound to the component body using JavaScript Symbol. This would reduce name collision problems. But above all, what it is highlighted in this example is that this way to define adaptive extension is complex and mix both the logics of adaptation and installation logic. This is not necessarily a problem, but its separation brings certain advantages as we discuss below. Along this documentation we will name extensions developed in this manner as Regular Extensions.

## Model Driven Extensions

Model driven adaptive extensions provide a more suitable way to create extensions compared with regular extensions. In essence, it is about creating extension models to encapsulate canonical strategies that, in some way, have been identified as proven installing solutions for recurrent situations within a certain domain. Once adaptive extension models have been created extensions can be rethought as computable specifications containing specific adaptive logic to be interpreted and installed by models.

With these two kinds of artifacts separately Chameleon knows how to create, in a dynamic and transparent way, an artifact similar to a regular extension to be installed on a component. In particular, each model is able to interpret the adaptive logic specified in an model driven extension of its type and carry out the installation and uninstallation processes on demand.

To understand how this new kind of adaptive extensions works, let's go back to the `Enumerable` problem that was discussed in the previous example and reformulate the code as a model-driven extension.

```Javascript
import { Extension } from 'origami.chameleon.js'
import { Trait     } from 'origami.chameleon.traits.js'

@Extension (Trait)
class Enumerable {

  constructor (core) { this.core = core }

  map    () { ... }
  reduce () { ... }
  filter () { ... }
  every  () { ... }
  some   () { ... }

}
```

What the previous example shows is the specification of the proper adaptive logic for the `Enumerable` problem.  This logic is syntactically expressed as is required by the `Trait` extension model that will be discussed in a following section. As it can be seen, the class is not a well formed regular adaptive extension. In particular, it has not `install` and `uninstall` methods. Instead, it consists directly of a set of member methods that are to be directly installed on the component body. But this is not any problem. To point out to Chameleon that this class does not follows the structure of a regular extension it is marked with the `@Extension (Trait)` expression indicating that it is an extension driven by the `Trait` model.

Create canonical models to supply recurrent installing strategies can be a heavy and complex activity. Nevertheless, once models within a domain have been devised and implemented, the development experience for extension programmers is simple and straightforward. By knowing how the `Trait` extension model proceed over the contents of a specification, create the `Enumerable` extension is simple. It is only required to include methods that must be added in the component body.

If to Diana the experience with model driven extension is nicer than before, from the Frank and George point of view, the whole constructive process is also cool as it is absolutely transparent.  Chameleon is able to create on the fly regular extensions so that component and product developers does not know if they are working with model-driven extensions or regular ones once they are imported in their code.

But in addition, creating model driven adaptive extensions has certain advantages with respect to the regular ones. Following we describe the main advantages in detail.

- *Encapsulation.* The installing logic is often complex and confusing. When transformations are defined by means of regular extensions, adaptive logic appears intertwined with the installation logic and this generates syntactic noise making difficult the code interpretation. Model-driven extension development allows hiding the installation strategies. This leaves a cleaner code in the specification of the extension and allows the developer to focus on describing the adaptive logic.

- *Reusability.* Installing strategies may vary. In fact, this is why it is common to define different extension models in order to support several installing strategies. However, those strategies use to follow certain known patters and, as such, they are fixed solutions. This stability fosters the reusability of extension models as commonly applied artifacts within a domain. Thus, a lot of specific model driven extensions make use of the same code defined in certain model.

- *Maintainability.* From the point of view of maintainability, the use of model driven extensions is also a good idea. Thanks to the extension models, the installation logic applied over the architecture is centralized. This simplifies any corrective and evolutionary maintenance activity over time and versions.

According to the aforementioned the development of extension model is a complex activity but also the set of models used within an adaptive architecture is well known and it is documented in component literature. For these two reasons, Chameleon provides a collection of extension models as built-in common solutions. Indeed, it is implemented as a plugin architecture. The framework gets knowledge about how to proceed with some kind of extension by importing extension models implemented as external bundles. Of course, as an architect you can devise and implement new extension models but, in general cases, you are enough with the models supplied by Chameleon and creating a new one is only required for advanced scenarios. In the following section we go deep in the description of the [extension models](#Architecture:Model) provided by Chameleon.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Products" class="control previous"></a>
    <a href="doc.html#Development:Aspects"  class="control next"></a>
  </div>
</div>
