<template>
  <div id="app">
    <Row class="nav">
        <Col span="20">
          <Row type="flex" justify="center" >
            <Col span="3"><router-link to="/home">大说</router-link></Col>
            <Col span="3"><router-link to="/universe-list">宇宙</router-link></Col>
            <Col span="3"><router-link to="/book-reader">作者</router-link></Col>
          </Row>
        </Col>
        <Col span="4"><router-link to="/hollow" class="">登录/注册</router-link></Col>
    </Row>
    <router-view></router-view>
  </div>
</template>

<script>
import {Row, Col} from 'view-design'

export default {
  name: 'App',
  components: {
    Row,
    Col
  }
}
</script>

<style lang="scss">
  #app{
    margin-top: 40px;
  }
  .nav{
    font-size: 20px;
    font-weight: bold;
    color: #000;
    a{
      color: #000;
      padding-bottom: 6px;
    }
    a.active{
      border-bottom: 4px solid #000;
    }
    a:hover{
      border-bottom: 4px solid #000;
    }
  }
</style>
