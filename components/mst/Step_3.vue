<template>
  <div>
    <div class="px-5 py-9">
      Страхователь
      <BaseTextField
          :label="'ИИН'"
          :placeholder="'123456789012'"
          :type="'iin'"
      />
      <BaseTextField
          :label="'Фамилия'"
          :placeholder="'На кириллице'"
          :type="'last_name'"
      />
      <BaseTextField
          :placeholder="'На латинице'"
          :type="'last_name_eng'"
      />
      <BaseTextField
          :label="'Имя'"
          :placeholder="'На кириллице'"
          :type="'first_name'"
      />
      <BaseTextField
          :placeholder="'На латинице'"
          :type="'first_name_eng'"
      />
      <BaseTextField
          :label="'Дата рождения'"
          :type="'birth_date'"
          :placeholder="'дд.мм.гггг'"
      />
      <BaseTextField
          :label="'Номер документа'"
          :type="'document_number'"
      />
      <BaseTextField
          :label="'Дата выдачи'"
          :type="'given_date'"
          :placeholder="'дд.мм.гггг'"
      />
      <BaseTextField
          :label="'Кем выдан'"
      />
    </div>
  </div>
</template>