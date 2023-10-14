# Designing Adaptive Products

<p class="lead">The role of adaptation in product design</p>

In the previous section we described the advantages of adaptive techniques for component developers. With a static approach, component developer could specify in a declarative way the set of extensions to be contributed into a component body when it is loaded. With a dynamic approach, it was also possible to use the Chameleon imperative API to explicitly install or uninstall adaptive extension only when certain environmental conditions are met.

For George, our product developer, it is also very useful to use adaptive techniques. When he starts to create a new product, he chooses certain components within the catalog and try to connect them in order to obtain a proper composition. However, components are not usually ready to be used in a straightforward way when they are selected.  A set of transformations must be carried out in order to shape components and so allow a suitable connection.  Once they have been adapted can be used on the architectural context of the target project.

The adaptive capabilities provided by Chameleon can be used to face the aforementioned problems. In adaptive architectures, the responsibility of achieving a compositional fit in a new context of use is not on the architectural design effort but on the plasticity presented by components when they are contributed with adaptive extensions.

When George tries to make use of components does not fitting directly to the requirements of a product architecture, he simply applies some transformations that are materialized as adaptive extensions in the catalog. In this way the process of product construction is more systematic and agile to develop.

<figure>
  <img src="../../resources/markdowns/figures/Development/Products.01.png">
  <figcaption>
     Designing Adaptive Products. The adaptation logic can be applied from the outside of the component. If it is applied on a specific instance, we talk about outer local adaptation. If it is applied on a component class we talk about outer global adaptation.
  </figcaption>
</figure>

As we explain in the previous section, the adaptive activities developed by Frank have an internal application since they are carried out from the component body. Similarly, we can say that adaptive activities carried out by Jorge are external since they are applied from the outside of the target components where the transformation is aimed to be applied. We name this second kind of transformations as outer adaptive activities.

In particular, we can distinguish two types of outer activities. Each of them has different scope. When an adaptation activity is applied exclusively on a specific instance of a component we will talk about local outer adaptation, whilst if it is done on a component class we will talk about global outer adaptation.

## Local Outer Adaptation

Local outer adaptation is an adaptation activity in which a particular instance of a component is transformed by applying an adaptive extension from the outside of the component body. This type of adaptation is used on scenarios where a specific component must be adapted to present a structure or behavior aligned with the composition needs demanded by certain architectural context.

The typical workflow on this type of situations start by creating a component instance and then apply an adaptive extension on it.
As an example, the following code shows how a component can be recovered within the `HTML` document and apply a transformation on it. In particular, the example installs a `Showable` transformation that includes `on` and `off` methods over the standard component body to control its visualization.

```JavaScript
import { Inspect } from 'origami.chameleon.js'

let element = document.querySelector ('div')
let btnShow = document.querySelector ('#btn-show')
let btnHide = document.querySelector ('#btn-hide')

Inspect (element)
  .extensions
  .install (Showable)

btnShow.addEventLister ('click', e => element.on  ())
btnHide.addEventLister ('click', e => element.off ())
```

As it can seen in this example, we have selected a particular element. The element type corresponds of one defined by the Web Standard. Chameleon can apply adaptive extensions on regular objects and classes but also on native elements defined by Web standards. For the sake of illustration, it is not relevant the particular type the element belongs to. Notice that, when applying the imperative API of Chameleon on that node we can install the extension `Showable` and from there exploit the control capabilities of the visualization that it provides.

## Global Outer Adaptation

In the previous section we have seen how adaptive logic can be externally applied to a particular instance of a component. This is useful when we aim to make a specific transformation of such instance so that it participates in a particular composition scenario.

However, there are other cases where our interest is focussed on prescribing transformations to be applied to all instances of a certain type of component defined through a class. In that kind of scenarios, we need to apply global adaptation operations.

A global outer adaptation applies some kind of transformation from the outside of the component body. These transformations aim to directly alter the structure and the behavior of the component class and cause a deferred effect on all the instances created by the class. As a result, these instances will be ready to participate in the architectural context where they are required.

Chameleon let that all the intrinsic complexity in adaptive transformation keeps hidden from the product developer point of view. As transforming logic has been encapsulated in adaptive extensions and aligned with systemic metaphors identified on the domain, product developer just invokes the imperative API of the framework to install the transformation in a simple and straightforward way.

To understand the convenience of doing global outer adaptation operations, let's suppose that we want to extend the behavior of our `GridLayout` component. Now this component receives two new properties. The `data` property contains a data structure with the elements to be displayed in the grid, whilst the `type` property receives the component class to be used to render the content of each cell in the grid.

Imagine we want to render a grid of Users. We need each user instance to present an extended behavior in such a manner that when a `click` gesture is done on a user, a visual spin effect is produced and its reverse is shown.

One way to solve the problem is to redeploy the `User` component as a new improved version. However, that is not an adaptive approach. In an adaptive solution, we apply an extension implementing the desired behavior. This is precisely what we do in the following example.

```JavaScript
import { Inspect    } from 'origami.chameleon.js'
import { GridLayout } from '...'
import { Flippable  } from '...'
import { User       } from '...'

Inspect (User)
  .extensions
  .install (Flippable)

let grid = GridLayout ()

grid.type    = User
grid.data    = [...]
grid.rows    = 2
grip.columns = 3
```

As it can be seen, before instantiating the `GridLayout` component we need to load the` Flippable` extension implementing the desired spin effect. Then, we applied that extension on the `User` class. Finally, we inject the extended class over the `type` parameter of the grid component. Now, when the grid creates a new instance of User it will incorporate the rotation effect that we have installed.

Global outer activities present, nevertheless, an important limitation. Firstly, the effects of extensions cannot be applied backwardly on instances created before the class transformation. In general terms, we consider backward adaptation a non-recommended practice as it may compromise the integrity of its complete architecture. However, if you wish to implement this kind of behavior, we recommend you to consult the [Mixin based extension model](#Development:Mixins), discussed in a following section.


<div class="see-also">
  <div class="controls">
    <a href="doc.html#Development:Components" class="control previous"></a>
    <a href="doc.html#Development:Extensions" class="control next"></a>
  </div>
</div>
