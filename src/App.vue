<template>
  <div id="app">
     <header id="header" class="header gradient">
        <h1>vue-clipboards</h1>
        <h2>this is vue2.0 clipboards!</h2>
     </header>
     <main class="main">
        <h1>Install</h1>
        <p>You can get it on npm.</p>
        <pre class="pretxt"><button class="btn" v-clipboard="copyData"></button><code class="codetxt">{{eventScript}}</code></pre>
        <h1>Usage</h1>
        <p>how to use</p>
        <pre class="pretxt"><button class="btn" v-clipboard="usageHTML"></button><code class="codetxt">{{usageHTML}}</code></pre>
        <pre class="pretxt"><button class="btn" v-clipboard="usageScript"></button><code class="codetxt">{{usageScript}}</code></pre>
     </main>
  </div>
</template>

<script>
import { usageScript,usageHTML } from './code';

export default {
  name: 'app',
  data(){
    return {
        eventScript:'npm install vue-clipboards --save',
        usageHTML,
        usageScript
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
.main{width:640px;margin: 0 auto;}
.main h1{color:#1BC1A1;font-size: 30px;padding-top: 80px;font-weight: 600;}
.main p{color: #333;font-size: 17px;line-height: 1.5;margin-bottom: 15px;}
.pretxt{position: relative;overflow: visible;margin-bottom: 15px;width: 100%;}
.codetxt{display: block;overflow-x: auto;color:#24292e;padding: 0.5em;font-size: 14px;line-height: 20px;background: #f8f8f8;}
.main .btn{position: absolute;right: 4px;top: 4px; width: 26px;height: 26px;background-color: #eee;background-image: linear-gradient(#fcfcfc, #eee);border: 1px solid #d5d5d5;cursor: pointer;display: inline-block;font-size: 14px;font-weight: 600;line-height: 20px;white-space: nowrap;user-select: none;background-repeat: repeat-x;background-position: -1px -1px;background-size: 110% 110%;vertical-align: middle; -webkit-appearance: none;-moz-appearance: none;appearance: none;border-radius: 3px;opacity: 0; transition: opacity .3s ease;}
.main .btn:before{content: '';display: block;width: 26px;height: 26px;background: url('./assets/clippy.svg') center center no-repeat;background-size: 14px;vertical-align: top;}
.pretxt:hover .btn{opacity: 1;}
</style>
