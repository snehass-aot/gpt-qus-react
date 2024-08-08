import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import LoginStatus from './components/LoginStatus'
import TodoList from './components/TodoList'
import ButtonClicker from './components/ButtonClicker'
import NameForm from './components/NameForm'
import ClockTime from './components/ClockTime'
import ItemList from './components/ItemList'
import FocusInput from './components/FocusInput'
import DataFetcher from './components/DataFetcher'
import StyledButton from './components/StyledButton'
import ControlledForm from './components/ControlledForm'
import StyledComponent from './components/StyledComponent'
import FilterableList from './components/FilterableList'
import DataWithLoadingAndError from './components/DataWithLoadingAndError'
import LimitedCounter from './components/LimitedCounter'

function App() {
   const login = true;
   const list =[{
     title:"Movies",
     description:"Movies are fantastic"
   },
   {
    title:"Foods",
    description:"Foods are very  tasty"
   },
   {
    title:"Dresses",
    description:"Dressess are very colourful"
   }]

  return (
    <>
     <Greeting name='Alice'/>{/*1. Create a Simple Functional Component
                              Create a functional component named Greeting that displays "Hello, World!".*/}
                            {/*2. Props Basics Modify the Greeting component to accept a prop called name and display "Hello, [name]!".
                             Example: <Greeting name="Alice" /> should render "Hello, Alice!". */}
    
     <Counter />            {/*3.State Management Create a component called Counter that displays a number and has two buttons, "Increment" and "Decrement". 
                              The number should start at 0 and update when the buttons are clicked.          */}
    
     <LoginStatus isLoggedIn = {login}/>{/*4. Conditional Rendering
                                       Create a component called LoginStatus that displays "Logged In" if a prop isLoggedIn is true and "Logged Out" if it is false. */}
    
     <ul>                             {/* 5. List Rendering
                                      Create a component called TodoList that takes a list of todo items as props and renders them as an unordered list.*/}
      {
        list.map((obj,index) => {
          return(
              <TodoList key={index} title={obj.title} desc={obj.description}/> 
          )
        })
      }
     </ul>
     <ButtonClicker />{/*6. Event Handling
                      Create a component called ButtonClicker with a button. When the button is clicked, it should display an alert with the message "Button clicked!". */}
    
     <NameForm />{/*7. Forms and Inputs
                 Create a component called NameForm with an input field where a user can type their name. Display the name below the input field as they type. */}
     
     <ClockTime />{/*8. Lifecycle Methods (Class Components)
                  Create a class component called Clock that displays the current time and updates every second. */}
    
    <DataFetcher />{/*9. UseEffect Hook (Functional Components)
                   Create a functional component called DataFetcher that fetches data from an API and displays it. Use the useEffect hook to fetch the data when the component mounts. */}
    
     <ItemList />{/*9: Display a List of Items with useEffect and Conditional Rendering
                 Create a component called ItemList that fetches a list of items from an API when the component mounts. The component should also include a button to toggle the visibility of the list. If the list is visible, clicking the button should hide it, and if the list is hidden, clicking the button should show it. */}
    
     <FocusInput />{/*10: Focus Management on an Input Field
                   Create a component called FocusInput that automatically focuses on an input field when the component is rendered. */}
     <StyledButton styles={{backgroundColor:"green",color:"white",padding:"10px",width:"300px",border:'none',borderRadius:"10px",marginTop:"10px"}}/>
     <ControlledForm />
     <StyledComponent />
     <FilterableList />
     <DataWithLoadingAndError />
     <LimitedCounter />
    </>
  )
}

export default App
