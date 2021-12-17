import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();
    const router = useRouter()
    
    onMounted(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login')
      }
    })

    return () => (
      <>
        <h1>Home</h1>
        <h1>{store.state.title}</h1>
      </>
    );
  }
});