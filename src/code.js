
export const usageHTML = '<button v-clipboard="copyData">Copy</button>';
export const usageScript = `import VueClipboards from 'vue-clipboards';

Vue.use(VueClipboards);

new Vue({
    data() {
        return {
            copyData: 'copy data'
        }
    }
});`;
