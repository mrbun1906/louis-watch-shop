<template>
  <div class="main-blog-area pb-5">
            <div class="container">
                <!-- section title start -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title text-center mb-30px0px">
                            <h2 class="title">Latest Blog</h2>
                            <p> There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-sm-12 mb-3"
                    v-for="(item, index) in listBlogs"
                    :key="index"
                    >
                        <blog-item
                        :image="item.image"
                        :date="item.date"
                        :author="item.author"
                        :title="item.title"
                        :subTitle="item.subTitle"
                        />
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import BlogItem from './BlogItem.vue'
export default {
  components: { BlogItem },
    name: 'Blog',
    data() {
        return {
            listBlogs: [
                {
                    image: require('@/assets/images/home/blogs/1.webp'),
                    date: ' 27,Jun 2030',
                    author: ' Wild Nick',
                    title: '10 Quick Tips About Smart Product',
                    subTitle: 'Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore'
                },
                {
                    image: require('@/assets/images/home/blogs/2.webp'),
                    date: ' 27,Jun 2030',
                    author: ' Oaklee Odom',
                    title: '5 Real-Life Lessons About Smart Product',
                    subTitle: 'Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore'
                }
            ],
        }
    }

}
</script>

<style scoped>
.section-title {
    line-height: 1;
    margin-bottom: 50px;
}
.section-title .title {
    font-size: 48px;
    font-family: Poppins,sans-serif;
    font-weight: 600;
    display: inline-block;
    color: #000;
    margin: 0 0 28px;
    line-height: 34px;
}

.section-title p {
    line-height: 30px;
    font-size: 18px;
    color: #595959;
}
p:last-child {
    margin-bottom: 0;
}
</style>