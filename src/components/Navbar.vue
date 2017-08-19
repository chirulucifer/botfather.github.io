<template>
    <div class="navbar-fixed">
        <nav class="white">
            <div class="nav-wrapper">
                <a href="https://botfather.github.io" class="brand-logo">
                    <span class="regularText">Tushar</span><span class="boldSurname">Mohan</span>
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li v-for="(value,key) in navItems">
                        <a :href="value">{{key}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navItems: {
                // Contact: "#"
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300');
@import url('https://fonts.googleapis.com/css?family=Eczar');

.brand-logo {
    margin-left: 1%;
}

.regularText {
    font-family: 'Work Sans', sans-serif;
    color: #EB5169;
}

.boldSurname {
    font-family: 'Eczar', serif;
    color: #424B54;
}

li>a {
    color: #EB5169;
}
</style>
