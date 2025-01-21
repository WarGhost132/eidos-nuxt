import { Account, Client } from 'appwrite'
import { APP_WRITE_ID } from '~/libs/app.constants'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject(APP_WRITE_ID)

export const account = new Account(client)
