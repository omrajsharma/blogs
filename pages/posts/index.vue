<template>
  <div>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";

export default {
  components: {
    PostList
  },
  // Good approach to store the data in store
  // fetch(context) {
  //   if(context.store.state.loadedPosts.length > 0){
  //     return null;
  //   }

  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: "1",
  //             title: "First Post",
  //             previewText: "This is our first post on blog page",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  //           },
  //           {
  //             id: "2",
  //             title: "Second Post",
  //             previewText: "This is our second post on blog page",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  //           },
  //           {
  //             id: "3",
  //             title: "Third Post",
  //             previewText: "This is our third post on blog page",
  //             thumbnail:
  //               "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  //           }
  //         ]
  //       });
  //       // reject(new Error)
  //     }, 1500);
  //   })
  //     // here data is the object given by resolve function which contains loadedPosts
  //     .then(data => {
  //       context.store.commit("setPosts", data.loadedPosts);
  //     })
  //     .catch(e => {
  //       context.error(new Error());
  //     });

  // -------------------------------------------------------------

    // asyncData(context){
    //   return new Promise( (resolve, reject) => {
    //       setTimeout(() => {
    //       resolve({
    //         loadedPosts : [
    //           {
    //             id: '1',
    //             title: 'First Post',
    //             previewText: 'This is our first post on blog page',
    //             thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //           },
    //           {
    //             id: '2',
    //             title: 'Second Post',
    //             previewText: 'This is our second post on blog page',
    //             thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //           },
    //           {
    //             id: '3',
    //             title: 'Third Post',
    //             previewText: 'This is our third post on blog page',
    //             thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //           },
    //         ]
    //       });
    //       // reject(new Error)
    //     }, 1500);
    //   })
    //   .then(data => {
    //     return data
    //   })
    //   .catch( e => {
    //     context.error(new Error())
    //   } )

    // setTimeout(() => {
    //   callback( null, {
    //     loadedPosts : [
    //       {
    //         id: '1',
    //         title: 'First Post',
    //         previewText: 'This is our first post on blog page',
    //         thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //       },
    //       {
    //         id: '2',
    //         title: 'Second Post',
    //         previewText: 'This is our second post on blog page',
    //         thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //       },
    //       {
    //         id: '3',
    //         title: 'Third Post',
    //         previewText: 'This is our third post on blog page',
    //         thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    //       },
    //     ]
    //   });
    // }, 1500);
// },
  computed: {
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  },
  created() {
    this.$store.dispatch("setPosts", this.loadedPosts);
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>