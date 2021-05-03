import { StrengthPipe } from "./strength.pipe"


describe('StengthPipe', () => {
    let pipe;
    beforeEach(() => {
        pipe = new StrengthPipe();
    })

    xit('shoud display weak if strength is 5', () => {
        

        expect(pipe.transform(5)).toEqual('toto');
    })
})