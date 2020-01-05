import C from "./CClass.js"

const typing_speed_test = {
  "overview":{
    contents: [

// TYPING SPEED TEST OVERVIEW
new C("header", "Typing Speed Test"),
new C("text", "<div> Application that allows user to test his typing skills/speed, user can change settings to suit his needs. After typing user can look at statistics of his typing. </div>"),
new C("text", "<div> I created it mainly to get familiar with Vue, so used stack isn't complicated - few directory-components with Bootstrap + CSS stylings, without any backend. Here's: <a href='https://github.com/Dolidodzik/typingspeedtest' target='_blank'> GitHub project</a>. </div>"),

new C("header", "Code structure overview"),
new C("text", "Styling is pretty simple, I just used simple bootstrap and @media queries in CSS."),
new C("javascript", `// Project tree view
// I skipped stuff that isn't necessarily important here (like node_modules)

├── babel.config.js
├── package.json
├── public
│   ├── favico.ico
│   └── index.html
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   └ // here are component directories
│   └── main.js
└── vue.config.js`),

new C("javascript", `// That's how component tree looks like, example of settings component
settings/
├── index.vue
├── settings.css
├── settings.html
├── settings.js
└── settings.spec.js`),

new C("text", 'Most of that is pretty straightforward to understand just by reading names if you are familiar with vue, but I will explain some things that are needed to understand this particular project. For example /src/main.js:'),
new C("javascript", `// Importing needed libraries (Bootstrap and VueScrollTo - https://www.npmjs.com/package/vue-scrollto)
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.use(BootstrapVue)

// Importing and mounting app
import App from './App.vue'
new Vue({
render: h => h(App),
}).$mount('#app')`),

new C("text", '"main.js" refers to App, that is imported from /src/App.vue,'+"it's parent/wrapper components for others."),
new C("html", `<!-- template that puts components into DOM -->
<template>
<div id="app" class="container">
  <settings/>
  <typing/>
  <end_screen/>
</div>
</template>`),
new C("javascript", `// importing children components
import settings from './components/settings/index.vue';
import typing from './components/typing/index.vue';
import end_screen from './components/end_screen/index.vue';

// exporting app component to import it in main.js
export default {
name: 'app',
components: {
  settings,
  typing,
  end_screen,
},
}`),

new C("text", 'Another things is every component organization - every component has a separate folder inside /src/components/<COMPONENT_NAME>, and there are bunch of files, one of them is "index.vue",' + " it's like header file for the whole component, that is included in App.vue. The individual components will be descriped in next sections."),
new C("html", `<!-- example of some index.vue -->
<template src="./settings.html"></template>
<script src="./settings.js"></script>
<style src="./settings.css" scoped lang="css"></style>`),
new C("html", `<!-- Every component has element with specific id, that is used to scroll user to needed component.)-->
<!-- For example: -->
<section class="typing row" id="typing">`),


    ]
  },

  // TYPING COMPONENT SETTINGS COMPONENT
  "settings_component":{
    contents: [

new C("header", "First component, first view - settings"),
new C("text", "<div> This component is responsible for choosing settings and sending them, and scrolling user down to typing component. </div>"),

new C("header", "Managing settings data with v-model:"),
new C("javascript", `// data() of this component, declaration of needed settings
settings: {
 number_of_words: 120,
 number_of_seconds: 60,
}` ),
new C("html", `<!-- inputs inside simple .html template, "v-modeled" to settings data-->
<input type="number" class="col-12 input" value = "60"
 min="1" v-model="settings.number_of_seconds" />

<input type="number" class="col-12 input" value="10"
 min="10" v-model="settings.number_of_words" />` ),

new C("header", '"Submiting" form with settings data to next component:'),
new C("javascript", `// Calling this function will emit settings data to typing component
scroll_to_typing: function(){
 this.$root.$emit('settings-submit', this.settings);
}`),
new C("html", `<!-- clicking on this element will call above function, and v-scroll-to propety will scroll user to element with id="typing" -->
<input type="submit" value="Start typing!" v-on:click="scroll_to_typing()" v-scroll-to="'#typing'" />`),
    ]
  },
  "typing_component":{
    contents: [
new C("header", "Second component is typing - most important component here"),
new C("text", "Here user got scrolled after submitting settings in previous component. Here he have to complete typing with selected settings, words are random. What about data()? There are many simple variables, with names that tells a lot, you will be able to see how they are excatly used later Below you can see defaults."),
new C("javascript", `data () {
return {
  typing_words: null,
  typing_words_left: null,

  /* Settings */
  typing_time: 60,
  number_of_words: 120,
  is_typing_started: false,
  typed_seconds: 0,
  current_word_index: 0,
  current_user_text: "",

  /* input text will be red when user typed incorrectly */
  is_current_input_correct: true,
  is_typing_finished: false,

  /* Saved statictics data - this data will be used in next component, to display user details about his typing */
  ssdata: {
    max_time: 0,
    typed_in: 0,
    max_words: 0,
    typed_words: 0,
    actions: 0,
    incorrectly_typed_words: 0,
    backspaces_pressed: 0,
    /* just a copy of this.typing_words */
    typing_words_list: 0,
 }
}`),

/* Template */
new C("header", "How template looks like?"),
new C("html", `<!-- That's how area with text that user have to type looks like -->

<div name="name" class="col-12 text"
v-bind:style = "[is_typing_finished ? {'border-color': '
#c91d12'} : {'background-color': 'inherit'}]"
>
 <!-- Looping over words that are left -->
 <span v-for="(word, index) in typing_words_left">

    <!-- This condition marks FIRST world of text with underline and increased font weight -->
    <span v-if="index == 0" style="font-weight: 700; text-decoration: underline;">
      {{ word }}
    </span><span v-else>
      {{ word }}
    </span>

 </span>

</div>`),
new C("html", "<!-- Displaying user how much time he have yet -->\n<div class=\"timer\"> {{ typing_time-typed_seconds }} </div>\n\n<!-- Scrolling to div with id=\"endscreen\"-->\n<div class=\"endscreen-link\" v-scroll-to=\"\'#endscreen\'\">Take me to results! <br/>(If you finished typing) </div>"),

/* JS Code */
new C("header", "How does this component work? JS explanation"),
new C("text", "It's the most complex/important part of this app. Everything starts from init_typing() it's called when settings are submitted and when app loaded first time (to init typing with defaults, so in case user just scroll down instead of pressing button in settings, typing will work well anyway). This function is responsible for (re)initialazing/reseting typing, it bassicaly backs data to defaults. Next essential parts, are loop that calls CountDown() in interval of 1 second (this function is mainly responsible for incrementing typed_seconds), and TextOnchange(), that contains a lot of stuff, required to manage typing and save statictics to ssdata. Here's the code: "),
new C("javascript", `// This interval is part of mounted(), so calling CoundDown starts practically when user opens page
this.$nextTick(function () {
  window.setInterval(() => {
      this.CountDown();
    },1000);
  })

// If typing is started every second increment timer number, and stop typing when time is gone
CountDown: function(){
 if(this.is_typing_started){
    this.typed_seconds++;
    if(this.typed_seconds >= this.typing_time){
       this.finish();
 }
}`),
/* TextOnChange() */
new C("javascript", `// This function is bined to input using v-on:keyup, see section under header "How template looks like?"
TextOnchange: function(evt){

 this.ssdata.actions++;

 if(!this.is_typing_started){
    this.is_typing_started=true;
 }

 if(evt){
    if(evt.code == "Space"){
       this.next_word();
    }else if(evt.key == "Backspace"){
       this.ssdata.backspaces_pressed++;
    }
 }

 let user_text_length = 0;
 if(this.current_user_text){
    user_text_length = this.current_user_text.length
 }
 let cut_current_word = this.current_word.substring(0, user_text_length);
 if(!this.current_user_text){
    this.is_current_input_correct = true;
 }else{
    if( this.current_user_text[this.current_user_text.length -1] == " " ){
   this.is_current_input_correct = true;
    }else{
       if(cut_current_word == this.current_user_text){
           this.is_current_input_correct = true;
       }else{
          this.is_current_input_correct = false;
       }
    }
 }
}`),

    ]
  },
}

export default typing_speed_test;
