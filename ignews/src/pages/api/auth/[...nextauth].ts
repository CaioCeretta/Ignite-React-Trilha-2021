import GitHubProvider from 'next-auth/providers/github'
import NextAuth from "next-auth"
import { query as q } from 'faunadb'

import { fauna } from '@/services/fauna'

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {


      const { email } = user


      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email: user.email } }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )
        return true
      } catch {
        return false
      }


    },
  }
})

// FaunaDB - HTTP: Utiliza um protocolo ao qual não se torna necessaria a conexão ativa a um banco de dados

/*PostgresSQL, MongoDB - Quando vai fazer uma operação no banco, é necessário uma conexão ativa com o banco
e o serverless não */