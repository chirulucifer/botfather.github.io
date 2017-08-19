<template>
  <div id="app">
    <navbar></navbar>
    <div class="row">
      <template v-for="content in contentList">
        <profileBlock :content="content"></profileBlock>
      </template>
    </div>
    <footerView></footerView>
  </div>
</template>


<script>
import navbar from './components/Navbar.vue';
import profileBlock from './components/ProfileBlock.vue';
import footer from './components/Footer.vue';

export default {
  components: {
    'navbar': navbar,
    'footerView': footer,
    'profileBlock': profileBlock,
  },
  data() {
    return {
      contentList: {
        Blog: {
          link: "https://botfather.github.io/blog",
          imagePath: "../static/blog.svg",
          displayText: "Blog",
          rval: 237,
          gval: 106,
          bval: 90,
          btnTitle: "Visit"
        },
        Github: {
          link: "https://github.com/botfather",
          imagePath: "../static/git.svg",
          displayText: "Github",
          rval: 221,
          gval: 218,
          bval: 216,
          btnTitle: "Check Repositories"
        },
        LinkedIn: {
          link: "https://www.linkedin.com/in/tushar-mohan/",
          imagePath: "../static/linkedin.svg",
          displayText: "LinkedIn",
          rval: 113,
          gval: 165,
          bval: 197,
          btnTitle: "Know more"
        }
      }
    }
  }
}
</script>

<style>
body {
  background-color: #E6E8E6;
}

.container {
  margin-top: 10%;
}
</style>
