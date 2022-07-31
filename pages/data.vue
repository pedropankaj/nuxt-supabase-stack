<script setup>
import DataForm from '~~/components/ui/DataForm.vue'

const client = useSupabaseClient()

const { data } = await useAsyncData('contact_emails', async () => {
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

function update(item) {
  console.log('update', item)
  const index = data.findIndex(i => i.id === item.id)
  data[index] = { ...data[index], ...item }
}

async function remove(item) {
  try {
    const res = await stergeNotificare(item)
    if (res.status === 200) {
      alert('Notificare a fost stearsa.')
    }
  } catch (error) {
    console.log('Eroare la stergere. ', error.message)
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
            <button class="btn btn--sm btn--danger" @click="remove(item)">Sterge</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="draft">
      <DataForm :draft="draft" @updateItem="update" /> 
    </div>


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
