export const state = () => ({
    newsPosts: [],
    speakers: []
  });
  
  export const mutations = {
    setNewsPosts(state, list) {
      state.newsPosts = list;
    },
    setSpeakers(state, list) {
      state.speakers = list;
    }
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let files = await require.context(
        '~/assets/content/news/',
        false,
        /\.json$/
      );
      let newsPosts = files.keys().map(key => {
        let res = files(key);
        res.slug = key.slice(2, -5);
        console.log(res.slug);
        return res;
      });
      await commit('setNewsPosts', newsPosts);

      let speakerList = await require.context(
        '~/assets/content/speakers/',
        false,
        /\.json$/
      );
      let speakers = speakerList.keys().map(key => {
        let res = speakerList(key);
        res.slug = key.slice(2, -5);
        console.log(res.slug);
        return res;
      });
      await commit('setSpeakers', speakers);
    }
  };