<script setup>
import { useToast } from 'vue-toastification'
import DataForm from '~/components/ui/DataForm.vue'

const client = useSupabaseClient()
const loading = ref(false)

const { data, refresh } = await useAsyncData('contact_emails', async () => {
  const { data } = await client.from('contact_emails').select('id, nume, email, mesaj')
  return data
})

const stergeNotificare = ({ id }) => {
  return client.from('contact_emails').delete().match({ id })
}

const draft = ref(null)

function edit(item) {
  draft.value = item
}

async function remove(item) {
  const toast = useToast()
  loading.value = true
  try {
    const res = await stergeNotificare(item)
    if (res.status === 200) {
      refresh()
      toast('Notificarea a fost stearsa!')
    }
  } catch (error) {
    toast.error(error.message)
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div class="container page page--contact">
    <h3>Intrari in baza de date <code>contact_emails</code></h3>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nume</th>
          <th>Email</th>
          <th>Mesaj</th>
          <th>Actiuni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nume }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.mesaj }}</td>
          <td>
            <button class="btn btn--sm mr-1" @click="edit(item)">Edit</button>
            <button class="btn btn--sm btn--danger" :disabled="loading" @click="remove(item)">{{ loading ? 'Se sterge...' : 'Sterge' }}</button>
          </td>
        </tr>
      </tbody>
    </table>

    <Transition name="bounce">
      <div v-if="draft">
        <DataForm :draft="draft" @update="refresh" @cancel="draft = null" /> 
      </div>
    </Transition>

  </div>
</template>

<style lang="sass" scoped>
.mr-1
  margin-right: 1rem

.btn--danger
  background-color: #ff980099

h3
  code
    background-color: var(--color-dark-purple)
    padding: 0 0.5rem
    border-radius: 0.5rem

table
  width: 100%
  padding: 1.5rem
  background-color: var(--color-purple)
  border-radius: 0.5rem

  th
    padding: 1rem .5rem
    text-align: left

  td
    padding: .5rem

</style>
