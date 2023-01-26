<template>
  <div class="flex flex-col justify-between h-full">
    <div class="px-5 pt-9 pb-12 h-9/12 border-b-2 border-gray-50">
      <div class="flex items-start">
        <div class="flex items-center h-5 mb-9">
          <input id="terms" type="checkbox" value="" class="w-4 h-4 rounded border border-gray-300 outline-none text-green-100 focus:ring-green-100">
        </div>
        <label for="terms" class="block not-italic text-sm font-normal text-black-50 ml-2.5">Резидент Казахстана</label>
      </div>
      <div class="flex justify-between items-center w-full">
        <BaseTextField
            :label="'ИИН'"
            :placeholder="'123456789012'"
            :type="'iin'"
            class="w-9/12 mr-1"
        />
        <BaseButton variant="green" class="w-3/12">Поиск</BaseButton>
      </div>
      <BaseTextField
          :label="'Фамилия'"
          :placeholder="'На кириллице'"
          :type="'first_name'"
      />
      <BaseTextField
          :placeholder="'На латинице'"
          :type="'first_name_eng'"
      />
      <BaseTextField
          :label="'Имя'"
          :placeholder="'На кириллице'"
          :type="'last_name'"
      />
      <BaseTextField
          :placeholder="'На латинице'"
          :type="'last_name_eng'"
      />
      <BaseTextField
          :label="'Регион'"
          :placeholder="'Алматы'"
          :type="'region'"
          is-radio-input
          v-on:click.native="openModal('showRegionListModal')"
      />
      <SelectCityModal v-show="showDocumentTypeModal"/>
      <BaseTextField
          :label="'Тип документа'"
          :placeholder="'Удостоверение личности'"
          :type="'document_type'"
          v-on:click.native="openModal('showDocumentTypeModal')"
          v-model:inputValue="form.document_type"
          is-radio-input
      />
      <CheckboxModal v-show="showDocumentTypeModal" @close-modal="closeModal" @change-select="changeSelect"/>
      <BaseTextField
          :label="'Номер документа'"
          :placeholder="'039664889'"
          :type="'document_number'"
      />
      <BaseTextField
          :label="'Дата выдачи'"
          :placeholder="'дд.мм.гггг'"
          :type="'given_date'"
      />
      <BaseTextField
          :label="'Кем выдан'"
          :placeholder="'МВД'"
          :type="'document_gived_by'"
      />
      <ButtonUpload/>
      <div class="mb-5">
        <label class="block font-normal text-sm text-gray-100 mb-0.5">Пол</label>
        <BaseTab :items="terms" :selected-tab="gender" @clicked="(value) => onChangeGender(value, 'gender')"/>
      </div>
      <BaseTextField
          :label="'Адрес'"
          :placeholder="'Жетису-3,54'"
          :type="'address'"
      />
      <BaseTextField
          :label="'Телефон'"
          :placeholder="'+7 _ _ _–_ _ _– _ _–_ _'"
          :type="'phone'"
      />
    </div>
    <div class="flex p-2.5">
      <BaseButton variant="light" class="mr-2.5" @click="goToHolders">← Застрахованные</BaseButton>
      <BaseButton>Сохранить</BaseButton>
    </div>
  </div>
</template>

<script setup>
import CheckboxModal from "~/components/common/modal/CheckboxModal.vue";
import SelectCityModal from "~/components/common/modal/SelectCityModal.vue";
import ButtonUpload from "~/components/common/upload/ButtonUpload.vue";

const route = useRoute()

const form = reactive({
  document_type: null,
  document_type_id: null
})

const terms = ref([
  {
    id: 1,
    title: 'Мужской'
  },
  {
    id: 2,
    title: 'Женский'
  }
])
const gender = ref({
  id:1
})
const showDocumentTypeModal = ref(false)
const showRegionListModal = ref(false)
function onChangeGender(value, key) {
  if (key === 'gender') {
    gender.value = value
  }
}

function openModal(key) {
  console.log("Show Modal Window")
  if (key === 'showDocumentTypeModal') {
    showDocumentTypeModal.value = true
  }
  if (key === 'showRegionListModal') {
    console.log("regions", key)
    showRegionListModal.value = true
  }
}
function closeModal() {
  showDocumentTypeModal.value = false
}
function changeSelect(value) {
  form.document_type = value.title
  form.document_type_id = value.id
  closeModal()
}

function goToHolders() {
  return navigateTo({
    path: `/mst/holders`
  })
}
</script>