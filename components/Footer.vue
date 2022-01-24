<template>
    <div class="relative w-screen z-30 bg-primaryColor pt-14 pb-20 mt-36">
        <div class="container">
            <img src="" alt="">
            <div class="flex justify-between flex-nowrap flex-col md:flex-row gap-6">
                <div class="flex gap-x-28">
                    <div class="flex flex-col gap-y-3 text-white">
                        <span><b>Unternehmen</b></span>
                        <div class="flex flex-col gap-y-1">
                            <a class="hover:text-gray-300 font-light flex items-center gap-x-1" href="https://www.bus-schlechter.at" target="_blank">
                                Busreisen
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><title>external-link</title><g fill="none"><path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" class="fill-current"></path><path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z" class="fill-current"></path></g></svg>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-3 text-white">
                        <span><b>Privacy</b></span>
                        <div class="flex flex-col gap-y-1">
                            <a class="hover:text-gray-300 inline-block font-light" href="">Datenschutz</a>
                            <a class="hover:text-gray-300 inline-block font-light" href="">Impressum</a>
                        </div>
                    </div>
                </div>
                <div class="flex gap-x-4">
                    <a class="w-6 h-6 hover:text-gray-300 text-white transition-colors" href="https://www.facebook.com/BusreisenTirolUlrichSchlechter/"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>logo-facebook</title><g fill="#ffffff"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221v-49.36c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42.02h62.12l-9.92 64.77h-52.2v156.53C398.1 461.85 480 369.18 480 257.35z" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"></path></g></svg></a>
                    <a class="w-6 h-6 hover:text-gray-300 text-white transition-colors" href="mailto:office@bus-schlechter.at"><svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>mail</title><g fill="#4c4c4c"><path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z" class="fill-current"></path></g></svg></a>
                    <a class="w-6 h-6 hover:text-gray-300 text-white transition-colors" href="tel:+4353348810"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>phone</title><g fill="none"><path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" class="fill-current"></path></g></svg></a>
                </div>
            </div>
        </div>
        <div class="text-white absolute bottom-3 w-full text-center text-sm">
            © Ulrich Schlechter | Design & Development by <a class="text-secondary hover:text-gray-400" href="https://raphaelbernhart.at/">Raphael Bernhart</a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'FooterComponent'
})
</script>