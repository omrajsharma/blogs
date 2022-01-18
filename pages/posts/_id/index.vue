<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title"> {{loadedPost.title}} </h1>

            <div class="post-details">
                <div class="post-detail">Last updated on {{loadedPost.updatedDate}}</div>
                <div class="post-detail">Written by {{loadedPost.author}}</div>
            </div>

            <p class="post-content"> {{loadedPost.content}} </p>
        </section>

        <section class="post-feedback">
            <p>Let us know what you think about this post, send a mail to <a href="mailto:omraj7413@gmail.com">Omraj Sharma</a> </p>
        </section>

    </div>

</template>

<script>
export default {
  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(new Error(), {
  //       loadedPost: {
  //         id: '1',
  //         title: 'First Post (ID: ' + context.route.params.id + ')',
  //         previewText: 'This is our first post on blog page',
  //         author: 'Omraj Sharma',
  //         updatedDate: new Date(),
  //         content: 'this is some dummy text and love to know more about you guys', 
  //         thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  //       }
  //     });
  //   }, 1000);
  // }

  data() {
    return {
      loadedPost: {
        id: '1',
        title: 'First Post (ID: xyz)',
        previewText: 'This is our first post on blog page',
        author: 'Omraj Sharma',
        updatedDate: new Date(),
        content: 'this is some dummy text and love to know more about you guys', 
        thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      }
    };
  },
  // async fetch() {
  //   this.loadedPost = {
  //     id: '1',
  //     title: 'First Post (ID: xyz)',
  //     previewText: 'This is our first post on blog page',
  //     author: 'Omraj Sharma',
  //     updatedDate: new Date(),
  //     content: 'this is some dummy text and love to know more about you guys', 
  //     thumbnail: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  //   }
  // }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>