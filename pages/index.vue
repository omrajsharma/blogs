<template>
  <div class="home-page">

    <section class="intro">
      <h1 align="center">My Tech blogs</h1>
    </section>

    <PostList :posts="loadedPosts"/>
    
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList.vue';

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // Async data executes on the server - works only in pages folder
  // This Keyword does'nt work as expected (coz async data works before this object is defined)
  // async data only works on server when its first reloaded, when user navigates then only js loads in client browser
  // asyncData(context, callback){
  //   setTimeout(() => {
  //     callback( null, {
  //       loadedPosts : [
  //         {
  //           id: '1',
  //           title: 'First Post',
  //           previewText: 'This is our first post on blog page',
  //           thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  //         },
  //         {
  //           id: '2',
  //           title: 'Second Post',
  //           previewText: 'This is our second post on blog page',
  //           thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  //         },
  //         {
  //           id: '3',
  //           title: 'Third Post',
  //           previewText: 'This is our third post on blog page',
  //           thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  //         },
  //       ]
  //     });
  //   }, 1500);
  // },
  // This executes on clientside
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
  // This is not SEO friendly coz these element renders on the client side and crowler can't rank them.

}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~/assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: #222222;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 9px #999999;
  box-sizing: border-box;
  border: 1px solid #999999;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

</style>