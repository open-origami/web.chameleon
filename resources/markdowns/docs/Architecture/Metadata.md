# The Metadata Layer

<p class="lead">A Metadata Driven Architecture</p>

Chameleon is a metadata driven architecture. Any adaptive transformation activity that the framework performs on your components keeps conveniently registered and stored in an information space.

There are good reasons why Chameleon operates according to a metadata architecture that is directly related to the objectives it pursues. First of all, the collection of metadata helps the framework to manage the state of adaptation of the components over time. But also, thanks to this registration process with Chameleon you can perform monitoring, debugging, query or checking activities on the adaptation state.

To make clear what we are referring to, one component could, for instance, track the adaptive changes on another component and react to them. As another example, a component could check if certain conditions are met on the metadata of other components in order to validate, they are ready to participate in a particular collaboration.

## Metadata Spaces

Chameleon stores, automatically and transparently, the needed metadata to support an adaptive component-based architecture. In particular, it binds to each managed artifact - extension, model or component - a set of metadata spaces that can only be accessed using the introspection capabilities of the framework.

<div class="box">
  <div class="title">Metadata Spaces</div>
  <div class="caption">
    Metadata support for artifacts in a component-based solution is a non-invasive process and is completely transparent from the developer point of view. You can only access this space using the introspection capabilities provided by the framework.
  </div>
</div>

According to the above, there is no restriction to enrich an element of your architecture with its own metadata space. All artifacts are capable of including metadata. For each adapted component there is an associated metadata space. Adaptive extensions also have their own metadata space. Even adaptive extension models have their own metadata spaces and can create specific metadata spaces on the components they adapt.

Despite the above, the metadata system of Chameleon must not be thought as a traceability model. The purpose of this information space is not to maintain a history log of the component transformations over time. Instead, metadata is used as a basis to manage the state of adaptation of the components during the execution time. This means that when a component is destroyed, its metadata space disappears with it. And also, when an adaptive extension is uninstalled from a component, the metadata describing the transformation are to be also deleted from the metadata space of the component.

## Metadata Schemas

The unit of information supported within a metadata space is the record. A record is a data structure consisting of a key-value pair. The key is usually defined as a dot separated set of identifiers. In this manner, it is possible to arrange the keys according to a namespace. The associated data can be any well-formed value in Javascript.

From a conceptual point of view, the structure of the keys let to organize metadata spaces in different categories. It can be considered that all metadata sharing the same prefix are semantically related and therefore belong to the same category. In addition, the structure of each metadata category conforms to its own schema. That schema depends, firstly, on the purpose of the metadata and, secondly, on the developer's design criteria.

<figure>
  <img src="../../resources/markdowns/figures/Architecture/Metadata.01.png">
  <figcaption>
    Metadata Schemas. A metadata record is a key-value pair. Metadata is organized conceptually in spaces with a common prefix. Each metadata space has its own schema.
  </figcaption>
</figure>

The information that is managed within a metadata space can come from different sources and corresponds to different needs. In relation to this, it is possible to classify the metadata schemas in two categories:

- *Private Metadata Schemas.* Private metadata are those that Chameleon defines to support its own adaptive needs. For example, the collection of extensions installed on a component are registered in its metadata space. Similarly, for extensions and extension models, Chameleon stores metadata that gives instructions on how the installation of adaptations should be done.

- *Public Metadata Schemas.* Public schemes are those defined by developers to support their business needs. Instead of creating specific solutions to manage relevant information about your components, Chameleon invites you to rely on its metadata registration capabilities. This is especially recommended when you need to share data among several extensions working together within one or several components.

It is not necessary to know the metadata schemas that Chameleon uses to support adaptive architectures. The framework can be use in a simple and straightforward way from the user's point of view. Only if you are an advanced developer and want to create extension models or if you intend to define advanced adaptation solutions you should know these schemes. This will allow you to better understand and interpret the adaptive behavior of each component over time and will avoid problems that lead to malfunction and erratic behavior. This is especially true for private schemes. Keep in mind that Chameleon does not protect the metadata space in any way and any illegal writing operation performed on them can compromise the operation of the framework. See the [reference documentation](api.html#Metadata:Summary) for details about the metadata of each type of artifact managed by Chameleon.

## The Imperative Mode

The collection of capabilities provided by the Chameleon API through this layer is divided into two parts corresponding to the imperative and reactive aspects of metadata management.

The imperative API is responsible for supporting all the operations related to the query and modification of information stored on the metadata spaces of each component. Since each metadata record follows a key-value format, most methods of this API are designed in relation to these two parameters.

Since each key follows a structure of prefixes to shape a namespace and the values associated with each key can be complex information structures, the metadata space is similar to a large JavaScript object. This fact enhances the query capabilities in the API, since these can be thought of as recursive explorations on the information model maintained by the metadata space.

```Javascript
import { Inspect    } from 'origami.chameleon.js'
import { GridLayout } from '...'

let ILayout = Inspect (GridLayout)
let RLayout = ILayout.registry

RLayout.get ('Core.Id')
RLayout.get ('Core.Family')
RLayout.set ('Layout.Type', 'Grid')
RLayout.set ('Layout.Hooks', [])
RLayout.add ('Layout.Hooks', { Handler : fn, Scope: 'Global' })
RLayout.add ('Layout.Hooks', { Handler : gn, Scope: 'Local'  })
RLayout.get ('Layout.Hooks.0.Scope')
RLayout.get ('Layout.Hooks.1.Scope')
```  

The best way to understand all of this is through an example. The above listing shows how the metadata API can be accessed to perform manipulation and query activities. In particular, the code performs different typical operations on the metadata space of a component. In fact, the structure of any key passed as a parameter in the methods of the previous example is self-explanatory if we remember the behavior of the language. Each key element corresponds to a path on the metadata space interpreted as a JavaScript object. The path is used to undertake an in-depth traverse.

## The Reactive Mode

The reactive API of this layer allows to monitor the imperative operations that are done on the metadata space associated with the artifacts of your architecture. In particular, it is possible to register or delete observers for the read, write and remove operations that are carried out along the time.

As we introduced at the beginning, this type of capabilities is very helpful to implement solutions in which the behavior of some components depends on others or to validate the structural or functional adequacy of each participant in a collaboration to proceed effectively.

```JavaScript
import { Inspect    } from 'origami.chameleon.js'
import { GridLayout } from '...'

let ILayout = Inspect (GridLayout)
let HLayout = ILayout.registry.Hooks

function hook (type) {
  return function (...args) {
    console.log (`Hook - [${type}]`, args)
  }
}

let hGet = hook ('Get')
let hSet = hook ('Set')
let hDel = hook ('Remove')

HLayout.get (hGet)
HLayout.set (hSet)
HLayout.remove (hDel)
```   


As an example, in the previous code you can see how the reactive API is used to register adaptive change listeners on the three hooks that Chameleon provides. The functions `hGet`, `hSet` and `hDel` will be invoked when reading, writing and removing processes are carried out on the metadata space.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Architecture:Core"       class="control previous"></a>
    <a href="doc.html#Architecture:Extension"  class="control next"></a>
  </div>
</div>
