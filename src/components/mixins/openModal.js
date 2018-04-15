export const openModal = {
  data() {
    return {
      showModal: false,
      modalNum: 0
    }
  },
  methods: {
    openModal: function(index) {
      this.modalNum = index;
      this.showModal = true;
    }
  }
}
