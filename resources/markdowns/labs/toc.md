# Lab 01

## A Simple Trait

  In this Lab a Trait Driven Extension is created to control the hide effect
  of a simple view. Click on TShow button to install and uninstall the extension. When installed you can click on the view or hidden area to switch on & switch off effect.

- 4
- 20
- 1

[Start Lab](#Lab.01)

# Lab 02

## Overriding Traits

  In this Lab two Traits with the same contract are created to control different effects on the view. Since they use the @Override policies the last installed effect prevail over the others. Use buttons to install and uninstall extensions and click on the view to check the result.

- 5
- 25
- 2

[Start Lab](#Lab.02)

# Lab 03

## Discarding Traits

  In this Lab the same two Traits of the previous lab are designed. However, in this case we use @Discard policies to manage name collision. As a result the first installed effect prevail over the others being discarded. Use buttons to install and uninstall extensions and click on the view.

- 5
- 25
- 2

[Start Lab](#Lab.03)

# Lab 04

## Composing Traits

  The name collision problems show in the two previous labs can be solved by applying a composition strategy. By applying @After policies, when we install one extension over the previous one, the effects are applied one after the other. Use buttons to install the extensions and click on the view.

- 6
- 30
- 2

[Start Lab](#Lab.04)

# Lab 05

## Orthogonal Subjects

  When you use Subjects instead of Traits name collision problems disappears. In this lab, all trait have been reimplemented as Subjects and they have been installed at once with no problems. Use buttons to switch on and switch off effects provided by each one.

- 7
- 35
- 2

[Start Lab](#Lab.05)

# Lab 06

## Subject Coordination

  This Lab defines the STimer Subject to orchestrate the activation of visual effects supplied by the Subjects created in previous labs. Use the buttons to choose which Subjects to install and observe how they are activated randomly along the time.

- 7
- 35
- 3

[Start Lab](#Lab.06)

# Lab 07

## A Simple Mixin

  In the previous Labs console sentences were added to each extension to trace execution at runtime. This kind of logic can be also expressed by using a single Mixin driven extension for the sake of reusability. Open console and check trace messages.

- 8
- 40
- 1

[Start Lab](#Lab.07)

# Lab 08

## An Interception Mixin

  In this lab we define a new MGuard mixin to control the activation of the previously created visual effects. Subjects will not work if MGuard does not allow it. Press the button to change the environmental conditions making the MGuard mixin to grant the activation.

- 9
- 45
- 2

[Start Lab](#Lab.08)

# Lab 09

## Aspects & Before Interception

  In a previous example a Mixin was defined to manage trace operations. However the most suitable way to extends method behavior is by means of the Aspect Extension Model. Here an ALog is defined. Open console and check trace messages.


- 8
- 40
- 2

[Start Lab](#Lab.09)

# Lab 10

## Aspects & Around Interception

  An Aspect based approach can also be used to implement a basic access permission feature similar to that presented in Lab 8. Here an AGuard Aspect locks the activation of subjects by means of interception mechanisms. Use the button to control the execution.

- 9
- 45
- 3

[Start Lab](#Lab.10)

# Lab 11

## Aspects & Provided Interception

  An Aspect based approach can also be used with provided interception to implement the same access permission feature obtained in the previous Lab. The AGuard works as a required condition to activate each effects. Use the button to control the execution.

- 9
- 45
- 2

[Start Lab](#Lab.11)

# Lab 12

## A Simple Role

  This Lab creates a Role based extension to redefine focus management. The focus is get and lost alternatively when the view is clicked. Certain configured effects have been applied to visually express the changes. Click on the view to check the results.

- 7
- 35
- 2

[Start Lab](#Lab.12)

# Lab 13

## Two Autonomous Roles

  The RFocus role defined in the previous lab can be installed independently on different views. In this way, an autonomous focus management is got for each one. This is a good example of extension reusability. Click on the two views bellow and check the effects.

- 7
- 35
- 2

[Start Lab](#Lab.13)

# Lab 14

## Role Coordintation

  In the previous lab RFocus was applied on both views to get an autonomous focus management. In this lab the RLock role is created to coordinate the views in such manner that when a view gains the focus, the other loses it and vice versa. Click on the views to verify the effect.

- 8
- 40
- 3

[Start Lab](#Lab.14)

# Lab 15

## Role Synchronization

  In this last Lab we add content to the views. View A will play a video whilst view B present snapshots from it timedly. To sync the contents several roles have been created. Use the Play & Stop buttons to control the video play and let check the results.

- 12
- 60
- 3

[Start Lab](#Lab.15)
