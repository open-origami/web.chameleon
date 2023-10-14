# Chameleon Metadata

<p class="lead">Chameleon Artifacts & Metadata Summary</p>

### Component

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
</table>

### Extended Component

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
  <tr>
    <td>Core.Extensions.Pending</td>
    <td>Pending extensions</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr>
    <td>Core.Extensions.Installed</td>
    <td>Installed extensions</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr>
  <tr>
    <td><span class="indent"></span>MExt.core</td>
    <td>The target object</td>
    <td>{...}</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.provider</td>
    <td>The extension provider</td>
    <td>{...}</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
</table>

### Extended Component with Aspect

<table>
  <tr class="inherited">
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Pending</td>
    <td>Pending extensions</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Installed</td>
    <td>Installed extensions</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.core</td>
    <td>The target object</td>
    <td>{...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.provider</td>
    <td>The extension provider</td>
    <td> {...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.aspect.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.aspect.in</td>
    <td>The incoming features</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.aspect.out</td>
    <td>The outgoing features</td>
    <td>Object</td>
  </tr>
</table>

### Extended Component with Mixin

<table>
  <tr class="inherited">
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Pending</td>
    <td>Pending extensions</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Installed</td>
    <td>Installed extensions</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.core</td>
    <td>The target object</td>
    <td>{...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.provider</td>
    <td>The extension provider</td>
    <td> {...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.mixin.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.mixin.in</td>
    <td>The incoming features</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.mixin.out</td>
    <td>The outgoing features</td>
    <td>Object</td>
  </tr>
</table>

### Extended Component with Role

<table>
  <tr class="inherited">
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Pending</td>
    <td>Pending extensions</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Installed</td>
    <td>Installed extensions</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.core</td>
    <td>The target object</td>
    <td>{...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.provider</td>
    <td>The extension provider</td>
    <td> {...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.role.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.role.lCycle</td>
    <td>The Lifecycle model</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.role.engine</td>
    <td>The Lifecycle engine</td>
    <td>Object</td>
  </tr>
</table>

### Extended Component with Subject

<table>
  <tr class="inherited">
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Pending</td>
    <td>Pending extensions</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Installed</td>
    <td>Installed extensions</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.core</td>
    <td>The target object</td>
    <td>{...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.provider</td>
    <td>The extension provider</td>
    <td> {...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.subject.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.subject.points</td>
    <td>The entry points</td>
    <td>[String, ...]</td>
  </tr>
</table>

### Extended Component with Trait

<table>
  <tr class="inherited">
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Component</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Pending</td>
    <td>Pending extensions</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Pending</td>
    <td>Pending extensions</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr class="inherited">
    <td>Core.Extensions.Installed</td>
    <td>Installed extensions</td>
    <td>[MExt, ...]</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.core</td>
    <td>The target object</td>
    <td>{...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.class</td>
    <td>The extension class</td>
    <td>class Ext {}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.provider</td>
    <td>The extension provider</td>
    <td> {...}</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.isOn</td>
    <td>Active status Checker </td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.on</td>
    <td>Switch On Command</td>
    <td>Function</td>
  </tr>
  <tr class="inherited">
    <td><span class="indent"></span>MExt.off</td>
    <td>Switch Off Command</td>
    <td>Function</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.trait.locus</td>
    <td>Where execution is bound</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.trait.in</td>
    <td>The incoming features</td>
    <td>Object</td>
  </tr>
  <tr>
    <td><span class="indent"></span>MExt.trait.out</td>
    <td>The outgoing features</td>
    <td>Object</td>
  </tr>
</table>

### Regular Extension

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr>
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr>
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
</table>

### Model Driven Extension

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
  <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
  <tr>
    <td>Extension.Model</td>
    <td>The extension model class</td>
    <td>Class</td>
  </tr>
  <tr>
    <td>Extension.Provider</td>
    <td>The generated regular extension class</td>
    <td>Class</td>
  </tr>
</table>

### Aspect Driven Extension

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
    <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Model</td>
    <td>The extension model class</td>
    <td>Class</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Provider</td>
    <td>The regular extension class</td>
    <td>Class</td>
  </tr>
  <tr>
    <td>Extension.Aspect.Hooks</td>
    <td>The collection of hooks</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.exp</td>
    <td>The regular expression</td>
    <td>String</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.hook</td>
    <td>The type of Hook</td>
    <td>String</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.handler</td>
    <td>The extension member method</td>
    <td>Function</td>
  </tr>
</table>

### Mixin Driven Extension

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
    <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Model</td>
    <td>The extension model class</td>
    <td>Class</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Provider</td>
    <td>The regular extension class</td>
    <td>Class</td>
  </tr>
    <tr>
    <td>Extension.Mixin.Policies</td>
    <td>The collection of policies</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.key</td>
    <td>The name of the target method</td>
    <td>String</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.policy</td>
    <td>The type of the Policy</td>
    <td>String</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.handler</td>
    <td>The target method</td>
    <td>Function</td>
  </tr>
</table>

### Role Driven Extension

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
    <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Model</td>
    <td>The extension model class</td>
    <td>Class</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Provider</td>
    <td>The regular extension class</td>
    <td>Class</td>
  </tr>
    <tr>
    <td>Extension.Role.States</td>
    <td>The collection of states</td>
    <td>[State, ...]</td>
  </tr>
  <tr>
    <td><span class="indent"></span>State.key</td>
    <td>The name of the state</td>
    <td>String</td>
  </tr>
  <tr>
    <td><span class="indent"></span>State.begin</td>
    <td>True if the state is initial</td>
    <td>true|false</td>
  </tr>
  <tr>
    <td><span class="indent"></span>State.end</td>
    <td>True if the state is final</td>
    <td>true|false</td>
  </tr>
  <tr>
    <td><span class="indent"></span>State.guards</td>
    <td>The guards for a state</td>
    <td>[String...]</td>
  </tr>
  <tr>
    <td><span class="indent"></span>State.routes</td>
    <td>The routes for a state</td>
    <td>[{guard, to}...]</td>
  </tr>
  <tr>
    <td><span class="indent"></span>State.action</td>
    <td>The target method</td>
    <td>Function</td>
  </tr>
</table>

### Subject Driven Extension

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
    <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Model</td>
    <td>The extension model class</td>
    <td>Class</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Provider</td>
    <td>The regular extension class</td>
    <td>Class</td>
  </tr>
  <tr>
    <td>Extension.Subject.Points</td>
    <td>The set of entry points</td>
    <td>[String, ...]</td>
  </tr>
</table>

### Trait Driven Extension

<table>
  <tr>
    <th>Key</th>
    <th>Description</th>
    <th>Value / Type</th>
  </tr>
    <tr class="inherited">
    <td>Core.Id</td>
    <td>The class Id</td>
    <td>String</td>
  </tr>
  <tr class="inherited">
    <td>Core.Family</td>
    <td>The family of the artifact</td>
    <td>Extension</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Model</td>
    <td>The extension model class</td>
    <td>Class</td>
  </tr>
  <tr class="inherited">
    <td>Extension.Provider</td>
    <td>The regular extension class</td>
    <td>Class</td>
  </tr>
    <tr>
    <td>Extension.Mixin.Policies</td>
    <td>The collection of policies</td>
    <td>[Ext, ...]</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.key</td>
    <td>The name of the target method</td>
    <td>String</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.policy</td>
    <td>The type of the Policy</td>
    <td>String</td>
  </tr>
  <tr>
    <td><span class="indent"></span>Ext.handler</td>
    <td>The target method</td>
    <td>Function</td>
  </tr>
</table>
