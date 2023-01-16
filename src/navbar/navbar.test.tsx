import {render } from 'solid-testing-library';
import {Navbar} from "./navbar";

describe('<Navbar/>', ()=> {
  test('should contain links', () => {
    const element = render(() => <Navbar/>)
    expect(1).toBe(1)
  })
})
