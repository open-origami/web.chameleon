# The Extension Layer

<p class="lead">Towards Adaptive Extension</p>

Performing specific transformation activities on the elements of your architecture at runtime can be interesting. Especially if these activities are orchestrated from agents that follows certain adaptive strategies. As was described in the previous section, the API of the [Core layer](#Architecture:Core) already provides, in this sense, a set of primitives related to the typical needs of an adaptive process.

However, when Chameleon becomes a key piece of your development process, it is when all the adaptive logic is identified as a reusable artifact within the domain to be applied recurrently on the different components of its architecture. This is exactly what the framework offers through the capabilities of the Extension layer.

## Adaptive Extensions

An adaptive extension is a type of artifact that encapsulates a certain logic of adaptation. In essence, it prescribes a way to structurally and functionally transform a component to fit the needs imposed by a new architectural context of use.

<div class="box">
  <div class="title">Adaptive Extensions</div>
  <div class="caption">
    An adaptive extension encapsulates certain adaptive logic that allows solving a recurring problem within a domain. The extensions are reusable artifacts to be applied repeatedly on the ecosystem of components of your architecture.
  </div>
</div>

Creating adaptive extensions as first class citizens within your architecture is a best practice for developers and designers. Just as we have catalogs of components facing precisely to specific needs of product development in component-based architectures, with Chameleon we can create extension catalogs that allow you to transform components of your adaptive architecture according to canonical and pre-established ways to address recurring problems related to composition tasks.

Defining an adaptive extension with Chameleon is simple and straightforward. A class annotated with the `@Extension` decorator must be created. This indicates to the framework that the artifact is an adaptive extension. The extension must implement the logic to transform properly a component. But also, it must include the inverse logic allowing to undo that transformation. It is very important that every extension include these two-opposite logics in the `install` and `uninstall` methods respectively as Chameleon relies on them to support the reverting process allowing to restore the component to its original state.

As an aside note, it important to highlight that all the classes annotated as adaptive extensions by means of the `@Extension` decorator are also extendable artifacts. In this manner, all the adaptive capabilities provided by the framework can be used by developers when they are creating extensions.

```JavaScript
import { Extension } from 'origami.chameleon.js'

@Extension
class Serializable {

  constructor (core) {
    this.core = core
  }

  install () {
    this.core.toString = function (...args) { ... }
    this.core.toJson   = function (...args) { ... }
    this.core.toHtml   = function (...args) { ... }
  }

  uninstall () {
    delete this.core.toString
    delete this.core.toJson
    delete this.core.toHtml
  }

}

export Serializable
```

When Chameleon installs an extension on a component, it firstly creates an instance of that extension. This allows the extension developer to define adaptive logic that maintains a different internal state for each installation carried out on each component. In particular, Chameleon provides as a parameter of the extension's constructor, the object that corresponds to the instance of the component on which the installation is applied. It is a typical activity to include this object within the data space of the extension object. This is useful for accessing member elements of the component from the installation and uninstallation methods. The above code shows an example of a simple adaptive extension that includes methods for serializing the body of a component.

## Extension Contracts

When developing extensions our first concern is that its logic face to the adaptation needs of the problem we are trying to solve. However, it is equally important to determine to what extent, the extensions become reusable artifacts throughout our domain. If a particular adaptation strategy is applicable only once or for a single type of components, it may not make much sense to be encapsulated in the form of a reusable extension. If, on the other hand, the same adaptive strategy can be applied again and again over a large number of different components, then converting this adaptive strategy into an extension is something of undoubted worth.

The reusability level of an extension is limited, firstly, by the set of restrictions imposed by the extension to the component on which the extension is applied and secondly by the restrictions that the component demands from the extension to collaborate with it. This is so because, essentially, any adaptation exercise is a compositional activity. The body of the adapted component is composed with that of the extension that contains the adaptive logic. To better understand this idea let’s see an example of code.

The following listing defines an `Enumerable` adaptive extension including ` map` and `reduce` methods on the component body. This extension does not present any special feature. However, if we look at the internal code implementing both methods, we can realize that both rely on a condition that must be satisfied by the receiving component. In particular, the component must be an iterable entity so that the `for` statement works properly.

```JavaScript
import { Extension } from 'origami.chameleon.js'

@Extension
class Enumerable {

  constructor (core) {
    this.core = core
  }

  install () {
    function map (fn) {
      let xs = []
      for (let x in this.core)
        xs.push (fn (x))
      return xs      
    }

    function reduce (fn, b) {
      let y = b
      for (let x in this.core)
        y = fn (x, y)
      return y      
    }

    this.core.map    = map
    this.core.reduce = reduce
  }

  uninstall () {
    delete this.core.map
    delete this.core.reduce
  }

}

export Enumerable
```

Fortunately, this restriction is not too strong given the properties of the language on which we rely. In JavaScript, every object, since it extends of the `Object` class, is an iterable entity. Therefore, the `Enumerable` extension is a truly universal and reusable extension. Of course, in other cases with stronger structural restrictions than those in this example, the possibilities of adaptive composition will be considerably reduced and the reusability of the extension will be limited even to the point of compromising its viability as a first-class entity within the architecture.

<figure>
  <img src="../../resources/markdowns/figures/Architecture/Extension.01.png">
  <figcaption>
    Extension Contracts. The restrictions imposed between the extension and the receiving component make up the adaptation contract. By virtue of the tensions of dependence on said contract, 4 types of adaptation relationships are distinguished.
  </figcaption>
</figure>

To name properly each concept, the set of restrictions that is required or agreed between each adaptive extension and their receiving components is called the adaptive contract. This contract is often expressed as a subset of the public contracts of extensions and components. Likewise, depending on how strong the restrictions are, four types of adaptive collaboration relationships can be distinguished between components and extensions. The previous figure summarizes these relationships.

## Adaptive Extensions In Action

From the use point of view, an extension is presented as a black box producing a transformation effect on a component body. When an extension is installed on a component, it undergoes a transformation process that adapts the component in a structural and functional way so that it fits into a new space of needs.

In this sense, the application of adaptive extensions in a component architecture results in a simple and straightforward experience from the programmer's point of view and requires a low level of development skills.

The application of adaptations on the body of a component can be done at design time, when defining a new class of components, or at runtime, when loading components making use of them. This allows to distinguish 2 complementary ways in the use of extensions.

 - *Declarative Extending.* Declarative extending activities are carried out at declaration time whilst the developer is creating a new component. In this case, we proceed by using the `@Extends` decoration that indicates to Chameleon that the class is to be transformed by the selected adaptive extension.

 - *Imperative Extending.* Imperative extension activities are carried out at runtime once a class is already built and it is a necessity to transform it in a particular way. This extension mode can also be used for specific instances of components. In that case, Chameleon offers capabilities to carry out this programmatically.

The example below shows how adaptive extensions can be applied to different kinds of components both declaratively and imperatively. As can be seen in the code, for the first case we use the declarative adaptation whilst in the second case we make use of the installation capabilities offered by the imperative mode of the framework.

```JavaScript
import { Inspect      } from 'origami.chameleon.js'
import { Component    } from 'origami.chameleon.js'
import { Extends      } from 'origami.chameleon.js'
import { Layout       } from '...'
import { View         } from '...'
import { Serializable } from '...'
import { Enumerable   } from '...'

@Component
  @Extends (View)
  @Extends (Layout)
class GridLayout {
  ...
}

let lx  = new GridLayout ()
let ly  = new GridLayout ()

Inspect (lx).extensions
  .install (Serializable)
  .install (Enumerable)

Inspect (ly).extensions
  .install (Serializable)
  .install (Enumerable)

  ...

Inspect (lx).extensions
  .uninstall (Serializable)
  .uninstall (Enumerable)
```

The advantage of the imperative extension mode is that it can be applied not only on classes but also on instances of specific components of its architecture. The use of decorations in the language is currently oriented exclusively to classes and cannot be applied to literal objects.

However, this, far from being a problem, characterizes the pragmatic use of both modes of extension. As discussed more extensively in the [Development Guide](#Development:Overview), the declarative extension is used in situations in which the definition of a component class is modularized into different features expressed in the form of extensions. These extensions operate as specialized partial facets that contribute to the class. On the contrary, the imperative extension mode is used more frequently to transforming situations where the objective is not so much to define an artifact by accumulation of partial features but to apply an effective adaptation that enables the component to operate in a different context of use.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Architecture:Metadata" class="control previous"></a>
    <a href="doc.html#Architecture:Model"    class="control next"></a>
  </div>
</div>
