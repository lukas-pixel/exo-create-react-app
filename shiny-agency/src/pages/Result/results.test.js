import { formatJobList } from "./";

describe('The formaJobList function', () => {
    it('should add a comma to a world', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})