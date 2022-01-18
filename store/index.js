import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts){
                state.loadedPosts = posts
            }
        },
        actions: {
            // Special method that only work one time 
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts',[
                            {
                                id: "1",
                                title: "First Post",
                                previewText: "This is our first post on blog page",
                                thumbnail:
                                "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            },
                            {
                                id: "2",
                                title: "Second Post",
                                previewText: "This is our second post on blog page",
                                thumbnail:
                                "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            },
                            {
                                id: "3",
                                title: "Third Post",
                                previewText: "This is our third post on blog page",
                                thumbnail:
                                "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            }
                        ]);
                        resolve();
                        // reject(new Error)
                    }, 1000);
                })
                // here data is the object given by resolve function which contains loadedPosts
                .then(data => {
                context.store.commit("setPosts", data.loadedPosts);
                })
                .catch(e => {
                context.error(new Error());
                });
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state){
                return state.loadedPosts
            }
        }
    })
}

export default createStore