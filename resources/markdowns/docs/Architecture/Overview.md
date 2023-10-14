# General Overview of Chameleon

<p class="lead">The Chameleon Architecture in Short</p>

Chameleon is a framework to develop component-based adaptive architectures. Particularly, it offers a set of capabilities that allow transformations to be applied to modify the structure and behavior of a component and also to manage the entire process of adaptation during the lifespan of the component.

## A Component-Based Architecture

One of the fundamental design principles of Chameleon is its universal applicability. The framework does not impose any restriction on the structure of a component to be able to perform adaptation operations on it. In fact, any JavaScript class or object can be subject to an adaptive transformation process, including the elements of the Web standard.

<div class="box">
  <div class="title">Adaptive Component</div>
  <div class="caption">
    Chameleon does not impose any structural restrictions related to the component model on which it operates. An adaptive component is any class or object valid according to JavaScript standards.
  </div>
</div>

Despite all of the above, this initiative is focused on solving the gaps found in Web component architectures. For this reason, when we will refer  in this documentation to susceptible artifacts of be adapted, we will use the term of component, or more specifically adaptive component, because it maintains proximity with the terminology used by the current frontend frameworks. In fact, Chameleon can be used within all these frameworks. However, do not forget that it is really a general solution that can work with any kind or well-formed JavaScript object.

## A Reflective Architecture

Chameleon is a reflective architecture. Every time you want to operate on a component, Chameleon performs an introspection activity on it to expose its adaptation options and make them available to the developer.

To carry out this reflective activity, Chameleon provides the developer with the `Inspect` function. In general terms, this function can be considered as the entry point to all the capabilities exposed by the framework API. It is an overloaded function that can receive as a parameter any object or class.

<figure>
  <img src="../../resources/markdowns/figures/Architecture/Overview.01.png">
  <figcaption>
    Reflective Architecture. The transformation operations carried out by Chameleon in any component start with a reflective inspection activity that exposes the possibilities of adaptation of the component.
  </figcaption>
</figure>

When a transformation operation is invoked on an object, the adaptation will take effect instantaneously. On the contrary, when the invocation is applied on a class, the adaptation will take effect later on, over each object, when they are created by using the class constructor. Although both cases are mostly equivalent in practical terms, adaptive effects can differ when applied to objects or classes.

For convenience, Chameleon provides `@Component` decorator to annotate all classes defining components within your architecture. The aim of this decorator is to register the artifact as extendable. Extendable artifacts are those that can be extended by means of an extension mechanism provided by Chameleon. If the @Component decorator is omitted from the declaration of a class it will not be allowed to extend the class from the outside. Read the [Developer Guide](doc.html#Development:Overview) for more details.

```JavaScript
import { Inspect   } from 'origami.chameleon.js'
import { Component } from 'origami.chameleon.js'

@Component
class GridLayout {
  ...
}

let lx = new GridLayout ()
let ly = new GridLayout ()

let ILayout = Inspect (GridLayout) // Inspect on GridLayout class
let ILx     = Inspect (lx)         // Inspect on lx instance
let ILy     = Inspect (lx)         // Inspect on ly instance
```

The above code fragment shows an example of how the reflexive capabilities of Chameleon can be invoked on the elements of a component architecture. First, the introspection function is invoked on a conveniently annotated class. Then, the same is done for a pair of objects created with that class. The code is for the sake of illustration and does not aim to develop any specific functionality.


## A Layered Architecture

When Chameleon opens a component by introspection, it exposes 4 layers to operate on it. Each layer provides a set of primitives that allow to work on the structure of the component at different levels of abstraction.

In general terms, when an adaptive transformation activity is carried out on a component, the capacities of all the Chameleon layers are used together and combined. Below we briefly describe each of these layers and their responsibilities. For a more detailed review see the subsequent sections.

<figure>
  <img src="../../resources/markdowns/figures/Architecture/Overview.02.png">
  <figcaption>
    Layered Architecture. Chameleon opens the component by introspection and offers a perspective based on 4 layers of abstraction. With the capabilities of the framework, you can operate on each of the layers to transform the component.
  </figcaption>
</figure>

 - *The Core Layer.* The Core layer offers a collection of primitives related to Chameleon's introspection and adaptation capabilities. This set of capabilities operates at a very low level of abstraction and it is essential for the operation of subsequent layers.  

 - *The Metadata Layer.* The metadata layer constitutes a record of information that maintains the state of the adaptive transformations applied to the component throughout its life time. This information is useful to support reversibility activities and it is also useful for monitoring and checking activities.

 - *The Extension Layer.* The capabilities of the extension layer allow the definition of adaptive logic as reusable artifacts that can be applied on demand to meet the architectural transformation needs. Extensions are self-contained elements in the sense that they include the logic necessary to revert the component to its original structure and state.

 - *The Extension Modeling Layer.* Frequently, when we define adaptation strategies we always apply the same set of transformations. In addition, the adaptation logic changes from one extension to another but the way in which these extensions are installed is usually invariant. The extension model layer offers a collection of models that correspond to canonical ways of applying adaptive extensions on target components.

 ```JavaScript
 import { Inspect    } from 'origami.chameleon.js'
 import { GridLayout } from '...'

 let ILayout = Inspect (GridLayout)

 ILayout.core         // Provides access to core layer
 ILayout.registry     // Provides access to metadata layer
 ILayout.extensions   // Provides access to core layer
 ```

Continuing with the previous example, we could use the Chameleon reflexive inspection function to access the layer architecture of a component. In this case, we will assume that it is a class imported from an external resource. It can be seen that the inspection function returns an access point for the first 3 layers supported by Chameleon. As we will see later, the last layer is actually exploited from the capabilities offered by the extension layer.

## An Extensible Architecture

This framework offers mechanisms for adaptive extension. Each component on which Chameleon operations are carried out suffers a set of modifications that can be considered extensions of an adaptive nature.

However, when we say that Chameleon is designed following an extensible architecture, we do not mean that. We mean that the framework is itself a system that can be extended. Specifically, the adaptation models that are managed from the last layer of Chameleon, let to think in the framework as a plugin-based extensible solution. Each extension model is a plugin that indicates to Chameleon a typical way in which a particular type of adaptive extension can be installed and uninstalled.

Adaptation capabilities of Chameleon have been extended through the definition of 5 extension models. You can think in these models as built-in plugins that the framework provides to carry out the most common adaptation strategies. In some advanced cases, you could need to define your own extension models but that will not be very common. See the [Extension Modeling Layer](#Architecture:Model) for details.


<div class="see-also">
  <div class="controls">
    <a href="doc.html#Motivations:Overview" class="control previous"></a>
    <a href="doc.html#Architecture:Core"    class="control next"></a>
  </div>
</div>
