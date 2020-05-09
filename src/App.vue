<template>
  <div id="app">

    <div>
      <div name="homepage" style="background-color: red;height: 50px;width: 1400px;margin: 0 auto">
        <div style="background-color: aqua;height: 50px;width: 50px;float: left">

        </div>
        <div style="float: right;height: 50px;width: 50px;background-color: aqua">

        </div>
      </div>
      <div name="Advertisement" style="background-color: #457983;height: 100px;width: 1400px;margin: 0 auto">
        <div style="float: left;height: 100px;width: 100px;">

        </div>
      </div>
    </div>


    <div>
      <div name="mouhun" style="width: 1400px; height:395px; background-color: aliceblue; font-size: 0px;margin:0 auto" >
        <div name="left_sidebar" style="display:inline-block; width: 360px; height: 395px; background-color: bisque;">
          <div name="=top" style="width: 360px; height: 75px;">
            <div name="top_left" style="width: 180px; height: 75px; background-color: aliceblue;">

            </div>
            <div name="top_right"></div>
          </div>
          <div name="sidebar" style="width: 360px; height: 320px; background-color: aliceblue;">
          </div>
        </div>

        <div name="centered" style="display:inline-block; width: 760px; height: 395px;background-color:gray">
          <div name="top" style="width: 760px; height: 150px; background-color: gainsboro;" >
          </div>
          <div name="below"></div>
        </div>

        <div name="right_sidebar" style="display:inline-block; width: 280px; height: 395px; background-color: bisque;">
          <div name="=top" style="width: 280px; height: 75px;">
          </div>
          <div name="sidebar" style="width: 280px; height: 320px; background-color: aliceblue;">
          </div>
        </div>

      </div>

    </div>

    <div style="text-align: center;width: 100%">
      <div style="text-align: center;width: 100%;">
        <div style="width: 1400px;background-color: darkslategray;margin:0 auto">

          <div style="width: 350px;height: 75px;background-color: #42b483;display: inline-block">
            <div style="width: 350px;height: 75px;background-color: #23b483;display: inline-block">

            </div>
            <div style="width: 350px;height: 500px;background-color: #43b484;display: inline-block">

            </div>
          </div>

          <div style="width: 350px;height: 75px;background-color: #34b983;display: inline-block">
            <div style="width: 350px;height: 75px;background-color: #82b983;display: inline-block">

            </div>
            <div style="width: 350px;height: 500px;background-color: #83b984;display: inline-block">

            </div>
          </div>

          <div style="width: 350px;height: 75px;background-color: #457983;display: inline-block">
            <div style="width: 350px;height: 75px;background-color: #457983;display: inline-block">

            </div>
            <div style="width: 350px;height: 500px;background-color: #437984;display: inline-block">

            </div>
          </div>



        </div>
      </div>
      <div style="width: 1400px;height: 250px;background-color: #345678;margin:0 auto">

      </div>
    </div>
    <span class="iconfont">&#xe785;</span>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
