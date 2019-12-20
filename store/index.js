export const state = () => ({
    blogPosts: [],
    speakers: []
  })
  
  export const mutations = {
    setBlogPosts(state, list) {
      state.blogPosts = list;
    },
    setSpeakers(state, list) {
      state.speakers = list;
    }
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context(
        '~/assets/content/blog/',
        false,
        /\.json$/
      );
      let blogPosts = files.keys().map(key => {
        let res = files(key)
        res.slug = key.slice(2, -5)
        return res
      });
      await commit('setBlogPosts', blogPosts)

      let speakerList = await require.context(
        '~/assets/content/speakers/',
        false,
        /\.json$/
      );
      let speakers = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        console.log(res.slug);
        return res;
      });
      await commit('setSpeakerList', speakers);
    }
  }