import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state : { 
        // users: null,
        // system: {},
        // rightMenu: {},
        // sidebar: {},
        cards: {},
        // main_slider:{},
        // main_slider_cards:{},
        brands: {},
        // rightSidebar: false,
        // page: {},
        // loading: false,
        // notify: {
        //     visible: false,
        //     color: 'dark',
        //     text: null,
        //     timeout: 6000,
        //     multiline: true,
        // },
    },

    getters: {
        // TOP_MENU: state => {
        //     return state.topMenu;
        // },
        // RIGHT_MENU: state => {
        //     return state.rightMenu;
        // },
        
        // SIDEBAR: state => {
        //     return state.sidebar;
        // },
        // USERS: state => {
        //     return state.users;
        // },
        // SYSTEM: state => {
        //     return state.system;
        // },
        CARDS: state => {
            return state.cards;
        },
        // MAIN_SLIDER: state => {
        //     return state.main_slider;
        // },
        // MAIN_SLIDER_CARDS: state => {
        //     return state.main_slider_cards;
        // },
        BRANDS: state => {
            return state.brands;
        },
        // PAGE: state => {
        //     return state.page;
        // },
        // LOADING: state => {
        //     return state.loading;
        // },
        // PATHS: state => {
        //     return state.paths;
        // },
        
        
    },

    mutations: {
        // rightSidebarChange: (state) => {
        //     state.rightSidebar = !state.rightSidebar;
        // },
        // rightSidebarCancel: (state) => {
        //     state.rightSidebar = false;
        // },
        
        // SET_USERS: (state, payload) => {
        //     state.users = payload;
        // },
        // SET_SYSTEM: (state, payload) => {
        //     state.system = payload;
        // },
        // SET_RIGHT_MENU: (state, payload) => {
        //     state.rightMenu = payload;
        // },
        // SET_SIDEBAR: (state, payload) => {
        //     state.sidebar = payload;
        // },
        SET_CARDS: (state, payload) => {
            state.cards = payload;
        },
        // SET_MAIN_SLIDER: (state, payload) => {
        //     state.main_slider = payload;
        // },
        // SET_MAIN_SLIDER_CARDS: (state, payload) => {
        //     state.main_slider_cards = payload;
        // },
        SET_BRANDS: (state, payload) => {
            state.brands = payload;
        },
        // SET_PAGE: (state, payload) => {
        //     state.page = payload;
        // },
        // SET_LOADING: (state, payload) => {
        //     state.loading = payload;
        // },
        // NOTIFY_SHOW: (state, payload) => {
        //     state.notify.text = payload.text
        //     state.notify.color = payload.color
        //     // state.notify.multiline = (payload.text.length > 50) ? true : false
            
        //     // if (payload.multiline) {
        //     //   state.notify.multiline = payload.multiline
        //     // }
        //     state.notify.multiline = payload.multiline
            
        //     if (payload.timeout) {
        //       state.notify.timeout = payload.timeout
        //     }
      
        //     state.notify.visible = true
        // },
        // NOTIFY_HIDE: (state) => {
        //     state.notify.visible = false
        //     state.notify.color = 'dark'
        //     state.notify.multiline = true
        //     state.notify.timeout = 6000
        //     state.notify.text = null
        // },
        
    },

    actions: {   
        // GET_SYSTEM: async (context, payload) => {
        //     let {data} = await Axios.get('http://apprint.spb.ru/rest/system');
        //     context.commit('SET_SYSTEM', data.object); 
        // },
        // GET_RIGHT_MENU: async (context, payload) => {
        //     let {data} = await Axios.get('http://apprint.spb.ru/rest/right_menu');
        //     context.commit('SET_RIGHT_MENU', data.results);
        // },
        // GET_SIDEBAR: async (context, payload) => {
        //     let {data} = await Axios.get('http://apprint.spb.ru/rest/sidebar');
        //     context.commit('SET_SIDEBAR', data.results);
        // },
        GET_CARDS: async (context, payload) => {
            let {data} = await Axios.get('http://apprint.spb.ru/rest/cards');
            context.commit('SET_CARDS', data.results);
        },
        // GET_MAIN_SLIDER: async (context, payload) => {
        //     let {data} = await Axios.get('http://apprint.spb.ru/rest/mainslider');
        //     context.commit('SET_MAIN_SLIDER', JSON.parse(data.results[0].slider) );
        // },
        // GET_MAIN_SLIDER_CARDS: async (context, payload) => {
        //     let {data} = await Axios.get('http://apprint.spb.ru/rest/mainslider');
        //     context.commit('SET_MAIN_SLIDER_CARDS', JSON.parse(data.results[0].slider_cards) );
        // },
        GET_BRANDS: async (context, payload) => {
            let {data} = await Axios.get('http://apprint.spb.ru/rest/brands');
            context.commit('SET_BRANDS', JSON.parse(data.results[0].item) );
        },
        // GET_PAGE: async ({commit, payload,}, resource) => {
        //     commit('SET_PAGE', {} );
        //     commit('SET_LOADING', true);
        //     let {data} = await Axios.get('http://apprint.spb.ru/rest/cards/'+ resource.id);
        //     commit('SET_PAGE', data.object );
        //     setTimeout(() => {
        //         commit('SET_LOADING', false);
        //     },500)  
            
        // },  
    },
})
