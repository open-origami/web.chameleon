# The Aspect Based Extension Model

<p class="lead">An interception-based extension model</p>

Extension models define archetypical forms in which adaptive extension logic can be applied on a target component body. Chameleon offers different extension models that are commonly used to create adaptive architectures. Throughout this section we focus on describing what the Aspects based extension model is and how it works. In addition, we will provide different examples of this extension model.

## What are Aspects

An aspect is a kind of extension that adapts the behavior of a component. Each aspect includes a series of methods that are contributed to the target component using interception techniques. In particular, the methods of the aspect extend methods of the target component in such manner that when a component method is invoked proper methods in the aspects are also invoked at some moment during the execution of the original method.

<div class="box">
  <div class="title">Aspect Based Extension Model</div>
  <div class="caption">
    An aspect is a kind of extension that extends the functional logic of member methods within a target component. This logic will be invoked at some moment during the execution of such member methods.
  </div>
</div>

Using aspect-based extension model is a practice of interest when it is intended to extend the functional scope of the elements of the target component in width. After the adaptation, when invoking a method of the component, it will show its original behavior but, additionally, it will execute the logic coming from the aspect-based extension.

## How Aspects Work

An aspect is a kind of adaptive extension that contributes certain logic to a target component to be executed at some moment when methods of the component are invoked.

To carry out this adaptation, the aspect specification must include all relevant information. In this manner, after installing an aspect on a target component, the code from the aspect will be contributed to the component and a new behavior will arise. In particular, the required information that must be described in an aspect to achieve this goal includes two main issues:

- *Spatial Binding.* The spatial binding allows to indicate which methods in the aspect extension are used as a contribution for each member method in the target component. Aspects are a very flexible mechanism as the same function can be associated with several methods in the component.

- *Temporal Binding.* The temporal binding indicates at which specific moment the logic defined in each member method of the aspect extension will be executed when a target method of the component is invoked.  Typical settings for temporal binding is to force the extension logic to be run before, after or instead the original code in the target component.

<figure>
  <img src="../../resources/markdowns/figures/Development/Aspects.01.png">
  <figcaption>
    Aspect Based Extension Model. The Aspect specification in Chameleon use decorators as hooks to indicate the exact moment in which the contributed logic is going to be executed for each method in the component.
  </figcaption>
</figure>

To specify the binding between methods in the aspect-based extension and those in the target component Chameleon offers a collection of method decorators. These decorators tell the framework which binding policies must be applied for each extension's method to contribute to each component's method. In particular, each type of temporal binding is annotated with a different decorator to indicate the temporal `hook` where method must be added. In this way, when the component's methods are invoked, the logic in each temporal hook will be executed at the proper time. The spatial binding, on the contrary, is solved by means of a parameter of the decorator indicating, by means of a regular expression, the specific methods in the target component that should be enriched by the aspect extension. Next, we describe the hooks provided by the aspect model.

- *Provided Hook.* This decorator marks the extension method as a guard to control the execution of member methods in the target component. After installation, each time the component method is invoked, the guard is evaluated to check if the execution is allowed.

- *Except Hook.* This decorator implement the opposite logic to the previous one. The guard regulates the execution of the member method in the target component in such manner that unless the evaluation is false the component's method will not be executed.

- *Before Hook.* This decorator causes that decorated method in the extension be always invoked before the execution of the offended methods in the target component. In the case that several extension methods contribute to the same member method in the component by means of the Before hook, they will be executed sequentially according to the order of definition within the aspect.

- *After Hook.* This decorator causes that decorated method in the extension be always invoked after the execution of the offended methods in the target component. In the case that several extension methods contribute to the same member method in the component by means of the After hook, they will be executed sequentially according to the order of definition within the aspect.

- *Around Hook.* This decorator causes that decorated method in the extension be always invoked instead of the execution of the offended methods in the target component. To avoid losing original logic the method in the components is passed as a function in the first parameter of the aspect method.  This allows the extension developer to define its own adaptive logic to provide a new invocation scheme that fits the needs of the problem. During the invocation, the methods invoked by means of the Around hook are executed after the Before Hook and before the After Hook. All methods in the Around hook are composed with the target method in the component using functional composition techniques.

According to the above, the execution flow for a method extended by using an aspect-based extension can be described according to the following process. First check that all Provided Hooks are evaluated as true. If not, the execution is stopped. Otherwise, it is verified that all Except hooks are evaluated to false. If not, the execution is stopped. Otherwise, the collection of hooks in Before is executed in sequence. Then the composition function that includes the original method and the collection of hooks in Around is executed. And finally, the collection of hooks in After is executed in sequence.

Method invocation in this process is enriched. Each method will receive the same set of parameters that those for the invocation of the original method but, in some cases, two more arguments are supplied. When method decorator uses the Before, Around or After policy the name of the intercepted method in the target component is provided. Also, on Before and After policies methods on the extension receives as the last parameter the output of the before execution in the chain, according to afore described order.

## Creating Aspects

When we aim to extends in width the behavior of methods in a component, to use the aspect model is simpler than trying to define the same adaptive logic using regular extensions. This is a consequence of the adaptive development using model-driven extensions. Instead of specifying all the necessary adaptation and installation logic, aspect extension allow the developer to focus on defining only the adaptation logic in itself.

Defining an aspect is a systematic activity that consists in creating a class, marking it using the `Aspect` decorating expression, including the methods that define the adaptation and adding the relevant decorating hooks to express the binding logic as described before. This process can be summarized in the following steps.

- *Create the Aspect.* First create the structure of the class where the adaptive extension logic will be included. Remember that the only parameter in the constructor will be the instance of the target component.

- *Mark the Aspect.* Mark the class using the `@Extension(Aspect)` decorating expression. This decorator indicates to Chameleon that the extension corresponds to the implementation of an aspect and hence the appropriate installation techniques must be used.

- *Implement the Aspect.* Include in the class the collection of member methods that are part of the aspect specification. These methods correspond to the logic that will be executed on the target component after having performed the installation process. The name of the methods in the aspect class is not relevant.

- *Include Binding Marks* Over each aspect method use the appropriate decorator according to the spatial and temporal bindings you wish to specify.

The following example illustrates how a simple aspect-based extension can be defined so that when invoking each method of a receiving component it emits a log by the standard output.

```JavaScript
import { Extension } from 'origami.chameleon.js'
import { Aspect    } from 'origami.chameleon.aspects.js'
import { Before    } from 'origami.chameleon.aspects.js'
import { After     } from 'origami.chameleon.aspects.js'

const ANY = '.'

@Extension (Aspect)
class Loggable {

  constructor (core) {
    this.core  = core
  }

  @Before (ANY)
  doBefore (...args) {
    console.log ('Logger - Before ', args)
  }

  @After (ANY)
  doAfter (...args) {
    console.log ('Logger - After ', args)
  }

}

export { Loggable }
```   

As seen in this example, the relevant decorators have been previously imported. The extension class is conveniently annotated as an `Aspect` and the decorators `@Before` and `@After` are used to indicate the proper binding logic. In particular, each decorator receives as a parameter the regular expression that is compared with the keys in the target component to identify which member methods it should contribute to.

Other more elaborate examples may require making use of the rest of hooks and even offering adaptive behavior that depends on the internal state of the extension. However, this simple code is enough to illustrate how an aspect is written using Chameleon.

## Aspects in Action

The aspects are a kind of model-driven extensions. They allow to extends methods in a component in a very power and precise way.  However, from an external perspective, when developers like Frank or George is using this kind of extensions, the way in which they have been created is transparent. When Chameleon processes an aspect specification according to the proper model, the framework automatically converts such specification into a regular extension with methods properly adapted as required.

Accordingly to the above, all the previously described ways to install adaptive extensions in the [products](#Development:Products) and [components](#Development:Components) sections are equally applicable for model-driven extensions. The following code shows how the previous aspect can be installed imperatively at runtime on an example component.

```JavaScript
import { Inspect  } from 'origami.chameleon.js'
import { Layout   } from '...'
import { Loggable } from '...'

let ILayout = Inspect (Layout)

ILayout.extensions.install (Loggable)

let lx = new Layout ()
let ly = new Layout ()

lx.show ()    // 'Logger - Before []' & 'Logger - After []'
ly.show ()    // 'Logger - Before []' & 'Logger - After []'

```   

As was done for the case of regular extensions, in this example we have used the `Inspect` reflection function to install the @`Loggable` aspect. However, from the developer perspective, the previous code does not show any clue that said feature has been defined using the aspect-driven model.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Extensions" class="control previous"></a>
    <a href="doc.html#Development:Mixins"     class="control next"></a>
  </div>
</div>
