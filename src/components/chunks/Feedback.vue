<template>
    <section class="section feedback">
        <v-container
            justify-center=""
            class="box"
        >
            <div class="section-title">
                <h2>Заявка на расчет</h2>
                <div class="bar"></div>
                <p>
                    Отправьте нам запрос на расчет и наши менеджеры в кратчайшие сроки расчитают Ваш заказ. Мы принимаем заказы 24/7.312
                </p>
            </div>
            <v-card class="feedback-box">
                <form>
                    <v-text-field filled 
                        color="primary" 
                        clearable=""
                        outlined=""
                        ref="order_name" 
                        label="Имя"
                        prepend-icon="fas fa-id-badge"
                    ></v-text-field>
                    <v-text-field filled 
                        color="primary" 
                        clearable=""
                        outlined=""
                        ref="order_email" 
                        label="Email"
                        prepend-icon="fas fa-envelope"
                    ></v-text-field>
                    <v-text-field filled 
                        color="primary" 
                        clearable=""
                        outlined=""
                        ref="order_phone" 
                        label="Телефон"
                        prepend-icon="fas fa-phone"
                    ></v-text-field>
                    <v-file-input 
                        small-chips 
                        outlined=""
                        multiple 
                        label="Загрузить макет">
                    </v-file-input>
                    <v-textarea
                        outlined=""
                        label="Запрос"
                        rows="5"
                        prepend-icon="far fa-comment-dots"
                    ></v-textarea>
                    <p>Нажимая на кнопку "Отправить", Вы соглашаетесь с <a href="https://policies.google.com/privacy">политикой конфиденциальности</a></p>
                    <button type="submit" class="btn btn-primary">Отправить запрос</button>
                    
                </form>
            </v-card>
        </v-container>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.feedback{
    background-color: #edf5ff;

    &-box{
        max-width: 600px;
        margin: 0 auto;
        -webkit-box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
        box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.08);
        background: #ffffff;
        padding: 40px;
        text-align: center;
        border-radius: 3px;
    }
    .form-group {
        margin-bottom: 15px;
    }
    .form-control {
        display: block;
        width: 100%;
        line-height: 1.5;
        height: 50px;
        padding: 12px;
        font-size: 16px;
        border: 1px solid #eeeeee;
        border-radius: 5px;
        -webkit-transition: .4s;
        transition: .4s;
        color: #818992;
        background: #ffffff;
        &:focus {
            color: #818992;
            background-color: #ffffff;
            border-color: var(--v-primary-base);
            outline: 0;
            -webkit-box-shadow: unset;
            box-shadow: unset;
        }
    }
    .btn {
        display: block;
        width: 100%;
        letter-spacing: 2px;

        &:hover{
            background: var(--v-primary-base);
            color: var(--v-white-base);
            &::after, &::before{
                width: 50%;
            }
        }
        &::after, &::before{
            background: var(--v-primary-base);
            
        }
    }
}
</style>
