<template>
  <div class="smart-area">
    <div class="container h-100">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 text-center">
                <h2 class="title"> <span>Smart Fashion</span> With Smart Watches</h2>
                <common-btn title="Shopping Now"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CommonBtn from '../common/CommonBtn.vue'
export default {
  components: { CommonBtn },
    name: 'SmartArea',
    data() {
        return {
            title: 'Shopping Now',
        }
    }
}
</script>

<style scoped src="@/assets/css/components/home/smart-area.css">

</style>