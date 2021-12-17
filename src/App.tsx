import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div>
         <div id="nav">
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/login">About</RouterLink>
        </div>
        <RouterView/>
      </div>
    );
  }
});