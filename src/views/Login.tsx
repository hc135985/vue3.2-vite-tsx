import { defineComponent } from 'vue';
import { ElButton } from 'element-plus';
import './login.less';

export default defineComponent({
  name: 'Login',
  setup() {
    return () => (
      <div class='login-wrap'>
        <ElButton>login</ElButton>
      </div>
    );
  }
});