import api from '@/api';
import free from '@/api/free';
import Vue from 'vue';
export default {
    namespaced:true,
    state:{
        token:null,
        profile:null,
        loadingProfile:false,
    },
    mutations:{
        login(state,data){
            state.token = data.token;
            api.defaults.headers.Authorization = data.token;
            if(data.remember){
                localStorage.setItem(
                    'auth_token',
                    data.token
                );
            }
        },
        logout(state){
            state.token=null;
            state.wishlist=null;
            state.profile=null;
            localStorage.removeItem('auth_token');
            delete api.defaults.headers.Authorization;
        },
        loadProfile(state,data){
            state.loadingProfile = data;
        },
        setProfile(state,data){
            state.profile = data;
        }
    },
    actions:{
        requestLogin({dispatch},payload){
            return new Promise((res,rej)=>{
                free.post('/login',payload)
                .then(res=>res.data)
                .then(data=>{
                    if(data.status==200){
                        if(payload.remember) data.remember = payload.remember;
                        dispatch('saveLogin',data);
                        res(data);
                    }else{
                        rej(data);
                    }
                })
                .catch(err=>rej(err));
            })
        },
        saveLogin({commit},data){
            commit('login',data);
        },
        register({dispatch},data){
            return new Promise((res,rej)=>{
                free.post('/register',data)
                .then(res=>res.data)
                .then(data=>{
                    if(data.status==200){
                        // dispatch('saveLogin',data);
                        res(data);
                    }else{
                        rej(data);
                    }
                })
                .catch(err=>rej(err));
            })
        },
        logout({commit}){
            commit('logout');
        },
        getProfile({commit,getters}){
            if(getters.loadingProfile || getters.profile) return;
            // this method is called @ App.vue @ watcher 'loggedIn'
            return new Promise((res,rej)=>{
                commit('loadProfile',true);
                api.post('/profile')
                    .then(res=>res.data)
                    .then(data=>{
                        if(data.status==200){
                            commit('setProfile',data.data);
                            res(data);
                        }else{
                            rej(data);
                        }
                    })
                    .catch(err=>rej(err))
                    .finally(()=> commit('loadProfile',false));
            });
        },
        saveProfile({commit,dispatch},data){
            return new Promise((res,rej)=>{
                api.post('/save-profile',data)
                    .then(r=>r.data)
                    .then(data=>{
                        if(data.status == 200){
                            dispatch(
                                'init/alert',
                                {
                                    type:'success',
                                    message: 'You have successfully updated your profile'
                                },
                                { root: true }
                            );
                            res(r);
                        }
                    })
                    .catch(e=>rej(e));
            });
        },
        sessionExpired({dispatch}){
            dispatch('logout');
            dispatch('init/alert',{
                type:'warning',
                message: 'The session has been expired. Please login again'
            },{
                root:true
            });
        }
    },
    getters:{
        loggedIn:({token})=>token!=null,
        token:({token})=>token,
        profile:({profile})=>profile,
        loadingProfile:({loadingProfile})=>loadingProfile
    }
}
