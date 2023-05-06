<script>
export default {
  name: "playbookOption",
  props: [],
  data() {
    return {
      playbookName: "Playbook Name",
      targetHost: "Hosts",
      taskName: "Task Name",
      moduleName: "Module Name",
      save: "已儲存",
      run: "正在執行劇本"
    }
  },
  methods: {
    savePlaybook() {
      // TODO: save codeblock to file
      return alert(this.save)
    },
    runPlaybook() {
      // TODO: console run ansible-playbook
      return alert(this.run + '"' + this.playbookName + '"')
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
    <input type="text" v-model="targetHost" />
    <input type="text" v-model="taskName" />
    <input type="text" v-model="moduleName" /><!-- TODO:Set module list dropdown menu -->
    <!-- TODO:Add module options -->
    <pre v-highlightjs="sourcecode">
      <code class="javascript">
---
- name: {{ playbookName }}
  hosts: {{ targetHost }}
  tasks:
    - name: {{ taskName }}
      {{ moduleName }}:
      </code>
    </pre>
    <div class="playbook-generation-buttons">
      <button type="button" @click="savePlaybook()">Save</button>
      <button type="button" @click="runPlaybook()">Run</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .playbook-generation {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .playbook-generation-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
