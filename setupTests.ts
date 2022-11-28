import '@testing-library/jest-dom'
import { server } from './mocks/server'
jest.mock('next/router', () => ({useRouter:() => ({query:{userId:'909516'}})}))
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())