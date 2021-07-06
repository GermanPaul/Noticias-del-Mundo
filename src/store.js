import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { fetchNewsApi } from './api/newsAPI'

export default new Vuex.Store({
  state: {
    newsFeed: [],
    newsActual: 0,
    newsFilter: 0
  },
  mutations: {
    updateNews(state, payload) {
      state.newsFeed = payload;
    },
    updateNewsActual(state, payload) {
      state.newsActual = payload;
    },
    updateNewsFilter(state, payload) {
      state.newsFilter = payload;
    }
  },
  getters: {
    actualNews: (state) => {
      let actualNew = state.newsFeed[state.newsActual];

      if (actualNew) {
        return actualNew;
      } else {
        return {};
      }
    },
    newsFiltered: (state) => {
      let filteredNews = []
      if (state.newsFilter == 0) {
        filteredNews = state.newsFeed;
      } else {
        filteredNews = state.newsFeed.filter((news) => { return news.section == state.newsFilter });
      }
      return filteredNews;
    }
  },
  actions: {
    getNews({ commit }) {
      fetchNewsApi()
        .then((response) => {
          commit('updateNews', response);
          commit('updateNewsActual', 0);
          commit('updateNewsFilter', 0);
        })
    },
    changeNews({ commit }, payload) {
      commit('updateNewsActual', payload);
    },
    changeNewsFilter({ commit }, payload) {
      commit('updateNewsFilter', payload);
    },
    addNews({ commit, state }, payload) {
      let newsArray = state.newsFeed;
      newsArray.push(payload);
      commit('updateNews', newsArray);
    }
  }
})
