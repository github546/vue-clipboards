
export const usageHTML = '<button v-clipboard="copyData">Copy</button>';
export const usageScript = `import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards);

export default {
    data() {
        return {
            copyData: 'copy data'
        }
    }
}`;

export const eventHTML=`<button class="btn"
        v-clipboard="copyData"
        @success="copySuccess"
        @error="copyError">
</button>
`;
export const eventScript=`import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards);

export default {
    data(){
        return {
            copyData: 'copy data'
        }
    },
    methods:{
        copySuccess(e){
            console.log(e);
        },
        copyError(e){
            console.log(e);
        }
    }
}
`;

export const cutHTML=`<button class="btn" title="cut"
    v-clipboard="cutData"
    @success="cutSuccess">
</button>
<input type="text" name="" v-model="cutData">
`;
export const cutScript=`import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards);

export default {
    data(){
        return {
            cutData:'cut data'
        }
    },
    methods:{
        cutSuccess(e){
            this.cutData=''
        }
    }
}
`;

export const copymoreHTML=`<div class="listbtn" v-for="(item,key) in copymoreData">
    <button class="btn2" title="click copy" v-clipboard="item" :key="key">{{item}}</button>
</div>
`;
export const copymoreScript=`import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards);

export default {
    data(){
        return {
            copymoreData:['copydata1','copydata2','copydata3']
        }
    }
}
`;
