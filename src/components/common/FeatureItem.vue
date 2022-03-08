<template>
    <div class="single-feature">
        <div class="feature-icon">
            <img :src="img" alt="">
        </div>
        <div class="feature-content">
            <h4 class="title">{{title}}</h4>
            <span class="sub-title">{{subTitle}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureItem',
    props: {
        img: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        subTitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.single-feature {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
}
.single-feature .feature-icon {
    width: 70px;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 30px;
    background-color: #266bf9;
}
.single-feature img {
    -webkit-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
}
.single-feature:hover img {
    -webkit-transform: scale(.9) rotate(
3deg
);
    transform: scale(.9) rotate(3deg);
}
.single-feature .feature-content {
    width: calc(100% - 100px);
}
.single-feature .feature-content .title {
    font-size: 24px;
    color: #000;
    font-weight: 600;
    margin: 0 0 3px;
}
.single-feature .feature-content .sub-title {
    font-size: 16px;
    color: #000;
    font-weight: 400;
}
</style>