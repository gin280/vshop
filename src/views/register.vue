<template>
  <div>
    <x-header  style="background-color:#fff ;">注册<a slot="right" v-link="{name: 'login'}">已有账号</a></x-header>
    <address :title='title' :value.sync=value raw-value :list='addressData'></address>
    <x-input title="手机号码" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    <x-input title="邮箱" placeholder="请输入邮箱地址" is-type="email"></x-input>
    <x-input title="发送验证码" class="weui_vcode">
      <x-button slot="right" type="primary" @click='getCode'>发送验证码</x-button>
    </x-input>
    <x-button type='warn'>立即注册</x-button>
    <p>注册代表同意 《默默网的服务使用条款》</p>
  </div>
</template>

<script>
import { XInput, Group, Address, AddressChinaData, XButton } from 'vux'
import XHeader from 'vux/components/x-header'

export default {
  components: {
    XHeader,
    Address,
    XInput,
    Group,
    XButton
  },
  data () {
    return {
      title: '地址',
      value: ['浙江省', '温州市', '苍南县'],
      addressData: AddressChinaData,
      phone: ''
    }
  },
  methods: {
    getCode () {
      console.log('ok')
    }
  }
}
</script>

<style lang='postcss'>
@import '../../node_modules/vux/vux.css';
.x-header .x-header-title, .x-header h1 {
  color: #000;
}
</style>