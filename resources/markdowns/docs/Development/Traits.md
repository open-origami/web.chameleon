# The Trait Based Extension Model

<p class="lead">An addition-based extension model</p>

Extension models define archetypical forms in which adaptive extension logic can be applied on a target component body. Chameleon offers different extension models that are commonly used to create adaptive architectures. Throughout this section we focus on describing what the Trait based extension model is and how it works. In addition,  we will provide different examples of this extension model.

## What are Traits

A trait is a kind of extension that adapts the behavior and internal structure of a component by extending its inner capabilities. Each trait adds a set of methods and properties that are directly contributed to the body of the target component using additive techniques.

<div class="box">
  <div class="title">Trait Based Extension Model</div>
  <div class="caption">
    A trait is a kind of extension adapting a target component by adding a set of methods and properties. This contribution enables the component to work to new architectural contexts different from those for which it was designed.
  </div>
</div>

The Trait based extension model empowers components to participate in new collaboration scenarios with other components where before was not possible. Thanks to loosely typing features of the language, in JavaScript it is possible to alter the inner structure of an object at runtime without disturbing its normal execution. Despite the flexibility of this extension mechanism, its use imposes a significant risks related to the potential name clashing problems with respect those elements previously present in the component body. For this reason, this extension model offers a collection of clashing policies to prevent this kind of problems.

## How Traits Work

Each trait is a specification that enrich a component body with a collection of member methods and properties. When this kind of extensions is installed on a target component, all the elements within the extension is incorporated as part of the body of the component. In spite of this, the installation process guarantees that the new added members are evaluated on its own context, different to the component body. This avoids reference problems when operating with `this` within each method. This is not a scope limitation.  Remember that each extension receives as a constructor parameter the instance of the target component.

<figure>
  <img src = "../../resources/markdowns/figures/Development/Traits.01.png">
  <figcaption>
    Traits based extension model. Each Trait adds a collection of properties and member methods that are incorporated directly into the component body. These methods execute on their own context.
  </figcaption>
</figure>

In spite of the above, the behavior of this extension strategy constitutes a frequent source of conflict. This is the case when a name match with an elements previously declared in the target component. Also is the case when a previously installed extension has added elements with the same name of those defined in the trait to be installed.

In both cases it is necessary to indicate to Chameleon how this kind of potential collisions must be managed. For this, each extension includes name clashing policies indicating how to proceed during installation in case of conflict. In particular, this is carried out throughout a collection of decorators that allow each method to be associated with an proper clashing policy. Following we summarize these policies:

- *Override Policy.* The overwrite policy replaces the method in the target component by that defined in the extension. This is the default clashing policy. That is, when a method in a trait is not annotated with any decorator, the Override Policy is assumed.

- *Discard Policy.* The discard policy refuse the method defined in the extension and maintains the original method in the target component in case of a name clashing. This is the more conservative strategy. If a trait contribution can put at risk the normal behavior of the target component, it must not be modified.

- *Before Policy.* This clashing policy force to replaces the method in the target component with another one that incorporates the method in the extension to be executed before the original one in the component. This policy applies intercession techniques similar to those discussed in the Aspect based extension model.

- *After Policy.* In a similar way, this clashing policy force to replaces the method in the target component with another one that incorporates the method in the extension to be executed after the original one in the component. This policy applies intercession techniques similar to those discussed in the Aspect based extension model. As as result, the method in the trait is invoked with the same set of parameters used to invoke the method in the target component. But another one is added at the end to include the result of that invocation.   

In essence, determine which of the above policies should be used for each particular case is a design decision in hands of extension developers. It should be noted that, although this kind of declarations can mitigate the collision problems, they are not a plenty solution since frequently all that we are achieved is to convert a set of clashing problems into a different set of priority problems with respect to the proper order in which the extensions should be applied.

In this regard, we recommend that this extension model be used when there is certainty that the extension operates in a syntactic space free of collision problems, either due to rules defined in the domain or by the use of `Symbol`  instead of string based keys. These are, in the end, the standard protection mechanisms provided by the language to face name clashing problems.

## Creating Traits

Using traits is a simpler and straightforward way to set an specialization based adaptive logic compared with trying to define the same adaptive behavior through the use of regular Chameleon  extensions. This is a consequence of the model-driven adaptive development. Instead of specifying all the required adaptive and installation logic, traits allow the developer to focus on defining only the adaptation logic in itself.

Defining a trait is a systematic activity consisting of creating a class, marking it using the `@Extension(Trait)` decorator expression, including the methods that define the extension and adding the proper method decorators to express the clashing policies. This process can be summarized in the following steps.

- *Create the Trait.* First create the structure of the class where the adaptive extension logic will be included. Remember that the only parameter the constructor receives is the instance of the target component.

- *Mark the Trait.* Mark the extension class with a proper decoration expression to indicate the model in use, `@Extension(Trait)`. This construction tells to Chameleon that the extension corresponds to the implementation of a trait, so the appropriate deployment techniques must be used in the installation process.

- *Implement the Trait.* Include, as part of the specification, the collection of member methods that are part of the trait definition. These methods correspond to the logic that will be added within the component body.

- *Include Clashing Policies.* On each trait method, use the appropriate decorator to indicate the clashing policy you wish to establish.

The following sample illustrates how it can be defined a trait to make serializable all the components in an adaptive architecture. The extension redefines the log logic to several formats.

```JavaScript
import { Extension } from 'origami.chameleon.js'
import { Trait     } from 'origami.chameleon.traits.js'
import { Override  } from 'origami.chameleon.traits.js'

@Extension (Trait)
class Serializable {

  constructor (core) {
    this.core = core
  }

  @Override
  toString  () {
    return this.core.toString ()
  }

  @Override
  toJson  () {
    return JSON.Stringify (this.core)
  }

  @Override
  toHtml  () {
    return this.core.outerHtml
  }

}

export { Serializable }
```

As it can be seen in the example, the relevant decorators have been imported on the implementation of the traits model. The extension class is annotated with the `@Extension(Trait)` decoration expression whilst the `@Override` decorator is used to indicate an overwriting policy. In particular, the logic of the extension defines the function `toString`, ` toJson` and `toHtml` to provide serialization capabilities to the target component.

Other more complex examples could require using other policies to fit more elaborated scenarios. However, this simple code is enough to illustrate how a trait can be written using Chameleon.

## Traits in Action

Traits are a kind of adaptive model driven extension based on addition mechanism. They allow to extend methods in a component in a very power and precise way. However, from an external perspective, when developers like Frank or George is using this kind of extensions, the way in which they have been created is transparent. When Chameleon processes a trait specification according to the proper model, the framework automatically converts such specification into a regular extension with methods adapted as required.

Accordingly to the above, all the previously described ways to install adaptive extensions in the [products](#Development:Products) and [components](#Development:Components) sections are equally applicable for model-driven extensions. The following code shows how the previous trait can be installed  imperatively at runtime on an example component.

```JavaScript
import { Inspect      } from 'origami.chameleon.js'
import { Layout       } from '...'
import { Serializable } from '...'

let ILayout = Inspect (Layout)

ILayout.extensions.install (Serializable)

let lx = new Layout ()
let ly = new Layout ()

lx.toHtml ()    // Html for lx
ly.toHtml ()    // Html for lx

```   

As was done for the case of regular extensions, in this example we have used the `Inspect` reflection function to install the trait based extension called `Serializable`. However, from the developer perspective, the previous code does not show any clue that this extension has been defined using the trait model.



<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Subjects" class="control previous"></a>
  </div>
</div>
