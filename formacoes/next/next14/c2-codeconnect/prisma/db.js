import { PrismaClient } from '@prisma/client'
// or const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

export default db