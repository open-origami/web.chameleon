# Why Chameleon

<p class="lead">A short introduction to adaptive architectures</p>

The challenge of developing component-based solutions arises when we want our architecture to adapt to new requirements and use conditions not foreseen during the design phase. For example, we want our component-based product to adapt or evolve dynamically to adapt to the preferences of each client, to the tasks that need to be carried out at each moment and even to the characteristics of the context such as ambient light conditions, temperature or battery charge.

The way to face these requirements is usually resolved by means of substitution. Indeed, a web component is a piece of closed software that can always be replaced by another equivalent. However, sometimes, instead of replacing one component with another, it is better to adapt it by means of the application of elementary transformations. This alternative approach gives shape to the adaptive architectures of components that Chameleon supports.

## Solid Architectures

In a solid architecture, composition strategies based on substitution are applied. Each component is an artifact that can be replaced by any other one being structurally equivalent. That is, a component with the same collection of capacities that the substituted component in order to continue collaborating with the rest of the components of the environment.

When designing solid architectures, it is common to create different implementations of components within each substitution point. The structural equivalence between them is maintained by design. In this way, the entire system continues to operate properly after each replacement. However, changes introduced by the substitution affect the overall behavior of the system. This is how the adaptation is supported in this type of architectures.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Introduction.01.png">
  <figcaption>Solid Architectures. Components are designed as substitutable artifacts to fit properly in each foreseen architectural context.
  </figcaption>
</figure>

The substitution strategy in component-based architectures makes a lot of sense. First, you must select a component of the catalog being compatible with that you want to replace and then the substitution is applied. To facilitate this task, catalogs are usually organized in terms of structural equivalence maintained by components with each other and how they should be connected to create more complex compositional structures.

This type of design strategy is a win approach. At the end, it is based on object oriented fundamental extensively proven during decades. However, this approach is not free of limitations. This has led to the emergence of alternative adaptation strategies that can be used in a complementary way.

## Adaptive architectures

When we create components, we often do it a lot before knowing the architectural context in which each of them is to be use. We do not know where they take place within our projects. We have not a clear idea of what the goals and particular requirements of these projects will be. We do not even know what types of products we are going to build. Among others, we create layout components, navigation components or data access components in the hope that they will be useful later on.

Hence, the design of these components cannot be guided by project criteria. We do not decide what structure a component will have depending on its use within a project, but we assign it to the component by applying good development practices and universal design principles. This is not a bad practice but a natural consequence of component-oriented architectures. Components catalogs are designed oriented to domain and not to project.

This approach implies important advantages in reusability and productivity. However, it largely invalidates the starting premises of solid architectures. As a consequence of the construction process, the catalog of components will often have not an suitable structure to be applied directly to the target architectures. In addition, these architectures change too often to consider maintaining an alignment between the components in the catalog and project architectures.

<figure>
  <img src="../../resources/markdowns/figures/Introduction/Introduction.02.png">
  <figcaption>Adaptive Architectures. Components are adapted by means of basic transformations to fit in each architectural context of use.
  </figcaption>
</figure>

To face this situation, it is possible to transform components on the fly to fit the target architecture. The set of transformations that must be carried out to achieve this match is usually recurrent and quite elementary. Therefore, it is interesting to materialize these transformations in the form of reusable logic governed within a catalog.

Chameleon is a worthy solution to address this problem. It is a development framework to assists in the process of building adaptive extensions that can be managed as reusable entities to be installed on components that need to be adapted. So according to Chameleon's perspective, an architecture of adaptive components will consist of a set of components and another set of extensions. Both collections are artifacts designed for the specific domain over which they operate.

<div class="see-also">
  <div class="controls">
    <a href="doc.html#Start:Overview"       class="control previous"></a>
    <a href="doc.html#Motivations:Business" class="control next"></a>
  </div>
</div>
