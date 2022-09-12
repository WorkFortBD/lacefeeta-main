import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email: credentials.email, password: credentials.password})
                      });

                    const data = await res.json();

                    if(!data.data || !data.status) {
                        throw new Error(data.message);
                    } else {
                        const user = {
                            access_token: data.data.access_token
                        }
                        return user;
                    }

                } catch (error) {
                    throw new Error(error);
                }
            }
        })
    ],
    callbacks: {
        async session(session, token) {
            session.accessToken = token.accessToken;
            return session
        },

        async jwt(token, user) {
            if(user) {
                token.accessToken = user.access_token
            }
            return token;
        },
    }
})