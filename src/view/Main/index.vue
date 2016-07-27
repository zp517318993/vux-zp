<template>
  <div>
    <ul>
      <li v-for="task in tasks">
        {{$index}}--<span>{{task.title}}</span>
      </li>
    </ul>
    <hr />
    <hr />
    <ul>
      <!--<li v-for="val in text">-->
        <!--{{$index}}--<strong>{{$key}}</strong>--{{val}}-->
      <li v-for="(key, val) in text">
        {{1+1}}<strong>{{key}}</strong>--{{val}}
      </li>
    </ul>
    <hr />
    <hr />
    <group>
      <switch title="Toggle" :value.sync="show"></switch>
    </group>
    <alert :show.sync="show" title="congratulations" @on-show="onShow" @on-hide="onHide">Message is sent successfully~</alert>
    <hr />
    <hr />
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <hr />
    <hr />
    <div>
      <input v-if="greeting" type="text" v-model="newTodo" v-on:keyup.enter="addTodo" />
      <ul>
        <template v-for="todo in todos">
          <li>
            <span>{{todo.text}}</span>
            <button @click="removeTodo($index)">×</button>
          </li>
          <li>{{$index}}</li>
        </template>
      </ul>
    </div>
    <hr />
    <hr />
    <div v-bind:class="{'class-a': isA, 'class-b': isB}">{{firstName}}</div>
    <hr />
    <hr />
    <div>
      <span v-for="n in 10">{{ n }} </span>
    </div>
  </div>
</template>

<script>
import { Alert, Group, Switch } from '../../components'
import {INDEX_SLIDE_LIST, INDEX_SLIDE_TEXT} from '../../api.js'

export default {
  components: {
    Alert,
    Group,
    Switch
  },
  init () {
  },
  data () {
    return {
      banner: [],
      tasks: [],
      text: String,
      message: 'Hello Vue.js!',
      newTodo: '',
      todos: [
        {text: 'add some todos'}
      ],
      greeting: true,
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      show: false
    }
  },
  route: {
    data ({to, next}) {
      return this.$http.get(INDEX_SLIDE_LIST)
      .then(({data: {status, message, data}}) => {
        console.log(data.length)
        this.$set('tasks', data)
        this.tasks.push({title: 'aaa'})
//      this.tasks.splice(1, 1)
//      this.tasks.$remove('aaa')
      })
    }
  },
  ready () {
    this.$http.get(INDEX_SLIDE_TEXT)
    .then(({data: {status, message, data}}) => {
      console.log(data)
      this.text = data
    })
//  this.text.push({id: 'bbb'})
//  this.tasks = this.tasks.filter(function (task) {
//    return task.title.match('ccc')
//  })
  },
  methods: {
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    },
    addTodo () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({text: text})
        this.newTodo = ''
      }
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    }
  },
  watch: {
    firstName (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
}
</script>

<style>

</style>
