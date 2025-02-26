<template>
    <div class="portfolioBoxSmallDiv">
        <router-link :to="`${linkTo}`" class="portfolioLink">
            <div class="portfolioBoxSmallLink">
                <h1 :class="nameClass">{{ name }}</h1>
                {{ description }}
            </div>
            <div class="portfolioBoxSmall"
                :style="{ backgroundImage: `url('${imgUrl}')` }">
            </div>

        </router-link>

    </div>


</template>

<script>



export default {
    name: "ImageLinkHover",
    props: {
        imgUrl: {
            type: String,
            required: true
        },
        linkTo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        nameClass: {
            type: String,
            required: false
        },
    },
    data: function () {
        return {}
    },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolioBoxSmall {
    background-color: green;
    border: 0.4vh solid black;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: opacity 0.3s ease-in;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    margin-left: -15px;
    margin-right: -15px;
}


.portfolioBoxSmallLink {
    z-index: 99;
    position: absolute;
    width: 100%;
    top: 16vh;
    text-align: center;
    line-height: 0.4em;
    text-shadow: 0 0 0.6em #000000;
}

a:link .portfolioBoxSmallLink,
a:visited .portfolioBoxSmallLink,
a:hover .portfolioBoxSmallLink,
a:active .portfolioBoxSmallLink {
    color: white;
    text-decoration: none;
}


.portfolioLink:hover .portfolioBoxSmall {
    opacity: 1;
}

.portfolioBoxSmallDiv  .portfolioBoxSmallLink, .portfolioBoxSmallDiv  .portfolioBoxSmall {
    margin-left: -15px;
}
</style>
