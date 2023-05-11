import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'Adriano',
    name: 'MAdriano Brazil',
    isFollowing: true
  },
  {
    userName: 'CR7',
    name: 'PCristiano Ronaldo',
    isFollowing: false
  },
  {
    userName: 'leo',
    name: 'Cuccitini',
    isFollowing: true
  },
  {
    userName: 'Vini',
    name: 'vini',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}