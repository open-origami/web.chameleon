# The Model Extension Layer

<p class="lead">Extension Strategies as Archetypes</p>

The capabilities provided by [the Extension layer](#Architecture:Extension) are very useful to create an ecosystem of reusable artifacts encapsulating adaptive logic to apply recurrently within a given domain.

However, when we become familiar with the development of adaptive extensions, we realize that an important part of the adaptation logic they contain is identical to that of other extensions. In particular, the one that dealing with how the adaptive extension is installed over the component body.

## Adaptive Logic & Installation Logic

According to the above, from a practical point of view, it is possible to distinguish 2 types of logic always associated with the adaptive extension developing processes.

 - *Adaptive Logic.* The adaptive logic is associated with the particular adaptive contribution that an extension provides on a component when it is installed. Or if you want, from the opposite point of view, the loss of capabilities that the component suffers when the extension is uninstalled.

 - *Installation Logic.* The installation logic, on the other hand, refers to how the adaptive logic should be applied to the component body in order to produce a proper transformation result. And, symmetrically, how to proceed during the uninstalling process to restore the component to its original state.

Let's come back to the example that we presented in the previous section. In the `Serializable` extension, the adaptive logic is focused on the 3 serialization methods defined by the extension: `toString`, `toJson` and `toHtml`. The installing logic refers to the way in which those methods are contributed to the body of the receiving component. In particular, this is done in this case by simple assignment the functions as member methods of the received component. Although this installing strategy is cool, other different strategies could have been equally valid depending on the goals. For example, the functions could have been located on the component prototype as public member methods to be shared by all instances of that class. Or Alternatively, they could have been included as static methods of the class.

```JavaScript
@Extension
class Seralizable {

  constructor (core) {
    this.core = core
  }

  install () {
    this.core.toString = ...
    this.core.toJson   = ...
    this.core.toHtml   = ...
  }

  uninstall () {
    delete this.core.toString
    delete this.core.toJson
    delete this.core.toHtml
  }

}

@Extension
class Enumerable {

  constructor (core) {
    this.core = core
  }

  install () {
    this.core.map    = ...
    this.core.reduce = ...
  }

  uninstall () {
    delete this.core.map
    delete this.core.reduce
  }

}
 ```

On the other hand, the `Enumerable` extension has certain similarities with the `Serializable` extension. In this case, the aim of the transformation is completely different. It revolves around adding enumerative capabilities to a component by supplying `map` and `reduce` methods. However, if we closely observe the implementation of the extension, the installation logic is exactly the same. Again, it is about incorporating the methods as direct keys of the instance of the receiving component. That is, both extensions result in different adaptive logics but share a common installation logic.

## Adaptive Extension Techniques

Similarities found in the two previous examples should move us to a reflection. It is rare for two adaptive logics to be identical. That case would probably correspond to a functional overlap error. However, it is relatively common for several installing logics to be similar or identical.

<figure>
  <img src="../../resources/markdowns/figures/Architecture/Model.01.png">
  <figcaption>
    Extension Techniques. Four typical installation techniques can be distinguished to apply on a receiver component.
  </figcaption>
</figure>

This fact invites us to reflect on what are the different types of installation logic that adaptive extensions often use. The experience would allow us to answer this question concluding that there are 4 typical installation techniques. Next, we describe each of them.

 - *Addition Techniques.* Addition based techniques are those including the extension's contributions directly on the body of the component. This is a discouraged risky practice because it increases the probability that several extensions clash during the installation. That will be the case if there are common keys used by two or more extensions aiming to be installed on the same component body.

 - *Specialization Techniques.* Specialization based Techniques apply deployment strategies that operate on the prototype chain. Typical operations consist of altering the set of member elements defined on the prototypes of a component, or change the prototype chain in itself by inserting, deleting or rearranging the classes on it. These techniques can also be considered a risk practice since it can have side effects on components that do not wish to be affected by the adaptation.

 - *Intercession Techniques.* Intercession techniques extend the space of responsibilities of the member elements within a component. Typically, certain adaptive logic is allowed to be executed in a previous, subsequent or substitute manner to the execution of the original body of the method. With a somewhat more restricted scope, intercession techniques can also be applied to the operations of reading or modifying properties.

 - *Delegation Techniques.* Delegation techniques allow the support to certain capacities of a component to be delegated in the properties or methods of other components. This type of techniques can be considered a special form of intercession but is often accompanied by recontextualizing mechanisms that allow the reference of the `this` pointer to be exchanged for other relevant values.

## Adaptive Extension Models

During the development of extensions, the installation techniques described in the previous section can be applied in an individual or combined way. However, from a practical point of view, we can delegate to Chameleon the responsibility of using the relevant installation techniques, according to the configuration, whilst it is relied to the developer the definition of the proper adaptive logic.

All of this is achieved in Chameleon through the definition of extension models. When we identify a new way to apply certain installation logic in the scope of our domain, we can define an extension model. This model will not only provide a new installation technique to be applied for different extensions one and over again but also will possibly contribute with elements of syntactic sugar to ease the experience developers for this kind of extensions.

<div class="box">
  <div class="title">Extension Model</div>
  <div class="caption">
    An Extension Model defines a particular installation technique for a category of adaptive extensions. It also can provide a sugary syntax to ease the experience for extension developers.
  </div>
</div>

To define an adaptive extension model, it is used the `@Model` decorator. The rest of aspects of the extension model’s development is very similar to that used to implement extensions. There is a constructor and two methods to proceed with installation and uninstallation activities. The constructor receives as a parameter the target component and the installation and uninstallation methods in this case, receive the particular extension that is to be installed on the component. To illustrate how extension models work, let's take a look to an example.

```JavaScript
import { Model } from 'origami.chameleon.js'

@Model
class Simple {

  constructor (core) {
    this.core = core
  }

  install (Extension) {
    let core = this.core
    for (key in Extension) {
      core[key] = Extension[key].bind (core)
    }
  }

  uninstall (Extension) {
    let core = this.core
    for (key in Extension) {
      delete core[key]
    }
  }

}

export Simple
```

The previous example shows a naive implementation of an adaptive extension model incorporating all the elements of an extension as direct keys on the body component. Of course, this strategy is truly simplistic and risky since, among other things, it does not take into account potential naming clash both in the installing and uninstalling phase. However, it is useful as an example in this documentation to illustrate the process of developing extension models.

The definition of adaptive extensions through the use of extension models has great advantages. Firstly, the operation at this level is more productive since developers can focus on the adaptive logic. And secondly, because the resulting architectures are more similar and homogeneous. In fact, adaptation extensions can be arranged, within the extension catalog, according of the extension model they fit.

However, the development of adaptive architectures driven by models also brings with its relevant consequences. Using adaptive models force to modularize extension design according to the models in use. This implies, for instance, that certain adaptive logic that could have been developed as a regular extension must be designed as several extensions collaborating together to face the same requirement.

From the above it follows that the use of models to develop extensions has advantages and disadvantages. Our recommendation in this regard is that as much as possible try to always carry out a development of extensions directed by models since, in the long run, the number of advantages is always greater. However, the ultimate decision to determine whether some logic of adaptation must be implemented directly through a regular extension or as a driven model extension is a design decision.

## Extension Models in Action

The definition of model-driven adaptive extensions greatly simplifies the necessary implementation activities and reduces the development skills that programmers must present. Based on the use of the capabilities exposed in this layer, the developer can concentrate on defining the adaptive logic of the extension without worrying about complex installation strategies carried out under the hood.

In particular, Chameleon makes available to the programmer a total of 5 models of adaptive extension. These models follow different academic approaches described in the components' literature. The detailed presentation of each of them falls outside the objectives of this section. For details see the [Development Guide](#Development:Overview).

Using these models, and maybe others that can be defined for convenience within your domain, the creation process of adaptive architectures is greatly simplified. Let's see how the `Enumeration` extension could be reformulated with the use of the `Simple` extension model defined above.

```JavaScript
import { Extension } from 'origami.chameleon.js'
import { Simple    } from '...'

@Extension (Simple)
class Enumeration {

  constructor (core) {
    this.core = core
  }

  map (fn) {
    let xs = []
    for (let x in this.core)
      xs.push (fn (x))
    return xs      
  }

  reduce (fn, b) {
    let y = b
    for (let x in this.core)
      y = fn (x, y)
    return y      
  }

}

export Enumeration
```

Let's see what is happening under the hood in this example. Chameleon is processing a class that is decorated with the expression `@Extension (Simple)`. Since it has been previously defined as a valid extension model, the framework knows how to interpret the elements of this specification in terms of its installation logic. Particularly, when someone installs this specification on a component, Chameleon will run the `install` method defined in the extension model that consists essentially of copying the methods of the specification, in the example `map` and `reduce`, as member methods of the target component. Symmetrically, the model prescribes that the uninstallation process consists of removing the `map` and `reduce` keys from the target component body.

Describing what happens is more complex than understanding it. All the aforementioned process is something that is transparent to the developer. Every time someone wants to create an extension according to the `Simple` model, she just has to use the decoration expression `@Extension (Simple)` and Chameleon will automatically take care of the rest.

Although this specification does not structurally resemble the concept of extension that was presented in the previous layer, it is exactly that, an extension.Really, this extension does not have explicit installation and uninstallation methods such as it is normative for the other extensions. This is because the `Simple`  extension model works auto-magically to hide these cumbersome details to the developer. The developer does not see how the extension is installed or uninstalled, it just focuses on implementing the `map` and `reduce` member methods.

However, from a usage point of view, the extension `Enumeration`, despite being defined through an extension model, must remain a valid extension and, therefore, should have methods to carry out the installation and uninstallation processes. Chameleon will carry out a transparent activity on this class to create a derived in memory fresh artifact with proper install and uninstall methods. Let's put this fact to the test in the following code and verify that everything works properly.

```JavaScript
import { Inspect    } from 'origami.chameleon.js'
import { Component  } from 'origami.chameleon.js'
import { GridLayout } from '...'
import { Enumerable } from '...'

let lx  = new GridLayout ()
let ly  = new GridLayout ()

Inspect (lx).extensions.install (Enumerable)
Inspect (ly).extensions.install (Enumerable)
```

As can be seen in the previous example, from the user perspective it is completely irrelevant how this extension has been created and how it works. The extension, as an imported element, behaves as if it had both methods to carry out the installation and uninstallation processes on a component. And they are to be invoked under the hood when the `Inspect` function installs and uninstalls the extension.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Architecture:Extension" class="control previous"></a>
    <a href="doc.html#Development:Overview"   class="control next"></a>
  </div>
</div>
