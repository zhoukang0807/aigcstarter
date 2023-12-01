<script lang="tsx">
import { Ref, ref, onMounted } from 'vue';
import { useBasicStore } from '../engine/stores/basic';
import { showToast } from 'vant'
import { storeToRefs } from 'pinia'
import { Button, Cell, CellGroup } from 'vant';
import { Editor } from 'orillusion-editor'

export default {
  name: "Home",
  setup(props, context) {
    const userId: Ref<string> = ref('');
    const baseStore = useBasicStore();
    const { userId: s_userId } = storeToRefs(baseStore);
    const clickToast = () => {
      showToast("点击了");
    }
    async function demo() {
      const editor = new Editor();
      editor.init();
      // Next 
    }

    onMounted(() => {
      userId.value = s_userId.value
    })

    return () => (
      <div>
        <CellGroup>
          <Cell title="单元格" value="内容" v-slots={{
            title: () => <span>这是用户ID: {userId.value}</span>,
            value: () => <Button onClick={demo} type="primary">主要按钮</Button>
          }} />
        </CellGroup>
      </div>
    )
  }
}
</script>
<style>
@import '../engine/assets/style/black-theme.scss';
@import '../engine/assets/style/white-theme.scss';
</style>

<style lang="scss" scoped>
.ace-theme-black .home-container {
  --background: var(--background-color-1);
}

.home-container {
  width: 100%;
  height: 100%;
  background: var(--background);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PingFang SC;
  color: var(--font-color-1);

  .header {}
}
</style>
