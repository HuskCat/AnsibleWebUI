<script>
export default {
  name: 'playbookOption',
  props: [],
  data() {
    return {
      playbookName: 'Playbook Name',
      targetHost: 'Hosts',
      taskName: 'Task Name',
      moduleName: 'Module Name',
      save: 'Playbook Saved',
      run: 'Running Playbook'
    }
  },
  methods: {
    savePlaybook() {
      // TODO: save codeblock to file
      return alert(this.save)
    },
    runPlaybook() {
      // TODO: console run ansible-playbook
      return alert(this.run + ' "' + this.playbookName + '"')
    }
  },
  computed: {
    // ...
  },
  components: {
    // ...
  }
}
</script>

<template>
  <div class="playbook-generation">
    <input type="text" v-model="playbookName" />
    <div class="playbook-generation-modify">
      <div class="playbook-generation-options"><!-- TODO: Vars here--></div>
      <button class="addButton" type="button" @click="addVars">Add variables</button>
    </div>
    <input type="text" v-model="targetHost" />
    <div class="playbook-generation-modify">
      <div class="playbook-generation-options">
    <input type="text" v-model="taskName" />
    <input type="text" v-model="moduleName" /><!-- TODO:Set module list dropdown menu -->
    <!-- TODO:Add module options -->
    <!-- TODO: New tasks here--></div>
    <button class="addButton" type="button" @click="addTask">New tasks</button></div>
    <div class="playbook-generation-preview">
      <pre v-highlightjs="sourcecode"><code class="yaml">---
- name: {{ playbookName }}
  hosts: {{ targetHost }} <!-- TODO: Show vars here-->
  tasks:
    - name: {{ taskName }}
      {{ moduleName }}:<!-- TODO: Show tasks here--></code></pre>
    </div>
    <div class="playbook-generation-buttons">
      <button type="button" @click="savePlaybook()">Save</button>
      <button type="button" @click="runPlaybook()">Run</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .playbook-generation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .playbook-generation-buttons {
    flex-direction: row;
  }
  .playbook-generation-modify {
    flex-direction: row;
  }
  .playbook-generation-options {
    display: flex;
    flex-direction: column;
  }
  .playbook-generation-preview {
    text-align: start;
    margin: 5px 0px;
  }
  button{
    width:50%;
  }
  button.addButton {
    width: 500px;
  }
  input{
    width: 500px;
  }
}
</style>
