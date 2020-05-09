<template>
  <div id="Home">
    <div class="recommend-books">
      <div class="book-info-card" v-for="(item, index) in recommendBookList" :key='index'>
        <img class="book-info-card-cover" :src="item.coverUrl" />
        <div class="book-info-card-brief">
          <div class="book-info-card-brief-title">{{item.title}}</div>
          <div class="book-info-card-brief-author">{{item.author}}</div>
          <div class="book-info-card-brief-outline">{{item.outline}}</div>
          <div class="book-info-card-brief-gotoicon">
            <svg class="icon" aria-hidden="true" style="transform:rotate(180deg);margin-right:5px;float:right;">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
          </div>
          
        </div>
      </div>
    </div>
    <div class="novel-space">
      
    </div>
  </div>
</template>

<script>
import '../fonts/font/iconfont.js'
export default {
  name: "home",
  data () {
    return {
      recommendBookList: [
        {
          coverUrl: "https://bookcover.yuewen.com/qdbimg/349573/1019514168/90",
          title: "我真是个律师",
          author: "青圭大大",
          outline: "这是一个不务正业的律师asf在游戏人间时不小心混了个大明星老婆的故事。这是一个不务正业的律师asf在游戏人间时不小心混了个大明星老婆的故事。这是一个不务正业的律师asf在游戏人间时不小心混了个大明星老婆的故事。这是一个不务正业的律师asf在游戏人间时不小心混了个大明星老婆的故事。"
        },
        {
          coverUrl: "https://bookcover.yuewen.com/qdbimg/349573/1019514168/90",
          title: "我真是个律师",
          author: "青圭大大",
          outline: "这是一个不务正业的律师在游戏人间时不小心混了个大明星老婆的故事。"
        },
        {
          coverUrl: "https://bookcover.yuewen.com/qdbimg/349573/1019514168/90",
          title: "我真是个律师",
          author: "青圭大大",
          outline: "这是一个不务正业的律师在游戏人间时不小心混了个大明星老婆的故事。"
        },
        {
          coverUrl: "https://bookcover.yuewen.com/qdbimg/349573/1019514168/90",
          title: "我真是个律师",
          author: "青圭大大",
          outline: "这是一个不务正业的律师在游戏人间时不小心混了个大明星老婆的故事。"
        }
      ]
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<style scoped>
.icon {
  width: 2em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  
}

#Home{
  height: 100%;
}
.recommend-books{
  display: flex;
  position: absolute;
  width: 96.0417%;
  height: 23.8889%;
  min-height: 150px;
  left: 4%;
  top: 12.5%
}
.book-info-card{
  cursor: pointer;
  display: flex;
  height: 100%;
  min-width: 360px;
  width: 20vw;
  /* background: #fafafa; */
  
}
.book-info-card-cover{
  /* width: 40%; */
  height: 95%;
  border-radius: 8px;
  -webkit-box-shadow:0px 3px 3px #c8c8c8 ;
  -moz-box-shadow:0px 3px 3px #c8c8c8 ;
  box-shadow:0px 3px 3px #c8c8c8 ;
}
.book-info-card-brief{
  position: relative;
  padding: 15px 20px;
  text-align: left;
  width: 200px;
}
.book-info-card-brief-title{
  font-size: 20px;
  font-weight: 400;
  color: #1b1b1b;
}
.book-info-card-brief-author{
  font-size: 14px;
  font-weight: bold;
  color: #d1d5d5;
}
.book-info-card-brief-outline{
  margin-top: 13px;
  line-height: 18px;
  font-size: 13px;
  color: #000000;
  font-weight: 400;
  display: -webkit-box;             /*将对象转为弹性盒模型展示*/
  -webkit-box-orient: vertical;     /*设置弹性盒模型子元素的排列方式*/
  -webkit-line-clamp: 4;            /*限制文本行数*/
  overflow: hidden;                 /*超出隐藏*/
}
.book-info-card-brief-gotoicon{
  position: absolute;
  bottom: 13px;
  right: 5px;
}
</style>
