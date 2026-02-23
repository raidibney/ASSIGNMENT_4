## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans-getElementById select one elemet by using the id , it returns only one element and here the id must be unique for the each element ,and it is considered as a fastest method.

getElementsByClassName select elements by the class names ,it returns htmlcollections and multiple elements at a time , for accessing it must need to use the index number .

querySelector select the fast matching element ,returns only the first match ,it use the css selector syntax and it is very flexible 

querySelectorAll selects all the matching elements .it returns nodelists and multiple elemenst , it use the css selectors , it is the most modern and commonly used 

### 2. How do you create and insert a new element into the DOM?

   ans - To create and insert a new element into the DOM, there are  3 steps:
   Create the element ,
   Add content or attributes,
   Insert it into the page

### 3. What is Event Bubbling? And how does it work?
 ans-Event bubbling is when an event on an element automatically moves up to its parent elements in the DOM.Event bubbling happens when something you do on an element, like clicking a button, first affects that element and then automatically affects its parent elements, moving up the page.

### 4. What is Event Delegation in JavaScript? Why is it useful?
  ans -Event delegation is a way to handle events for multiple child elements by attaching a single listener to their parent.
 it is usefule because - 
 Reduces code – No need to add listeners to every child element.
 Better performance – Fewer event listeners means less memory usage.
 Dynamic elements – Works for elements added to the DOM later, after the page loads.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
ans = The preventDefault() method in JavaScript stops the browser’s default action for an event, like preventing a link from navigating or a form from submitting. In contrast, stopPropagation() stops the event from moving up (bubbling) or down (capturing) through the DOM, preventing parent or ancestor elements from reacting to it. Essentially, preventDefault() controls the browser’s behavior, while stopPropagation() controls how the event spreads through the page.

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: https://github.com/raidibney/ASSIGNMENT_4
2. Live Site Link: https://raidibney.github.io/ASSIGNMENT_4/
