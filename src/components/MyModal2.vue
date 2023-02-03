<template>
    <div v-if="showModal" class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">Default header</slot>
        </header>
        <section class="modal-body">
          <slot name="body">Default body</slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="showModal = false">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
      };
    },
  };
  </script>
  
  <style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    width: 80%;
    max-width: 500px;
  }
  
  .modal-header,
  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }
  </style>