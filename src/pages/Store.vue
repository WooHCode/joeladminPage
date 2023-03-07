<template>
  <div id="app">
    <select v-model="selectedOption1">
      <option disabled value="">Please select one</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>

    <select v-model="selectedOption2">
      <option disabled value="">Please select one</option>
      <option v-for="option in secondOptions" :key="option.value">{{ option.text }}</option>
    </select>

    <button @click="submit()">확인</button>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      alert(this.selectedOption1 + ' ' + this.selectedOption2);
    },
  },
  data() {
    return {
      selectedOption1: '',
      selectedOption2: '',
      options: [
        {
          value: 'option1', text: 'Option 1', suboptions: [
            { value: 'suboption1', text: 'Suboption 1' },
            { value: 'suboption2', text: 'Suboption 2' }
          ]
        },
        {
          value: 'option2', text: 'Option 2', suboptions: [
            { value: 'suboption3', text: 'Suboption 3' }
          ]
        },
        {
          value: 'option3', text: 'Option 3', suboptions: [
            { value: 'suboption4', text: 'Suboption 4' },
            { value: 'suboption5', text: 'Suboption 5' }
          ]
        }
      ]
    }
  },
  computed: {
    secondOptions: function () {
      const selectedOption = this.selectedOption1;
      const matchedOption = this.options.find(option => option.value === selectedOption);
      return matchedOption ? matchedOption.suboptions : [];
    }
  }
};
</script>

<style scoped>
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>