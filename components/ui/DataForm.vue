<script setup>
import { reactive, ref } from 'vue'
import UiBtn from '../ui/UiBtn.vue'
import { useToast } from 'vue-toastification'

const props = defineProps({ draft: Object })
const emit = defineEmits(['update', 'cancel'])
const loading = ref(false)
const formData = reactive({
  ...props.draft
})
const toast = useToast()

watch(props, ({ draft }) => {
  formData.id = draft.id
  formData.nume = draft.nume
  formData.email = draft.email
  formData.mesaj = draft.mesaj
})

const client = useSupabaseClient()

const updateazaNotificare = async ({ id, nume, mesaj, email }) => {
  await client.from('contact_emails').update({ nume, mesaj, email }).match({ id })
}

async function updateazaFormular() {
  loading.value = true
  try {
    await updateazaNotificare(formData)
    toast('Notificarea a fost updatata!')
    emit('update')
  } catch (err) {
    toast.error(err.message)
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div>
    <form class="form form--contact flex col mt-3" @submit.prevent="updateazaFormular">
      <div class="grid cols-2 gap-2 mb-2">
        <input v-model="formData.nume" name="nume" type="text" placeholder="Nume">
        <input v-model="formData.email" name="email" type="email" placeholder="E-mail">
        <textarea v-model="formData.mesaj" name="mesaj" id="" cols="30" rows="3" placeholder="Mesaj"></textarea>
      </div>
      <div class="flex items-flex-end">
        <UiBtn type="button" class="ml-auto" size="lg" @click="emit('cancel')">
          Cancel
        </UiBtn>
        <UiBtn type="submit" class="ml-1" size="lg" state="primary" :disabled="loading">
          {{ loading ? 'Loading...' : 'Updateaza' }}
        </UiBtn>
      </div>
    </form>
  </div>
</template>
