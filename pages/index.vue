<template>
    <div>
        <div class="h-screen w-screen bg-primary dark:bg-primaryColor">
            <div class="container">
                <h1 class="font-display text-9xl uppercase max-w-4xl text-primary dark:text-text">{{ $t('home.head.lead') }}</h1>
                <Button text="Testbutton" :light="true" />
            </div>
        </div>
        <section class="container flex gap-x-8 my-24">
            <div class="max-w-lg">
                <Button text="Testbutton" :light="false" />
                <ParagraphComponent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam suscipit obcaecati alias possimus quia dolorum dignissimos deleniti quaerat voluptas iusto vitae doloribus dicta neque sit, repellendus corporis est voluptatum delectus inventore aspernatur accusamus cupiditate soluta vero. Dignissimos natus nihil quaerat excepturi veniam, perspiciatis delectus facere accusamus voluptate! Adipisci ullam quas nemo hic. Corrupti, voluptate delectus. Nam culpa iste eos est, assumenda numquam dolorem nobis fugiat. Saepe non quam nam earum facere harum voluptatibus dolorum repudiandae iure recusandae eos modi delectus, ipsa fugit molestiae blanditiis similique libero omnis quibusdam ipsam obcaecati vel reiciendis quasi! Doloribus ea nam excepturi asperiores maiores assumenda necessitatibus deleniti, laudantium modi exercitationem tempore est cumque non magni porro quidem accusantium obcaecati culpa? Tempore enim dicta saepe reiciendis quasi sequi cumque labore vitae rerum earum maxime quidem aliquid blanditiis impedit laborum aspernatur ratione illo minus eveniet, dolorum, officia totam nihil. Molestias, sit perferendis! Illum perferendis sint ducimus quo, numquam quibusdam sit odit quia animi placeat eum eos fugiat libero aliquid fuga rem autem eveniet consequuntur ratione alias unde atque accusantium! Ipsam id, sapiente quas eveniet perspiciatis esse modi nostrum ipsum animi. Impedit aspernatur quidem cupiditate repellat omnis, nam dolorem delectus ullam nihil consectetur, dolore repudiandae, necessitatibus non eveniet laboriosam dolor magni est magnam dignissimos eum blanditiis voluptas quia modi! Ipsam at cumque enim aperiam consectetur repellat ex animi praesentium numquam libero. Sint corrupti recusandae similique vitae, ad repudiandae velit perspiciatis iure fugit voluptatibus temporibus facere explicabo aspernatur dolorem eum, voluptatum asperiores quasi! Nesciunt dolor non iure vitae velit maxime pariatur dolore accusantium molestias laudantium recusandae atque, facilis repellat, ipsam animi asperiores, eos totam rem ea nihil. Cumque aut neque facere eveniet qui atque tempora aspernatur voluptates adipisci, et consequuntur reprehenderit perferendis ipsum, maxime aperiam ratione, dolorem quia ipsa minus officia numquam id dicta. Perspiciatis nisi cupiditate, ut, eius quo alias, sit temporibus sint nemo veritatis et quos. Sunt libero dolor, asperiores, dolores eveniet accusamus, vero neque dolorum quasi velit quo praesentium quibusdam. Soluta quod veniam ipsam similique voluptatem assumenda provident voluptatibus expedita cum, earum quis quam praesentium, vero eos accusantium suscipit? Nesciunt fugiat neque soluta ad ab molestias adipisci rem accusamus distinctio harum? Molestiae vel assumenda dolor, praesentium voluptatum excepturi. Rem neque exercitationem quidem atque laudantium dolores obcaecati quo autem et iste, sapiente, aliquid expedita sit at. Dicta odit consequatur doloribus cupiditate exercitationem. Placeat reiciendis, voluptas quae sint, vero omnis totam eveniet asperiores officia blanditiis voluptatum nam officiis ipsam similique aperiam harum dolorum ipsum provident eos cupiditate. Aperiam nisi nesciunt itaque possimus corporis consequatur nostrum quod nulla? Explicabo rem sed alias omnis deleniti, iste error obcaecati illum aspernatur, aperiam rerum? Quidem fugiat veniam ducimus voluptatibus laudantium iure. Vel dolorum hic amet quos accusamus sed sunt perspiciatis harum illo, corrupti assumenda laborum illum odit alias provident magni nulla, dolorem modi, officia temporibus. Perferendis debitis minus rem at sit! Cupiditate ipsum deleniti sapiente delectus ipsa vel? Atque eos, rerum aperiam magnam in dolores eaque corporis harum, sunt est obcaecati officiis perferendis distinctio ut veniam saepe quod et labore. Ex, sit.</ParagraphComponent>
            </div>
            <div class="flex flex-col gap-y-4">
                <h4 class="text-7xl font-thin italic">I focus on</h4>
                <ServiceLink text="Development" />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ServiceLink from '@/components/widgets/ServicesLink.vue'

    export default Vue.extend({
        name: 'IndexPage',
        components: {
            ServiceLink
        }
    })
</script>