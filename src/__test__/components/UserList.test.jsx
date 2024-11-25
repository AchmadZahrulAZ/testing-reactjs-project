import { render, screen } from '@testing-library/react';
import UserList from '../../components/UserList';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve([{id: 1, name: "John Doe"}])
    })
})

describe("UserList Component",() => {
    test("render user list", async () => {
        render(<UserList />)
        expect(await screen.findByText("John Doe")).toBeInTheDocument()
    })
})