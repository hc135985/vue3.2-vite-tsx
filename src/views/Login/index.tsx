import { defineComponent, ref } from 'vue';
import { ElButton, ElForm, ElFormItem, ElInput, ElIcon, ElMessage  } from 'element-plus';
import { useRouter } from 'vue-router';
import { UserFilled, Briefcase } from '@element-plus/icons-vue';
import './index.less';

interface FormData {
  username: string,
  password: string
}

const DEFAULT_USERNAME = 'hc';
const DEFAULT_PASSWORD = '123456';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();
    const userRules = [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      }
    ]
    const pwdRules = [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur',
      }
    ]
    const formData = ref<FormData>({
      username: '',
      password: ''
    });

    const formRef = ref<any>(null)

    const changeForm = (key: string,e: string) => {
      formData.value[key] = e
    }

    const submit = () => {
      console.log(formRef)
      formRef.value.validate((valid: boolean) => {
        if (valid) {
          const { username, password } = formData.value;
          if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            localStorage.setItem('token', '成功登陆！')
            router.push('/');
          } else {
            ElMessage.error('用户名或者密码错误')
          }
        } else {
          return false
        }
      })
    }
    console.log(formData)
    return () => (
      <div class="login-wrap">
        <div class="login-body">
          <div class="login-title">
            登录
          </div>
          <ElForm
            labelWidth="80px"
            model={formData}
            ref={e => formRef.value = e}
          >
            <ElFormItem
              label="用户名"
              prop="username"
              rules={userRules}
            >
              <ElInput
                modelValue={formData.value.username}
                onInput={e => changeForm('username', e)}
                clearable
                prefixIcon={<ElIcon><UserFilled /></ElIcon>}
              />
            </ElFormItem>
            <ElFormItem
              label="密码"
              prop="password"
              rules={pwdRules}
            >
              <ElInput
                modelValue={formData.value.password}
                onInput={e => changeForm('password', e)}
                clearable
                prefixIcon={<ElIcon><Briefcase /></ElIcon>}
              />
            </ElFormItem>
            <ElFormItem>
              <ElButton onClick={submit}>登录</ElButton>  
              <span> 用户名：{DEFAULT_USERNAME}</span>
              <span> 密码：{DEFAULT_PASSWORD}</span>
            </ElFormItem>
          </ElForm>
        </div>
      </div>
    );
  }
});