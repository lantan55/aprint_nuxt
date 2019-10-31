<template>
    <section class="section footer">
        <v-container
            class="footer-wrapper "
            fluid
        >
            <v-row>
                <v-col md="2" align-self="left">
                    <v-layout class="footer-list" column="">
                        <h4>Продукция</h4>
                        <ul class="row">
                            <li class="col-md-6 col"><a href="#" >Визитки</a></li>
                            <li class="col-md-6 col"><a href="#" >Листовки</a></li>
                            <li class="col-md-6 col"><a href="#" >Буклеты</a></li>
                            <li class="col-md-6 col"><a href="#" >Календари</a></li>
                            <li class="col-md-6 col"><a href="#" >Меню</a></li>
                            <li class="col-md-6 col"><a href="#" >Конверты</a></li>
                            <li class="col-md-6 col"><a href="#" >Пакеты</a></li>
                            <li class="col-md-6 col"><a href="#" >Каталоги</a></li>
                            <li class="col-md-6 col"><a href="#" >Прочие услуги</a></li>
                        </ul>
                    </v-layout>
                </v-col>
                <v-col md="2" align-self="left">
                    <v-layout class="footer-list" column="">
                        <h4>Информация</h4>
                        <ul class="row">
                            <li class="col-md-6 col"><a href="#" >О типографии</a></li>
                            <li class="col-md-6 col"><a href="#" >Доставка</a></li>
                            <li class="col-md-6 col"><a href="#" >Оплата</a></li>
                            <li class="col-md-6 col"><a href="#" >Срочная печать</a></li>
                            <li class="col-md-6 col"><a href="#" >Тех. требования</a></li>
                            <li class="col-md-6 col"><a href="#" >Вопросы и ответы</a></li>
                            <li class="col-md-6 col"><a href="#" >Карта сайта</a></li>
                            <li class="col-md-6 col"><a href="#" >Контакты</a></li>
                        </ul>
                    </v-layout>
                </v-col>
                <v-col md="4" align-self="end">
                    <v-layout class="footer-list" column="">
                        <img  
                            :src="require('@/assets/img/logo.jpg')"  alt="" 	
                        />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident enim eaque odio et nemo qui accusamus quidem laboriosam molestiae! Facere blanditiis, delectus qui quis in distinctio vero dolore recusandae non!</p>
                        <ul class="footer-list-social">
                            <li>
                                <a href="#"></a>
                            </li>
                        </ul>
                    </v-layout>
                </v-col>
                

            </v-row>
        </v-container>
    </section>
</template>
<script>
export default {
    components: {
        
    },
    
    computed: {
        
    }
}
</script>
<style lang="scss" scoped>
.footer{
    background: var(--v-black-base);
    padding-top:15px;
    &-wrapper{
        padding-left: 30px;
        padding-right: 30px;
    }
}
.footer-list{
    text-align: left;
    padding-right: 15px;
    h3{
        font-size: 1.1em;
        color: var(--v-white-base);
    }
    h4{
        font-size: 1.1em;
        color: var(--v-white-base); 
    }

    ul{
        list-style-type: none;
        margin-top:10px;
        padding-left:0;
        line-height: 2em;
        
        li{
            font-size: 0.9em;
            padding-top:0;
            padding-bottom:0;
            a{
                text-decoration: none;
                color: #818992;
                transition: color 0.2s; 
                &:hover{
                    text-decoration: underline;
                    color: var(--v-secondary-base);
                }
                
            }
        }
    }
    img{
        display: inline-flex;
        width: 150px;
    }
}
</style>
