<template>
    <div class="col s12 m4 l4 hoverable center parentRoll" :style="{ 'background-image': 'url(' + content.imagePath + ')', 'background-color': 'rgb('+content.rval+','+content.gval+','+content.bval+')'}">
        <h2>
            <span class="contentTitleFont"> {{content.displayText}} </span>
        </h2>
        <a class="waves-effect waves-dark btn profBtn" :href="content.link">{{content.btnTitle}}</a>
    </div>
</template>

<script>
export default {
    props: ['content'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps');

.parentRoll {
    min-height: 86vh !important;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}

.contentTitleFont {
    font-family: 'Oleo Script Swash Caps', cursive;
    color: white;
}

.profBtn {
    background-color: whitesmoke;
    color: #EB5169;
}
</style>
