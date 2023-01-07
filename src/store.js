import { reactive } from "vue";

export const store = reactive({
  searchInput: "",
  updateSearchInput(value) {
    this.searchInput = value;
  },
});
