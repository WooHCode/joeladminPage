<template>
  <div>
    <h1>모달 테스트</h1>
    <MyModal v-if="isModalViewed" @close-modal="isModalViewed=false">
    <Itemmodal></Itemmodal>
    </MyModal>
    <button @click="isModalViewed=true">모달열기</button>
  </div>
</template>

<script>
import MyModal from "@/components/MyModal"
import Itemmodal from "@/components/Itemmodal"
export default {
  components: { MyModal,Itemmodal },
  data() {
    return {
      isModalViewed: false,
    };
  },
};
</script>