<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm.vue'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data(){
        return {
            loadedPost: {
                author: 'omraj sharma',
                title: 'I love to code',
                content: 'lorem ipsum dolor',
                thumbnailLink: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
        };
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>