<template>
    <wrapper class="wrapper-col pt-0" id="product-landing-page">
        <breadcrumb :data="breadcrumbs" />
        <forgotPassword v-if="$route.name=='forgot-password'" />
        <resetPassword v-if="$route.name=='reset-password'" />
    </wrapper>
</template>

<script>
import forgotPassword from '@c/forgotPassword';
import resetPassword from '@c/resetPassword';
export default {
    name: 'forgot-password',
    data(){
        return {
            breadcrumbs:[
                {
                    link:'/',
                    title:'Home'
                },
                {
                    link:'/login',
                    title:'Login'
                },
                {
                    link: '',
                    title:'Forgot Password'
                }
            ]
        }
    },
    components:{
        forgotPassword,
        resetPassword
    }
}
</script>

<style>

</style>
