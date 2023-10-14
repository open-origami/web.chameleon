# The Mixin Based Extension Model

<p class="lead">An specialization-based extension model</p>

Extension models define archetypical forms in which adaptive extension logic can be applied on a target component body. Chameleon offers different extension models that are commonly used to create adaptive architectures. Throughout this section we focus on describing what the Mixin based extension model is and how it works. In addition, we will provide different examples of this extension model.

## What are Mixins

A mixin is a kind of extension that adapts the behavior of a component. Each mixin includes a set of methods that are contributed to a target class by using specialization techniques. Particularly, the mixin class are placed over the component class on the prototype chain and thus, such a class get by inheritance all the methods defined in the mixin.

<div class="box">
  <div class="title">Mixin Based Extension Model</div>
  <div class="caption">
    A mixin is a kind of extension that enrich the set of methods of a component by placing a class at some point over its prototype chain. The component get the new methods through the inheritance mechanisms provided by the language.
  </div>
</div>

The creation of mixins is an interesting adaptation activity when it is intended to affect all elements below a certain point in the prototype chain of a target component. The deployment mechanism provided by this extension model is very clean since adaptive changes remain confined to a new class inserted at some point in the prototype chain. In addition, this technique enables the implementation of strategies for alteration of the extension logic, allowing to operate as a filter on the methods that arrive at a component by inheritance.

## How Mixins Work

A mixin is an extension whose adaptation logic is described in the form of a collection of member properties and methods, like any other conventional class. Elements of this class are placed as a prototype object just above the receiving component.

This transformation process is completely transparent from the developer's perspective. The extension object will be added to the prototype chain at the correct level as if it has been done in a conventional way using the `extends` reserved word. Also, the use of the constant references `this` and `super` is allowed within the Mixin class as in any other inheritance scenario.

Mixin based adaptation strategies enable the extension methods can work as filter elements that alter the natural inheritance behavior that the component should show. For example, if the extension includes a homonymous method to another defined in an upper class within the prototype chain, then such method will replace that in the upper class when look up process run. In addition, according to above, if the extension method invokes the method in the upper class using the `super` sentence, the obtained logic will correspond to a decorating mechanism.

<figure>
  <img src="../../resources/markdowns/figures/Development/Mixins.01.png">
  <figcaption>
    Mixin Based Extension Model. Mixins modify the prototype chain by incorporating a new class over the target component. In this way the behavior of the inheritance is altered.
  </figcaption>
</figure>

To control the filter process that we have described above, Chameleon provides a series of policies that can be included, within the extension class as method decorators. These policies will only apply in the case of finding naming clashing between the extension methods and those in an upper class. Below we describe in detail each of these policies.

- *Override Policy.* The Override policy makes the implementation of the method in the extension prevail over the one that is in the upper class. This is the default behavior that Chameleon applies when the extension method is not decorated.

- *Discard Policy.* The Discard policy makes the implementation of the method in the upper class prevail over the one that is in the extension. This behavior is equivalent to that which would be obtained if the contribution from the extension did not occur for that method.

- *Before Policy.* This extension policy includes in the class inserted over the prototype chain a method combining the method in upper class and that defined in the extension. The composition logic cause the method in the extension is invoked first and then the method of the upper class.

- *After Policy.* This extension policy includes in the class inserted over the prototype chain a method combining the method in upper class and that defined in the extension. The composition logic cause the method the upper class is invoked first and then the method in the extension. This secondary invocation shares the same parameters that the former one but adds, the result of the previous invocation as a new last actual argument.

Policies allow a fine control for the mixin based adaptive strategies. However, if as a developer of extensions, none of the policies described above fits your needs you can always define a particular strategy using directly the native inheritance control mechanisms supplied by the language. Remember that `super` is the JavaScript keyword to refer at any time to the convenient upper method according to the prototype chain.

## Creating Mixins

Using mixins is a simpler and straightforward way to set an specialization based adaptive logic compared with trying to define the same adaptive behavior through the use of regular Chameleon extensions. This is a consequence of the model-driven adaptive development. Instead of specifying all the required adaptive and installation logic, mixins allow the developer to focus on defining only the adaptation logic in itself.

Defining a mixin is a systematic activity consisting of creating a class, marking it using the `@Extension(Mixin)` decorator expression, including the methods that define the extension and adding the proper method decorators to express the clashing policies. This process can be summarized in the following steps.

- *Create the Mixin.* First create the structure of the class where the adaptive extension logic will be included. Remember that the only parameter the constructor receives is the instance of the target component.

- *Mark the Mixin.* Mark the extension class with a proper decoration expression to indicate the model in use, `@Extension(Mixin)`. This construction tells to Chameleon that the extension corresponds to the implementation of a mixin, so the appropriate deployment techniques must be used in the installation process.

- *Implement the Mixin.* Include, as part of the specification, the collection of member methods that are part of the mixin definition. These methods correspond to the logic that will be added on a new object over the target component on the prototype chain.

- *Include Clashing Policies.* On each mixin method, use the appropriate decorator to indicate the clashing policy you wish to establish.

The following sample illustrates how you can define a mixin to make traceable all the components in an adaptive architecture. The extension redefines the trace logic that will be incorporated by inheritance into each component.

```JavaScript
import { Extension } from 'origami.chameleon.js'
import { Mixin     } from 'origami.chameleon.mixins.js'
import { Override  } from 'origami.chameleon.mixins.js'

@Extension (Mixin)
class Traceable {

  constructor (core) {
  }

  @Override
  toString  () {
    let now   = Date.now ()
    let proto = Object.getPrototypeOf (this)
    let cls   = proto.constructor.name
    let log   = super.toString ()

    return `(${now}) [${cls}] - ${log}`  
  }

}

export { Traceable }
```   

As it can be seen in the previous example, the relevant decorators have been imported on the implementation of the mixin based extension. The extension class is annotated with the decorator expression `@Extension(Mixin)` and the decorator `@Override` is used to indicate an overwriting policy must be used to face clashing conditions. In particular, the logic of this extension redefines the `toString` function that inherits from the `Object` class. Adaptive extension relies on the base implementation for this method by using the `super` reference.

Related to Mixin contextualization is important to notice that even though the adapted component is provided as a parameter in the constructor, as in any other extension model, the contributed methods will be latter on bound after installation directly to the component to mimic language behavior related to inheritance. That means that whilst within the Mixin constructor the `core` reference points to the target component, in the Mixin methods `this` refers also to the component.

Other more complex examples could require using other policies to support more elaborate inheritance management strategies. However, this simple code is enough to illustrate how a mixin is written using Chameleon.

## Mixins In Action

Mixins are a kind of adaptive model driven extension based on inheritance mechanism. They allow to extends methods in a component in a very power and precise way. However, from an external perspective, when developers like Frank or George is using this kind of extensions, the way in which they have been created is transparent. When Chameleon processes a mixin specification according to the proper model, the framework automatically converts such specification into a regular extension with methods properly adapted as required.

Accordingly to the above, all the previously described ways to install adaptive extensions in the [products](#Development:Products) and [components](#Development:Components) sections are equally applicable for model-driven extensions. The following code shows how the previous mixin can be installed imperatively at runtime on an example component.

```JavaScript
import { Inspect   } from 'origami.chameleon.js'
import { Layout    } from '...'
import { Traceable } from '...'

let ILayout = Inspect (Layout)

ILayout.extensions.install (Traceable)

let lx = new Layout ()
let ly = new Layout ()

lx.toString ()    // (123423546834) [Layout] - ...
ly.toString ()    // (123423548796) [Layout] - ...

```   

As was done for the case of regular extensions, in this example we have used the `Inspect` reflection function to install the mixin based extension called `Traceable`. However, from the developer perspective, the previous code does not show any clue that this extension has been defined using the mixin model.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Aspects" class="control previous"></a>
    <a href="doc.html#Development:Roles"   class="control next"></a>
  </div>
</div>
