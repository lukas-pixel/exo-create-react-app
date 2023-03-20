import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'

import Freelances from './'
import { ThemeProvider } from '../../utils/context'

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicien fullstack',
        picture: '',
    }
]

const server = setupServer(
    //On précise ici l'url qu'il faudra 'intercepter"
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        //là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)

// Active la simulation d'API avant les tests depuis server 
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

it('Should display freelancers names', async () => {
    render(
        <ThemeProvider>
            <Freelances />
        </ThemeProvider>
    )

    screen.getByTestId('loader')

    await waitFor(() => {
        screen.getByText('Harry Potter')
        screen.getByText('Hermione Granger')
    })
})