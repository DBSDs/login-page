import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./main.css";

export default defineComponent({
  name: "App",
  setup() {
    return () => <RouterView />;
  },
});
