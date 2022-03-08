<template>
  <div>
      <a href="shop-left-sidebar.html" class="btn btn-primary text-capitalize m-auto" :class="blogBtn">{{title}}</a>
  </div>
</template>

<script>
export default {
    name:'CommonBtn',
    props: {
        title: {
            type: String,
            default: ''
        },
        blogBtn: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.btn-primary {
    border-width: 2px;
    border-color: #fff;
    border-style: solid;
    border-radius: 18px;
    width: 215px;
    height: 61px;
    background-color: transparent;
}
.btn {
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
    -webkit-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-width: 2px;
    border-color: #fff;
    border-style: solid;
    border-radius: 18px;
    width: 215px;
    height: 61px;
    background-color: transparent;
}
.btn-primary:hover {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
}
/* .btn:hover {
    color: #212529;
} */
.blogBtn {
    background: #4e4e4e;
    width: 180px;
    height: 54px;
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 600;
    border: 1px solid #4e4e4e;
    color: #fff;
}
</style>