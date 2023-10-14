# The Subject Based Extension Model

<p class="lead">A delegation-based extension model</p>

Extension models define archetypical forms in which adaptive extension logic can be applied on a target component body. Chameleon offers different extension models that are commonly used to create adaptive architectures. Throughout this section we focus on describing what the Subjects based extension model is and how it works. In addition, we will provide different examples of this extension model.

## Qué son los Subjects

The Subject based extension model adapts the internal structure of a target component in a semi-transparent way by creating new functional facets bound to it. Each facet is named a subject and as such they include a series of methods and properties that are contributed to the target component using delegation techniques. The worthy value of this extension model is that each subject is a reusable instance that can be bound to a target component in a exclusive way by creating a fresh namespace with new functional capabilities avoiding any kind of name clashing with the component body.

<div class="box">
  <div class="title">Subject Based Extension Model</div>
  <div class="caption">
    A Subject is a functional facet that contributes a target component a collection of properties and member methods within a new separated namespace. This avoid any problem of name clashing with component body.
  </div>
</div>

By adding it various subjects, a target component can be empowered to operate in other architectural contexts where new functional capabilities are required. Each subject is a functional feature providing specific capabilities. However, the use of this extension model only makes sense when those capabilities operates on the internal state managed by the component. Otherwise, an independent library is a simpler and less expensive solution in terms of performance.

## How Subjects Works

A subject empowers a target component by providing a collection of properties and member methods that can operate with the internal state of the component but, at the same time, the contribution is done outside of the component body to avoid name clashing. This adaptive strategy is interesting since the components extend functionally whilst their internal structure is not compromised.

<figure>
  <img src="../../resources/markdowns/figures/Development/Subjects.01.png">
  <figcaption>
     Subject Based Extension Model. Each Subject provides a collection of functional capabilities to operate on the component inner state from an outer namespace. That namespace can be accessed by using a dedicated reflection handler.
  </figcaption>
</figure>

To access the new functional space created by a subject based extension, an access function `Utils` is used. This encapsulation mechanism allows developers to extend a component with multiple subjects that at the same time does not find points of conflict with other extensions.

All subjects include, as part of its specification, the access point where they can be retrieved. An access point can be syntactically defined as a unique string. Nevertheless, for the sake of governance, we strongly recommend use a dot separated list of identifiers as a string value to arrange different subjects in a hierarchical way, as is shown in example bellow.

According to this, when the access function is invoked, a valid access point must by supplied as a parameter. If the access point does not match with any of those registered during subjects' installation a `undefined` value is obtained. In other case, the target subject is recovered. During design phase, the extension developer can register a subject using several access points. These values work as alias for subject recovery in such manner that any of them can be used when the access function is used.

In such manner, the access function becomes a core element to access the internal properties contributed to a target component. From an external point of view, the component does not show any apparent alterations in its structure or functional behavior. Despite the concealment qualities that this model confers, the motivation underlying this extension strategy is not related to security concerns but merely aims to empower the target component with specialized functional facets, avoiding any kind of naming conflict.

## Creating Subjects

Using subjects is a simpler and straightforward way to set an specialization based adaptive logic compared with trying to define the same adaptive behavior through the use of regular Chameleon extensions. This is a consequence of the model-driven adaptive development. Instead of specifying all the required adaptive and installation logic, subjects allow the developer to focus on defining only the adaptation logic in itself.

Defining a subject is a systematic activity consisting of creating a class, marking it using the `@Extension(Subject)` decorator expression, including the methods that define the extension and specifying the access points from which the subject can be accessed. This process can be summarized in the following steps.

- *Create the Subject.* First create the structure of the class where the adaptive extension logic will be included. Remember that the only parameter in the constructor corresponds to the target component.

- *Mark the Subject.* Annotate the class with the decoration expression `@Extension(Subject)`. This expression indicates to the framework that the extension corresponds to the implementation of a subject, so the appropriate extension techniques must be used in the installation process.

- *Define Access points.* Select at least one access point for the subject. Use the `@Endpoint` decorator to define the valid ID for each access point. You can use this decorator repeatedly to define several alternative access points. Chameleon will register these values during the installation process to conform a dataset of subjects.

- *Implement the subject.* Include, as part of the specification, the collection of properties and member methods that are part of the definition of the subject. These methods correspond to the logic that will be exposed in the subject when it is accessed after the installation.

In the following example we implement a subject providing syntax sugar to access DOM content within a standard Web component. In particular, it exposes two capabilities allowing to recover the collection of attributes and children nodes of the host node associated with the component.

```JavaScript
import { Extension } from 'origami.chameleon.js'
import { Subject   } from 'origami.chameleon.subjects.js'
import { Endpoint  } from 'origami.chameleon.subjects.js'

@Extension (Subject)
  @Endpoint ('Web.Dom.Local')
  @Endpoint ('Local')
class Local {

  constructor (core) {
    this.core = core
  }

  get attributes () {
    let xs = this.core.attributes
    return [...xs].reduce (function (r, x) {
      r[x.name] = x.value
    }, {})
  }

  get childs () {
    return [...this.core.children]
  }

}

export { Local }
```

As it can be seen in the example, the relevant decorators have been imported on the implementation of the subject model. The extension class is annotated with the `@Extension(Subject)` decoration expression and the decorator` @Endpoint` is used to indicate the different entry points in use. In particular, the extension logic defines two utility methods providing some syntactic sugar to more conveniently access mechanism to get both DOM attributes and children.

Other more elaborate examples might require making use of other types of more complex logic. However, this simple code is enough to illustrate how a subject is written using Chameleon.

## Subjects in Action

Subjects are a kind of adaptive model driven extension based on delegation mechanism. They allow to add methods in a component in a very power and transparent way. However, from an external perspective, when developers like Frank or George is using this kind of extensions, the way in which they have been created is transparent. When Chameleon processes a subject specification according to the proper model, the framework automatically converts such specification into a regular extension with methods properly adapted as required.

Accordingly to the above, all the previously described ways to install adaptive extensions in the [products](#Development:Products) and [components](#Development:Components) sections are equally applicable for model-driven extensions. The following code shows how the previous subject can be installed imperatively at runtime on an example component.

```JavaScript
import { Inspect } from 'origami.chameleon.js'
import { Utils   } from 'origami.chameleon.subjects.js'
import { Layout  } from '...'
import { Local   } from '...'

let ILayout = Inspect (Layout)

ILayout.extensions.install (Local)

let lx = new Layout ()
let ly = new Layout ()

let llx = Utils (lx).web.dom.local
let lly = Utils (ly).web.dom.local

let aLx = llx.attributes     // Local attributes for lx
let aLy = lly.attributes     // Local attributes for ly
let cLx = llx.childs         // Local children for lx
let cLy = lly.childs         // Local children for ly
```   

As was done for the case of regular extensions, in this example we have used the `Inspect` reflection function to install the subject based extension called `Local`. However, from the developer perspective, the previous code does not show any clue that this extension has been defined using the subject model.

What is different in this extension model from the point of view of external use is that the extended capabilities on the components must be exploited through the use of the reflective utility function `Utils`. In the code, after importing this function we use it and it returns the installed subject.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Roles"   class="control previous"></a>
    <a href="doc.html#Development:Traits" class="control next"></a>
  </div>
</div>
