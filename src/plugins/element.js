import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 注册才能使用
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message