<template>
  <div class="flex-grow h-16">
    <div class="p-5">
      <base-list :data="data" :bordered="false">
        <template #item="{ item }" class="list-item">
          <NuxtLink :to="item.url">
            <p class="mb-1 text-xl text-green-200 font-semibold">
              <span>{{ item.title}}</span>
              <svg style="display: unset; float: right" width="8" height="19" viewBox="0 0 8 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 9.5L0.999999 18" stroke="#39B54A"/>
              </svg>
            </p>
          </NuxtLink>
          <p class="text-gray-500">{{ item.content }}</p>
        </template>
      </base-list>
    </div>
  </div>
</template>

<script setup>
import BaseList from "~/components/base/BaseList.vue";

const data = [
  {
    title: 'Обучение',
    content: 'По закону, агент должен пройти государственную аттестацию и набрать 80 баллов.',
    url: 'https://google.com',
  },
  {
    title: 'Документы',
    content: 'После аттестации загрузите удостоверение личности, аттестат или диплом, справку об отсутствии судимости',
    url: 'activate-steps/users-documents',
  },
  {
    title: 'Подписать договор',
    content: 'Ознакомьтесь с договором и заявлением. Подпишите их с помощью Digital ID (нужен только телефон)',
    url: '',
  }
]
</script>