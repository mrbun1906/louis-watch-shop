<template>
  <div class="single-blog">
    <div class="blog-image">
            <a href="blog-single-left-sidebar.html"><img :src="image" class="img-responsive w-100" alt=""></a>
        </div>
        <div class="blog-text">
            <div class="blog-author-date line-height-1">
                <span class="blog-date"><i class="fa fa-calendar" aria-hidden="true"><b-icon-calendar-date></b-icon-calendar-date></i>{{ date }}</span>
                <span><a class="blog-author" href="blog-grid.html"><i class="fa fa-user" aria-hidden="true"><b-icon-person-fill></b-icon-person-fill></i>{{ author }}</a></span>
            </div>
            <h5 class="blog-heading"><a class="blog-heading-link" href="blog-single-left-sidebar.html">{{ title }}</a></h5>
            <p>{{ subTitle }}</p>
            <!-- <a href="blog-single-left-sidebar.html" class="btn btn-primary blog-btn"> Read More</a> -->
            <common-btn :title="titleBtn" :blogBtn="classBlogBtn"/>
        </div>
    </div>
</template>

<script>
import CommonBtn from '../common/CommonBtn.vue'
export default {
    name: 'BlogItem',
    components: { CommonBtn },
    props: {
        image: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        author: {
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
        },
    },
    data() {
        return {
            titleBtn: 'Read More',
            classBlogBtn: 'blogBtn',
        }
    }
}
</script>

<style scoped>
.single-blog {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.single-blog .blog-image {
    overflow: hidden;
    border-radius: 20px;
    width: 270px;
}
.single-blog .blog-image img {
    -webkit-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
}
.single-blog:hover .blog-image img {
    -webkit-transform: scale(1.1) rotate(
3deg
);
    transform: scale(1.1) rotate(3deg);
    -webkit-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
}
.single-blog .blog-text {
    width: calc(100% - 270px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: left;
    margin-left: 30px;
}
.single-blog .blog-author-date span.blog-date {
    color: #393939;
}
.single-blog .blog-author-date span {
    color: #393939;
    font-weight: 500;
}
.single-blog .blog-author-date span i {
    color: #266bf9;
    margin-right: 5px;
}
.single-blog .blog-author-date a {
    color: #393939;
    display: inline-block;
    padding-left: 5px;
}
.single-blog .blog-author-date a:hover {
    color: #266bf9;
}
.single-blog .blog-text .blog-heading {
    margin: 17px 0 23px 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 35px;
}
.single-blog .blog-text .blog-heading .blog-heading-link {
    color: #2b2b2b;
}
.single-blog .blog-text .blog-heading .blog-heading-link:hover {
    color: #266bf9;
}
.single-blog .blog-text p {
    margin-bottom: 30px;
    color: #3a3a3a;
    line-height: 32px;
}
</style>