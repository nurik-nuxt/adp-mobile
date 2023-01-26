<template>
  <div class="p-4">
    <div class="upload-txt">
      <p class="p-1">Загрузите фотографии следующих документов:</p>
      <p class="p-2">На документе должны быть чётко видны весь текст, портрет, подписи и печати —тогда вы быстро пройдёте проверку</p>
    </div>
    <div class="upload-fields">
      <BaseUpload
          v-for="(document, index) in documents"
          :label="document.title"
          :key="index"
          :is-required="document.required"
          :link="document.link"
          :class="document.link ? 'i-1' : 'i-2'"
          @changed="(event) => getFile(event,document.key)"
          :type="document.key"
      >
      </BaseUpload>
    </div>
  </div>
  <footer>
    <button class="btn-1">
      <p class="mb-1">←</p>
      <p>На главную</p>
    </button>
    <button class="btn-2" @click="checkFields">Отправить на проверку</button>
  </footer>
</template>

<script setup>
import BaseUpload from "~/components/base/BaseUpload.vue";

let a = ref([])
const documents = ref([
  {
    id: 1,
    title: "Удостоверение личности",
    required: true,
    key: 'digital_id',
    link: true,
  },
  {
    id: 2,
    title: "Аттестат/диплом",
    required: true,
    key: 'attestation',
    link: true,
  },
  {
    id: 3,
    title: "Справка об отсутствии судимости",
    required: true,
    key: 'abc',
    link: false,
  },
  {
    id: 4,
    title: "Трудовая книжка (не обязательно)",
    required: false,
    key: 'employment_history',
    link: true,
  }
])

const getFile = (event, value) => {
  console.log()

  // for (let i = 0; i < documents.value.length; i++) {
  //   a.value[i] = event.target.files[i].name
  // }


  // console.log(event.target.files)
  // console.log(event.target.files[0])
  // console.log(event.target.files[0].name)
  // console.log(a.value)
  // toBase64(event.target.files[0])
}

function toBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise((res, req) => {
    reader.addEventListener("load", () => {
      const image = reader.result;
      console.log(image)
      res(image);
    })
  })
}

function checkFields() {
  for(let i = 0; i < documents.value.length; i++) {
    if(a.value == null){
      console.log('missing file')
    }
    else {
      console.log(' file')
    }
  }
}

</script>
<style>
  .p-4 {
    padding: 0;
  }
  .upload-txt {
    margin: 28px 20px 0 20px;
  }
  .upload-txt p {
    padding: 0;
  }
  .p-1 {
    font-size: 22px;
    font-weight: 400;
    line-height: 28px;
  }
  .p-2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 10px;
  }
  .upload-fields{
    padding: 0 20px 0 20px;
    margin-top: 52px;
  }
  .i-1 {
    margin-bottom: 30px;
  }
  .i-2 {
    margin-bottom: 20px;
  }
  footer {
    width: 100%;
    border-top: 1px solid #E4E5E8;
    margin-top: 146px;
    padding: 10px;
    display: flex;
  }
  footer button {
    height: 44px;
    font-size: 16px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-1 {
    width: 130px;
    background-color: #C1E5B8;
  }
  .btn-2 {
    margin-left: 10px;
    width: 230px;
    background-color: #E4E5E8;
    color: #737B8C;
  }
</style>