<template>
  <div>
    <div @click="divFn">
      <button @click.stop="buttonFn">{{btn}}</button>
    </div>
    <input type="text" @keyup.enter="submit($event)" />
    <br /><br /><br />
    <span>Message is: {{ message }}</span>
    <br>
    <input type="text" v-model="message" placeholder="edit me" number debounce="500">
    <br /><br /><br />
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames | json }}</span>
    <br /><br /><br />
    <select v-model="selected" multiple style="width: 100px;">
      <option selected>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selected | json }}</span>
    <br /><br /><br />
    <input id="pick" type="checkbox" v-model="pick" v-bind:true-value="a" v-bind:false-value="b" @change="changeFn">
    <label for="pick">pick</label>
    <br /><br /><br />
    <div v-if="show" transition="expand">Hello</div>
    <button @click="show = !show">Toggle</button>
    <br /><br /><br />
    <div v-show="ok" class="animated" transition="bounce">Watch me bounce</div>
    <br />
    <button @click="ok = !ok">Toggle</button>
  </div>
</template>

<script>
export default {
  init () {
  },
  data () {
    return {
      btn: '按钮',
      message: '',
      checkedNames: [],
      selected: [],
      pick: '',
      show: false,
      ok: true,
      transitionName: 'fade'
    }
  },
  ready () {
  },
  methods: {
    divFn () {
      alert('div')
    },
    buttonFn () {
      alert('button')
    },
    submit ($event) {
      alert($event.keyCode)
    },
    changeFn () {
      console.log(this.pick)
    },
    toggleFn () {
      this.show = !this.show
    }
  },
  watch: {
    message () {
      console.log(this.message)
    }
  },
  transition: {
    expand (el) {
      return {
        beforeEnter: function (el) {
          el.textContent = 'beforeEnter'
        },
        enter: function (el) {
          el.textContent = 'enter'
        },
        afterEnter: function (el) {
          el.textContent = 'afterEnter'
        },
        enterCancelled: function (el) {
          // handle cancellation
        },
        beforeLeave: function (el) {
          el.textContent = 'beforeLeave'
        },
        leave: function (el) {
          el.textContent = 'leave'
        },
        afterLeave: function (el) {
          el.textContent = 'afterLeave'
        },
        leaveCancelled: function (el) {
          // handle cancellation
        }
      }
    },
    bounce () {
      return {
        enterClass: 'bounceInLeft',
        leaveClass: 'bounceOutRight'
      }
    }
  }
}
</script>

<style>
@import '../../styles/animate.css';
/* 必需 */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
.bounce-transition {
  display: inline-block; /* 否则 scale 动画不起作用 */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
