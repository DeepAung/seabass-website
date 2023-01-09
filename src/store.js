import { reactive } from "vue";

export const store = reactive({
  searchInput: "",
  updateSearchInput(value) {
    this.searchInput = value;
  },

  mathPath:
    "https://app.powerbi.com/view?r=eyJrIjoiMDNiMjFiOTktODJhZC00OTQwLTg2MDItMDllYTEwMDc4NDA1IiwidCI6IjQ5YTIwZmY1LTUxZGItNDYzMC05NmNhLTJjOWJiMTJlOTJiNCIsImMiOjEwfQ%3D%3D&pageName=ReportSection5c6c13d0c689b14be980",
});
