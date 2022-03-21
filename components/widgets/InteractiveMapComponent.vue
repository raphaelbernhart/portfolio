<template>
    <client-only>
        <l-map name="testing" :zoom="16" :center="[47.4481505, 12.253872]">
            <l-tile-layer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                subdomain="abcd"
            ></l-tile-layer>
            <l-marker
                v-if="icon"
                :lat-lng="[47.4481505, 12.253872]"
                :icon="icon"
            >
                <l-popup
                    content='
                        <div class="text-primary">
                            <h4 class="text-md font-bold">Raphael Bernhart</h4>
                            <p>
                                Achenweg 30<br>
                                6364 Brixen im Thale<br>
                                AUSTRIA<br>
                                <br>
                                <a class="text-primary font-bold underline" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Raphael+Bernhart/@47.4364677,12.3900398,13z/data=!3m1!4b1!4m5!3m4!1s0x62513e07c65a625f:0x9630f5393a0bdcf!8m2!3d47.436415!4d12.4251449">Zu Google</a>
                            </p>
                        </div>
                    '
                    :options="{
                        className: 'map-popup',
                    }"
                ></l-popup
            ></l-marker>
        </l-map>
    </client-only>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'InteractiveMapComponent',
    data() {
        return {
            icon: '' as any,
        };
    },
    mounted() {
        this.icon = this.$L.icon({
            iconUrl: '/location-marker.png',
            iconSize: [44, 53],
            iconAnchor: [22, 53],
        });

        this.$L.control.attribution().setPrefix(false);
    },
});
</script>

<style>
.map-popup {
    margin: 0 0 10px 100px;
}

.map-popup .leaflet-popup-content-wrapper {
    background: #171716;
}

.map-popup p {
    margin: 0px !important;
}

.map-popup a {
    color: white;
}

.map-popup .leaflet-popup-tip-container {
    display: none;
}
</style>
