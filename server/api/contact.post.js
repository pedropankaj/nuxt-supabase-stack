import { mailer } from '~/utils/mailer.js'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  // validare campuri intrare
  // const isValid = valideazaInput(body)
  
  // if (!isValid) {
  //   return {
  //     success: false,
  //     message: 'Datele nu sunt valide.'
  //   }
  // }

  const client = serverSupabaseClient(event)

  try {
    await mailer(body)
    await client.from('contact_emails').upsert(body)
    return { success: true }
  } catch (err) {
    return { success: false }
  }
})
