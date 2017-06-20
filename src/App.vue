<template>
  <div id="app">
     <header id="header" class="header gradient">
        <h1>vue-clipboards</h1>
        <h2>this is vue2.0 clipboards!</h2>
     </header>
     <main class="main">
        <h1>Install</h1>
        <p>You can get it on npm.</p>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="npmCommand"></button><code class="codetxt">{{npmCommand}}</code></pre>
        <h1>Usage</h1>
        <h2>copy text</h2>
        <p>how to use</p>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="usageHTML"></button><code class="codetxt">{{usageHTML}}</code></pre>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="usageScript"></button><code class="codetxt">{{usageScript}}</code></pre>
        <h1>Event</h1>
        <p>show some user feedback, success or error</p>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="eventHTML" @success="copySuccess" @error="copyError"></button><code class="codetxt">{{eventHTML}}</code></pre>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="eventScript" @success="copySuccess" @error="copyError"></button><code class="codetxt">{{eventScript}}</code></pre>
        <h2>cut text</h2>
        <div class="example-box">
            <button class="btn" title="cut" v-clipboard="cutData" @success="cutSuccess"></button>
            <input type="text" name="" v-model="cutData">
        </div>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="cutHTML"></button><code class="codetxt">{{cutHTML}}</code></pre>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="cutScript"></button><code class="codetxt">{{cutScript}}</code></pre>
        <h1>Multiple</h1>
        <p>You need to bind an key, when you use vue-clipboards multiple times.</p>
        <div class="example-box">
            <div class="listbtn" v-for="(item,key) in copymoreData">
                <button class="btn2" title="click copy" v-clipboard="item" :key="key">{{item}}</button>
            </div>
            <input type="text" class="inp2" name="" placeholder="paste you copy text">
        </div>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="copymoreHTML"></button><code class="codetxt">{{copymoreHTML}}</code></pre>
        <pre class="pretxt"><button class="btn" title="copy" v-clipboard="copymoreScript"></button><code class="codetxt">{{copymoreScript}}</code></pre>
        <br><br><br>
        <p class="notes">*study this from https://github.com/zhuowenli/vue-clipboards/</p>
     </main>
  </div>
</template>

<script>
import { usageScript,usageHTML,eventHTML,eventScript,cutHTML,cutScript,copymoreHTML,copymoreScript } from './code';

export default {
    name: 'app',
    data(){
        return {
            npmCommand:'npm install vue-clipboards --save',
            usageHTML,
            usageScript,
            eventHTML,
            eventScript,
            cutData:'cut data',
            cutHTML,
            cutScript,
            copymoreData:['copydata1','copydata2','copydata3'],
            copymoreHTML,
            copymoreScript
        }
    },
    methods:{
        copySuccess(e){
            console.log(e);
        },
        copyError(e){
            console.log(e);
        },
        cutSuccess(e){
            this.cutData=''
        }
    }
}
</script>

<style>
*{margin:0;padding:0;outline: 0; box-sizing: border-box;font: 12px "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;}
.header {padding: 90px 0;color: #fff;text-align: center;}
.gradient {
    background: #4cd964;
    background: -moz-linear-gradient(45deg, #4cd964 0%, #5ac8fa 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, #4cd964), color-stop(100%, #5ac8fa));
    background: -webkit-linear-gradient(45deg, #4cd964 0%, #5ac8fa 100%);
    background: -o-linear-gradient(45deg, #4cd964 0%, #5ac8fa 100%);
    background: -ms-linear-gradient(45deg, #4cd964 0%, #5ac8fa 100%);
    background: linear-gradient(45deg, #4cd964 0%, #5ac8fa 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4cd964', endColorstr='#5ac8fa', GradientType=1 );
    margin: 0 auto; }
.header h1{font-size:50px;}
.header h2{font-size:20px;font-weight: normal;padding-top: 15px;}
.main{width:1000px;margin: 0 auto;}
.main h1{color:#1BC1A1;font-size: 30px;padding-top: 80px;font-weight: 600;}
.main h2{text-align: center;padding:30px 0;font-size: 22px;color: #666;}
.main p{color: #333;font-size: 17px;line-height: 1.5;margin-bottom: 15px;}
.pretxt{position: relative;overflow: visible;margin-bottom: 15px;width: 100%;}
.codetxt{display: block;overflow-x: auto;color:#24292e;padding: 0.5em;font-size: 14px;line-height: 20px;background: #f8f8f8;}
.main .btn{position: absolute;right: 4px;top: 4px; width: 26px;height: 26px;background-color: #eee;background-image: linear-gradient(#fcfcfc, #eee);border: 1px solid #d5d5d5;cursor: pointer;display: inline-block;font-size: 14px;font-weight: 600;line-height: 20px;white-space: nowrap;user-select: none;background-repeat: repeat-x;background-position: -1px -1px;background-size: 110% 110%;vertical-align: middle; -webkit-appearance: none;-moz-appearance: none;appearance: none;border-radius: 3px;opacity: 0; transition: opacity .3s ease;}
.main .btn:before{content: '';display: block;width: 26px;height: 26px;background: url('./assets/clippy.svg') center center no-repeat;background-size: 14px;vertical-align: top;margin: 0 auto;}
.pretxt:hover .btn{opacity: 1;}
.example-box{width:100%;padding: 20px 5%;border: 1px solid #ddd;position: relative;margin-bottom: 20px;}
.example-box .btn{opacity: 1;width: 35px;height: 35px;top:20px;right: 32px;}
.example-box input{width: 100%;height: 35px;line-height: 35px;padding: 10px;border: 1px solid #ddd;border-radius: 3px;box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);font-size: 14px;}
.example-box .listbtn{display: inline-block;margin: 0 10px;}
.example-box .btn2{width:100px;height: 35px;line-height: 35px;background: #ddd;font-size: 14px;border: 0;border-radius: 3px;cursor: pointer;}
.example-box .inp2{width:400px;display: inline-block;margin-left: 50px;}
.main .notes{font-size: 14px;padding: 20px 0 10px;color:#999;}
</style>
