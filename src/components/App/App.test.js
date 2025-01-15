import {getByTestId, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import {renderWithProviders} from '../utils/utils-test-file'
import Form from '../Form/Form'
import ShipList from '../ShipList/ShipList'
import UserPosts from '../general-pages/UserPosts'

jest.mock('../Form/Form',()=>()=><div data-testid="form">Form Component</div>)

describe("App.js test cases",()=>{



test('test App',()=>{
    //render(<App />)
    renderWithProviders(<App />);
    const heading2=screen.getByRole('heading',{level:2})
    //screen.debug();
   //expect(heading2).toHaveTextContent('hello')
    //
    const formElement=screen.getByTestId('form')
    console.log("formElement",formElement)
    expect(formElement).toBeInTheDocument()
    expect(formElement).toHaveTextContent('Form Component')

})
// test('')
})