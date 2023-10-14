# The Role Based Extension Model

<p class="lead">An delegation-based extension mode</p>

Extension models define archetypical forms in which adaptive extension logic can be applied on a target component body. Chameleon offers different extension models that are commonly used to create adaptive architectures. Throughout this section we focus on describing what the Role based extension model is and how it works. In addition, we will provide different examples of this extension model.

## What are Roles

A role is a kind of model driven extension that adapts the reactive behavior of a component. Each role includes a series of methods that are linked to the target component using reactive delegation techniques. In particular, the methods included in each role are launched when, from the component certain events, defined in the role-based extension, are triggered.

<div class="box">
  <div class="title">Role Based Extension Model</div>
  <div class="caption">
    A role is a kind of extension that represents a event-driven lifecycle specification for a target component. Each method in the role represents a valid and stable state bound to the component and it has a linked action to be executed when the role reaches that state.
  </div>
</div>

The creation of a role is a strongly declarative process that defines a lifecycle based on states for a target component. Each method in the role represents a valid and stable state in the component. When the component reaches certain state, the associated method in the role is to be executed. States transitions of lifecycle are semantically controlled by means of guards and trigger conditions based on events. In a certain sense, it can be considered that role-based extensions is the natural evolution of the native web-event model but adding a state based control.

## How Roles Work

The definition of a role implies specifying a lifecycle with actions that are executed in a reactive way. When the role is installed on a target component, it registers, in a transparent manner, a collection of event listeners according to the specification defined in the lifecycle. Likewise, the role extension will fire events embodying the component in itself to notify environmentally the state transitions that occur in the lifecycle.

<figure>
  <img src="../../resources/markdowns/figures/Development/Roles.01.png">
  <figcaption>
    Role Based Extension Model. A role is a specification of a state-controlled event-driven life cycle. Each event causes a lifecycle transition to another state when guarded conditions are fulfilled.
  </figcaption>
</figure>

The advantage of this extension model is that listening and event notification activities are completely transparent to the external developer establishing a dialogue with the target component. From a programmer point of view, it is not possible to know if the reactive behavior shown by the component responds to a native implementation or is controlled by a role-based extension.

Defining a role is a process consisting of specifying a state-controlled lifecycle. There is an initial state and optionally one or more final states. Lifecycle moves from one state to the next one when the whole collection of events associated to the current state are listened. In this documentation, we will name that event collection as the outbound guard conditions associated to the state. In the same way, to reach the incoming state of the transition, a collection of events must be listened. We will name that collection as the incoming guard conditions. Upon entering into a state, the lifecycle will execute the bound action defined in the role, which frequently includes making notifications of new events to express conditions for the current state.

Expressing this logic is complicated if it is carried out in an imperative way. For this reason, Chameleon provides a collection of decorators to be able to express transition logic in a simple and declarative way. In essence, the process of defining a role begins by declaring the actions of each state as member methods of the extension. Then, on each of the methods the following decorations can be included.

- *State.* Each method in a role based extension class representing an action within the lifecycle must be annotated with the '@State' decorator. This mark allows Chameleon to distinguish action methods from others used to codify other private operations.

- *Begin State.* The method that operates as the beginning state of the life cycle must be marked by the '@Begin' decorator. Of course, only a single method can be declared as a starting state since it is not possible to have more than one starting state in a lifecycle.

- *End State.* In the same way, it is necessary to indicate to Chameleon  the member methods representing final states in a role based extension. To mark a method as a final state a '@End' decorator must be used. A final state should not contain transition logic but if it is included it will be ignored. Within a role, there may be zero or more final states. When no final states are declared the lifecycle never ends.

- *Entry Guard.* An entry guard allows to establish a locking condition to be satisfied before the control is transferred to the next state in the lifecycle. That condition will be considered satisfied only if an event of the proper type is listened.  A state can include several entry guards. The method for that state will not be executed until ALL guards has been fulfilled. To declare an entry guard the '@Guard' decorator must be used.

- *Exit Route.* An exit route define a valid path to exit a state and land into another. Each route must include the name of the new state and, optionally a guarded condition. That condition works in a similar way of the Entry guards. A state can include zero or more exit route. That state is abandoned when the ONE of the routes satisfies its condition. In such case that transition state corresponds to that expressed in the route. Non guarded routes must be single in a state and cannot be used jointly with other routes. States declared with a non guarded route moves to the next state instantly once the method for the state has finished. To declare a route the '@Route' decorator must be used.

The expressive power of this declarative mechanism is really awesome. It is not common to find situations in which a role specification results insufficient. The only exception to this may corresponds to that cases when transition conditions are highly dynamic. However, remember that it is always possible to move a lifecycle within the method bound to a state. It is only required to fire proper events according to routing logic declaratively expressed in the role specification.


## Creating Roles

Using roles is a simpler and straightforward way to set an specialization based adaptive logic compared with trying to define the same adaptive behavior through the use of regular Chameleon extensions. This is a consequence of the model-driven adaptive development. Instead of specifying all the required adaptive and installation logic, roles allow the developer to focus on defining only the adaptation logic in itself.

Defining a role is a systematic activity consisting of creating a class, marking it using the `@Extension(Role)` decoration expression, including the methods that define the actions for each state and adding all required decorators to declare the lifecycle logic. Following we summarize all the steps.

- *Create the Role.* Firstly it is required to create the structure of the class where the adaptive extension logic will be included. Remember that the constructor receives the target component as a parameter.

- *Mark the Role.* Annotate the class with the proper decoration expression `@Extension(Role)`. This decorator indicates to Chameleon that the extension corresponds to the implementation of a role with which in the installation process the appropriate deployment techniques should be used.

- *Define the Lifecycle.* Include in the extension class a member method for each states. The name used for each method is not relevant. Then include the transition logic by annotating the methods with the proper decorators according to the routing logic and guarded conditions required to express the lifecycle.

- *Implement the Actions.* Include the logic that must be executed each time the role makes a transition to a new state of the lifecycle managed by the extension.

The following code illustrates how you can define a simple role-based extension to obtain a specialized lifecycle that controls the rendering process of a component for HTML content from an interpolation template that is loaded from an external resource.

```JavaScript
import { Extension } from 'origami.chameleon.js'
import { Role      } from 'origami.chameleon.roles.js'
import { State     } from 'origami.chameleon.roles.js'
import { Begin     } from 'origami.chameleon.roles.js'
import { Guard     } from 'origami.chameleon.roles.js'
import { Route     } from 'origami.chameleon.roles.js'
import { End       } from 'origami.chameleon.roles.js'

const START    = 'Stat'
const LOAD     = 'Load'
const RESOLVE  = 'Resolve'
const RENDER   = 'Render'
const TEMPLATE = 'Bind'
const MODE     = { mode : 'open' }

let Fire = core => type => core.dispatchEvent (new Event (type))

@Extension (Role)
class Rendering {

  constructor (core) {
    this.core = core
    this.path = core.path
    this.fire = Fire (core)
  }

  @State
    @Begin
    @Guard (START)
    @Route (RESOLVE)
  Load () {
    fetch (this.path)
      .then (response => response.text ())
      .then (text => {
        this.text = text
        this.fire (LOAD)
      })
  }

  @State
    @Guard (LOAD)
    @Route (RENDER)
  Resolve () {
    this.template = document.createElement (TEMPLATE)
    this.content  = template.content
    this.node     = template.importNode (content, true)
    this.fire (RENDER)
  }

  @State
    @Guard (RENDER)
    @End
  Render () {
    this.shadow = this.core.attachShadow (MODE)
    this.shadow.appendChild (this.node)
  }

}

export { Rendering }
```

As it can be seen in the example, the relevant decorators have been imported on the implementation. The extension class is annotated with the decoration expression `@Expression (Role)` and the decorators `@State`, `@Begin`, `@End`, `@Guard` and `@Route` are used to indicate the transition logic. In this example, the role defines a simple lifecycle consisting of 3 states in sequence. First, in the `Load` method the resource is loaded and, after reading the content, a plain text is obtained. Then the `Resolve` method is responsible for dumping the content in a template. And finally the `Render` method uses that template to generate the shadow content.

To better understand the detail of this specification, let us analyze step by step the meaning of the decorators used in this example on each method. The `Load` method is annotated with the `@Begin` decoration to indicate that it is the initial state. The action implemented in the method is executed automatically after the `Start` event occurs and an instantaneous transition to the `Resolve` state proceed according to the `@Route` path declaration. However, the next method will not be invoked instantaneously since there is a `@Guard` decoration locking the execution until the `Load` event is listened. As you can see in the implementation of the method, that `Load` event will not fired until the asynchronous capture operation `fetch` has been successfully completed.

 For the `Resolve` state this specification proceed in a similar way. After completing the associated action, a transition to the `Render` state take place, according to the transition condition expressed in the route decorator on the `Resolve` method. However, again, the guard condition imposed on the rendering method will prevent the associated logic to be execute until the `Render` event is fired. This method is the last one in the sequence defined by the lifecycle. That is why there is no declarative transition logic but an `End` decoration indicating the end of the process.

Other examples may require defining more complex lifecycles with a more elaborated transition logic compared with the simplistic linear model shown in this example. Nevertheless the power of role based specification is not in define complex lifecycles but in the ability to include in a component several roles working jointly to be specialized in different domain concerns. In any case, this simple code is enough to illustrate how to write a role in Chameleon.

## Roles in Action

Roles are a kind of adaptive model driven extension based on delegation mechanism. They allow to define reactive behaviors as reusable artifacts to be contributed to target components. However, from an external perspective, when developers like Frank or George is using this kind of extensions, the way in which they have been created is transparent. When Chameleon processes a role specification according to the proper model, the framework automatically converts such specification into a regular extension with methods properly adapted as it was already described in a previous section.

Accordingly to the above, all the previously described ways to install adaptive extensions in the [products](#Development:Products) and [components](#Development:Components) sections are equally applicable for model-driven extensions. The following code shows how the previous role can be installed  imperatively at runtime on an example component.

```JavaScript
import { Inspect   } from 'origami.chameleon.js'
import { Layout    } from '...'
import { Rendering } from '...'

let ILayout = Inspect (Layout)

ILayout.extensions.install (Rendering)

let lx = new Layout ()
let ly = new Layout ()

lx.render ()    // fires the Start event & the lifecycle starts
ly.render ()    // fires the Start event & the lifecycle starts
```   

As was done for the case of regular extensions, in this example we have used the `Inspect` reflection function to install the role-based extension called `Rendering`. However, from the developer perspective, the previous code does not show any clue that this extension has been defined using the role model.


<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Mixins"   class="control previous"></a>
    <a href="doc.html#Development:Subjects" class="control next"></a>
  </div>
</div>
