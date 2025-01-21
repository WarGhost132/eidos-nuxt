<template>
  <div class="flex justify-between mb-4">
    <h2 class="font-extrabold text-xl">Учебные сессии</h2>
    <div class="flex items-center gap-[14px]">
      <SessionSearch />
      <SessionFilter />
      <SessionCreate />
    </div>
    <UiPopover>
      <span class="flex font-extrabold text-lg justify-center mb-4"
        >Фильтр</span
      >
      <SessionFilterForm />
    </UiPopover>
  </div>
</template>
