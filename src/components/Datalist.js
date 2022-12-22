import React from 'react'


const items =[
  {
    itemname:'laptop',
    weight:'2kg',
    color:'red',
    itemid:1,
    itemimage:'https://media.gcflearnfree.org/content/55e0696b1496fdb039ceeecd_01_17_2014/Buttons_laptop_callout.jpg'
  },
  {
    itemname:'mobile',
    weight:'200g',
    color:'black',
    itemid:2,
    itemimage:'https://media.gcflearnfree.org/content/55e0696b1496fdb039ceeecd_01_17_2014/Buttons_laptop_callout.jpg'
  },
  {
    itemname:'laptop',
    weight:'5kg',
    color:'gray',
    itemid:3,
    itemimage:'https://media.gcflearnfree.org/content/55e0696b1496fdb039ceeecd_01_17_2014/Buttons_laptop_callout.jpg'
  },
  {
    itemname:'laptop',
    weight:'5kg',
    color:'gray',
    itemid:4,
    itemimage:'https://media.gcflearnfree.org/content/55e0696b1496fdb039ceeecd_01_17_2014/Buttons_laptop_callout.jpg'
  },
  {
    itemname:'laptop',
    weight:'5kg',
    color:'gray',
    itemid:5,
    itemimage:'https://media.gcflearnfree.org/content/55e0696b1496fdb039ceeecd_01_17_2014/Buttons_laptop_callout.jpg'
  },
  {
    itemname:'laptop',
    weight:'5kg',
    color:'gray',
    itemid:6,
    itemimage:'https://media.gcflearnfree.org/content/55e0696b1496fdb039ceeecd_01_17_2014/Buttons_laptop_callout.jpg'
  }
  
];




function Datalist() {
  return (
    <div>
      <h1>List of Items</h1>

{/* <pre>
React.js
-------------------------------------------
1) lab
2) data binding (single)
3) create git account
4) node.js install
5) git bash
-----------------------------------
6) what is npm ?
7) check version
	node -v
	npm -v
8) create project
	npx create-react-app myreactapp
9) code . (open in vs code)
---------------------------------------------------
10) ctrl + C  (terminate)
	git remote -v 
	git init
	git remote add origin <path>
	git add --all
	git commit -m "message for "
	git push origin  <branch name>
	git pull origin <branch name>
---------------------------------------------------
1) git add --all
2) git commit -m "ksdjfks"
3) git pull origin master
--------------------------------------------------
react js
==================================
1) types of component (page)
	1) function
	2) class
2) export / import
	1) default
	2) name {}
3) fragment
----------------------------------------
4) expression
5) design
	1) custom design (html css)
	2) bootstrap
---------------------------------------
6) event binding
----------------------------------------
7) react routing
	1) install routing package
	2) import BrowserRouter, Route, Routes, Link
8) react bootstrap
	npm install react-bootstrap bootstrap
	import comportants
-----------------------------------------
9) image
	1) online
	2) public folder
	3) src folder
------------------------------
10) map()
11) json
 */}

{/* </pre> */}

      {/* {items.map(({itemid,color,itemname})=>(
        <h2>{itemid} text {color} {itemname}</h2>
      ))} */}


      {/* {items.map((i)=>(
        <h2>{i.itemid} text {i.color} {i.itemname}</h2>
      ))} */}




      <div className='container-fluid'>
        <div className='row'>

 {items.map((i)=>(
        
          <div className='col-3'>
          <div className="card">
              <img src={i.itemimage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{i.itemname}</h5>
                <p className="card-text">Item Id:{i.itemid}</p>
                <a href="#" className="btn btn-primary">{i.weight}</a>
              </div>
            </div>
          </div>
 ))}

        </div>
        </div>




    </div>
  )
}

export default Datalist