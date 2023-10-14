# Component Based Adaptive Architectures

<p class="lead">A new way to create component-based architectures</p>

Component-based architectures have been established themselves as a de facto standard for creating frontend solutions. Almost all of the currently frameworks in use related to the development of front solutions supply its own component model as building block.

This fact is reasonable given the innumerable advantages that the development of component-based solutions entails. From architectural values related to reusability and transparency to those more focused on the end user such as consistency and continuity of use, including intrinsic values in development such as productivity, simplicity and comfort.

Nevertheless, despite of these advances, there are still some barriers that must be overcome. When catalogs of components are built, generally, components are designed according to the particular needs that are associated with the immediate problem that must be solved. This fact translates into a problem of effective reuse in the long term compromising the maintenance of the components within the catalog.

This is, however, a consequence of the component-oriented software development. To mitigate the problems of limited reusability we must make it possible for the components to be dynamically transformed at runtime to fit into new architectural contexts of use different from those for which they were originally designed. The essence will reside in the catalog pieces but its exact morphology, expressed in terms of properties, methods, types of events etc., can be changed to face the specific requirements associated with a new context of use.

Chameleon, in this sense, does not seek to define a new component model that competes with those established by the development frameworks that are currently used. On the contrary, it offers a collection of simple capabilities to adapt components built by means of the standards or any of these frameworks in adaptive solutions. Whether you are a developer of standard Web components or you work with Vue, React, Angular, Polymer, or any other frontend framework, Chameleon is your solution to improve your development experience and create adaptive architectures.

## Chameleon Roles

The development of Component-based adaptive architectures is easily explained from the roles involved in its development, the activities those roles perform and the set of artifacts that each of these roles creates. Throughout these sections we will go deep these three aspects.

<figure>
  <img src="../../resources/markdowns/figures/Development/Overview.01.png">
  <figcaption>
    Chameleon Roles. The development processes of component-based adaptive architectures using Chameleon can be described in terms of 3 roles of technical specialization.
  </figcaption>
</figure>

When we start an adaptive architectures development process, we can distinguish 3 technical specialization roles that are involved in different activities. Throughout this section we describe the responsibility of each of these roles.

 - *Component Designer.* Frank is our component expert. Their responsibility is to attend to the frontend needs of the organization and give a satisfactory response to them. Particularly, when Frank receives a request from developers in a project, he devises a solution and shape it in the form of one or several components that constitutes a correct solution to be contributed to the corporate catalog.

 - *Adaptation Designer.* Diana is our adaptation expert. As an experienced developer, Diana understands how components within the catalog should be transformed in different ways to fit the several architectural contexts where they are to be used. As such, she is responsible to define different adaptive strategies as Chameleon extensions to be conveniently installed on different components.

 - *Product Designer.* Finally, George is our product specialist. He is in charge of creating a continuous and seamless user experience that fits the client's demands. In essence, their responsibility is to create proposals for composition of the components designed by Fran and with the help of the adaptation logic that Diana provides to make the composition process easier, more comfortable and more fluid.

The above is a role-based a description where each role can be performed by different persons in different moments in time. Nevertheless, for the sake of simplicity, throughout this documentation we assume that Frank is our component developer, Diana is our adaptive extension expert and Jorge is our product builder responsible for create final solutions by means of creating adaptive components-based architectures.

## Chameleon Products

From a productive point of view, adaptive architectures can be described as an evolutionary extension of conventional component-based architectures. In particular, typical ways to adapt components as valid solutions for composition problems appearing one and again during development can be encapsulated as reusable adaptive extensions using Chameleon. Following, we go deep in the different set of artifact we use when create an adaptive architectures.

- *Components.* As expected, the main building blocks in component-based adaptive architectures are components. Each component provides a proper solution to a type of problem appearing recurrently during the construction process. By contributing to the corporative catalog with well-formed solutions as reusable components the development experience becomes progressively simpler and straightforward.

- *Extensions.* The ways in which components can be transformed to fit new architectural contexts of use are limited and well known. In addition, this adaptation logic uses to be often complex to develop and express. For these reasons it is convenient to encapsulate transformation logic as reusable adaptive extension. The advantage is twofold. Firstly, the encapsulation hides the details and simplifies the processes of use. Secondly, catalogs of extensions can be created and exposed as canonical adaptation solutions to be reused in different types of scenarios.

- *Extension Models.* Adaptive logic that is required to be applied within a domain has a limited degree of variation but, ultimately, depends on the characteristics and needs of that domain. However, the installing strategies used to apply adaptive logic on a target component are usually not as variant. Chameleon offers different adaptation models providing a fixed installing implementation. That allow the extension developer to focus on defining the adaptation logic and delegate the installation process to the framework.

In addition to all of the above, you can also define your own extension models. However, this is a non-usual advanced use of the framework. Of course, all the aforementioned types of artifacts should be properly integrated into the context of your architecture. For example, if you are developing a front-end solution based on `Angular`, your extensions will be applied to components that operate with services organized into modules. Nevertheless, these particularities are not a problem for Chameleon since the framework works at the basis level of the capabilities provided by the JavaScript language.

## Chameleon Activities

Once known the specialization roles used in Chameleon and the collection of artifacts they produce, we can describe the fundamental activities that must be carried out when creating adaptive solutions. Although some of the following activities can be undertaken in any order or in parallel, for the sake of simplicity we describe them as a sequential workflow

- *Domain Analysis.* The first activity to create component-based solutions is to find out which kinds of components are required within your domain and what are their general responsibilities. As a result, a catalog of identified candidate components should be obtained in order to drive the subsequent activities.

- *Domain Design.* Once candidate components have been found a specific architecture must be designed over the domain. The domain architecture specifies how components fit to different contracts and how they can be combined in order to create powered solutions. In solid architectures this activity revolves around the definition of segregated interfaces, the identification of polymorphic extension points and dependency inversion. In adaptive architectures, nevertheless, improved results can be achieved by identifying the proper adaptive extension logic to transform components in order to cover the requirements within the domain.

- *Extension Development.* From the previous activity, the domain transformation logic has been identified and it has been arranged according to a set of adaptive extensions. Each extension represents a properly named adaptive metaphor within the domain. During this activity, extension experts start to develop these extensions as reusable artifacts to be contributed to the extension catalog.

- *Component Development.* Once extensions have been developed, component experts can start the component development. In adaptive architectures the components are defined by design as an aggregation of profiles working together to support its provided capabilities. Chameleon allows not only to define that profiles as reusable extensions but also provide declarative syntax to add them into the component class during the development process.

- *Product Development.* Up to this moment, domain has been materialized as a catalog of components and adaptive extensions. In this activity, product experts can start to create specific products. In a solid architecture, this activity is focus on how to create a proper fluid and seamless experience by carrying out a proper composition involving the set of components in the catalog. In adaptive architectures, nevertheless, the same can be done by applying adaptive transformation at runtime in order to ease the composition tasks.

- *Domain Refactoring.* During the product development activities, experts can realize that certain component collaborations face interesting requirements within the domain. In that cases the composite and its configuration can be materialized as a coarse-grained component to be reused in different settings.

In essence, the construction of adaptive architectures based on components only incorporates one more step in the usual set of activities. That related to adaptive processes. However, the possibilities working with adaptive architectures are notably enhanced. Throughout the rest of this guide we will go deeper in all of these concepts.


<div class="see-also">
  <div class="controls">
    <a href="doc.html#Architecture:Overview"  class="control previous"></a>
    <a href="doc.html#Development:Components" class="control next"></a>
  </div>
</div>
